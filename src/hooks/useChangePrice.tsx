import { ethers } from "ethers";
import { BigNumber } from "ethers/lib/ethers";
import { useEffect, useState } from "react";
import { VALIDATION_ERROR } from "../common";
import constants from "../constants";
import { PAIR_TOKEN } from "../enums";
import { IFeed } from "../interfaces";

function useChangePrice({chainId, tokenBase, tokenQuote, initialValue} : {chainId: number, tokenBase: string, tokenQuote: string, initialValue: string}) {
    // validation required fields
    if(!chainId) {
        throw new Error(VALIDATION_ERROR.MISSING_CHAIN_ID)
    };
    const chainIds = constants.networks.map(network => network.chainId);
    if(!chainIds.includes(chainId)) {
        throw new Error(VALIDATION_ERROR.UNSUPPORTED_CHAIN_ID)
    }
    if(!tokenBase) {
        throw new Error(VALIDATION_ERROR.MISSING_TOKEN_BASE_ADDRESS)
    }
    if(!tokenQuote) {
        throw new Error(VALIDATION_ERROR.MISSING_TOKEN_QUOTE_ADDRESS)
    }
    if(tokenBase === ethers.constants.AddressZero || tokenQuote === ethers.constants.AddressZero || ethers.utils.isAddress(tokenBase) === false || ethers.utils.isAddress(tokenQuote) === false) {
        throw new Error(VALIDATION_ERROR.INVALID_TOKEN_ADDRESS)
    }
    if(tokenBase === tokenQuote) {
        throw new Error(VALIDATION_ERROR.TOKEN_BASE_SAME_AS_TOKEN_QUOTE)
    }
    if(!initialValue) {
        throw new Error(VALIDATION_ERROR.MISSING_INITIAL_VALUE)
    }
    if(!BigNumber.from(initialValue)._isBigNumber) {
        throw new Error(VALIDATION_ERROR.INVALID_INITIAL_VALUE)
    }
    const [tokenBaseSymbol, setTokenBaseSymbol] = useState<string>('');
    const [tokenQuoteSymbol, setTokenQuoteSymbol] = useState<string>('');
    const [baseValue, setBaseValue] = useState<BigNumber>();
    const network = constants.networks.find(network => network.chainId === chainId);
    const provider = new ethers.providers.JsonRpcProvider(network?.rpc);
    async function getSymbol(address: string, provider: ethers.providers.JsonRpcProvider) {
        const tokenContract = new ethers.Contract(address, constants.abi.erc20, provider);
        const symbol = await tokenContract.symbol();
        return symbol;
    }
    useEffect(() => {
        getSymbol(tokenBase, provider).then(symbol => setTokenBaseSymbol(symbol));
        getSymbol(tokenQuote, provider).then(symbol => setTokenQuoteSymbol(symbol));
    }, [])
    useEffect(() => {
        if(tokenBaseSymbol && tokenQuoteSymbol){
            if(!PAIR_TOKEN[`${tokenBaseSymbol}_${tokenQuoteSymbol}` as keyof typeof PAIR_TOKEN]) {
                if(!PAIR_TOKEN[`${tokenQuoteSymbol}_USD` as keyof typeof PAIR_TOKEN] && !PAIR_TOKEN[`${tokenBaseSymbol}_USD` as keyof typeof PAIR_TOKEN]) {
                    throw new Error(VALIDATION_ERROR.UNSUPPORTED_PAIR_TOKEN)
                }else {
                    getInDirectPrice(PAIR_TOKEN[`${tokenQuoteSymbol}_USD` as keyof typeof PAIR_TOKEN], PAIR_TOKEN[`${tokenBaseSymbol}_USD` as keyof typeof PAIR_TOKEN], provider, initialValue).then(baseValue => {
                        setBaseValue(baseValue);
                    })           
                }
            }
            getDirectPrice(PAIR_TOKEN[`${tokenBaseSymbol}_${tokenQuoteSymbol}` as keyof typeof PAIR_TOKEN], chainId, provider, initialValue).then(baseValue => {
                setBaseValue(baseValue);
            })
        }
    }, [tokenBaseSymbol, tokenQuoteSymbol])
    async function getDirectPrice (pairToken: PAIR_TOKEN, chainId: number, provider: ethers.providers.JsonRpcProvider, initialValue: string) {
        const feed: IFeed | undefined = constants.feeds.find(feed => feed.pairName === pairToken && feed.network?.chainId === chainId);
        if(!feed) {
            throw new Error(VALIDATION_ERROR.UNSUPPORTED_FEED_LIQUIDITY)
        }
        const feedContract = new ethers.Contract(feed.address, constants.abi.feed, provider);
        const latestAnswer: BigNumber =  await feedContract.latestAnswer();
        console.log("price", latestAnswer?.toString());
        const baseValue = BigNumber.from(initialValue).mul(latestAnswer);
        console.log("baseValue", baseValue?.toString());
        return baseValue;
    }
    async function getInDirectPrice (basePair: PAIR_TOKEN, quotePair: PAIR_TOKEN, provider: ethers.providers.JsonRpcProvider, initialValue: string){
        const baseFeed = constants.feeds.find(feed => feed.pairName === basePair && feed.network?.chainId === chainId);
        const quoteFeed = constants.feeds.find(feed => feed.pairName === quotePair && feed.network?.chainId === chainId);
        if(!baseFeed || !quoteFeed) {
            throw new Error(VALIDATION_ERROR.UNSUPPORTED_FEED_LIQUIDITY)
        }
        const baseFeedContract = new ethers.Contract(baseFeed.address, constants.abi.feed, provider);
        const quoteFeedContract = new ethers.Contract(quoteFeed.address, constants.abi.feed, provider);
        const baseLatestAnswer: BigNumber =  await baseFeedContract.latestAnswer();
        const quoteLatestAnswer: BigNumber =  await quoteFeedContract.latestAnswer();
        const baseValue = BigNumber.from(initialValue).mul(baseLatestAnswer).div(quoteLatestAnswer);
        return baseValue;
    }
    return {
        tokenBaseSymbol,
        tokenQuoteSymbol,
        baseValue
    }
}
export default useChangePrice;