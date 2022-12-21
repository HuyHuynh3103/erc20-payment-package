import { ChainSlug, ChainType, PAIR_TOKEN } from "../enums"
import { getNetworkBySlug } from "../helpers"
import { IPair } from "../interfaces"
import networks from "./networks.constant"
const pairs: IPair[] = [
    {
        network: getNetworkBySlug(networks, ChainSlug.ETHEREUM),
        pairName: PAIR_TOKEN.ETH_USD,
        address: "0x5f4ec3df9cbd43714fe2740f5e3616155c5b8419"
    },
    {
        network: getNetworkBySlug(networks, ChainSlug.ETHEREUM),
        pairName: PAIR_TOKEN.BTC_USD,
        address: "0xf4030086522a5beea4988f8ca5b36dbc97bee88c"
    },
    {
        network: getNetworkBySlug(networks, ChainSlug.POLYGON),
        pairName: PAIR_TOKEN.ETH_USD,
        address: "0xf9680d99d6c9589e2a93a78a04a279e509205945"
    },
    {
        network: getNetworkBySlug(networks, ChainSlug.POLYGON),
        pairName: PAIR_TOKEN.MATIC_USD,
        address: "0xab594600376ec9fd91f8e885dadf0ce036862de0"
    },
    {
        network: getNetworkBySlug(networks, ChainSlug.AVALANCHE),
        pairName: PAIR_TOKEN.AVAX_USD,
        address: "0x0a77230d17318075983913bc2145db16c7366156"
    },
    {
        network: getNetworkBySlug(networks, ChainSlug.BSC),
        pairName: PAIR_TOKEN.BNB_USD,
        address: "0x0567f2323251f0aab15c8dfb1967e4e8a7d42aee"
    },
    {
        network: getNetworkBySlug(networks, ChainSlug.BSC),
        pairName: PAIR_TOKEN.BUSD_BNB,
        address: "0x87ea38c9f24264ec1fff41b04ec94a97caf99941"
    },
    {
        network: getNetworkBySlug(networks, ChainSlug.ETHEREUM),
        pairName: PAIR_TOKEN.BUSD_ETH,
        address: "0x614715d2af89e6ec99a233818275142ce88d1cfd"
    },
    {
        network: getNetworkBySlug(networks, ChainSlug.BSC),
        pairName: PAIR_TOKEN.USDT_USD,
        address: "0xb97ad0e74fa7d920791e90258a6e2085088b4320"
    }
]
export default pairs