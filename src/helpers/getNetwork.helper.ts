import { ChainSlug, ChainType } from "../enums";
import { INetworkType } from "../interfaces";

function getNetworkBySlug(networks: INetworkType[], slug: ChainSlug, type: ChainType = ChainType.MAINNET) : INetworkType | undefined  {
    return networks.find(network => network.chainSlug === slug && network.networkSlug === type );
}
export { 
    getNetworkBySlug
}