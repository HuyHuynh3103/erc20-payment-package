import { ChainSlug, ChainType } from "../enums"

interface INetworkType {
    chainId: number,
    name: string,
    chainSlug: ChainSlug,
    networkSlug: ChainType
}
export {
    INetworkType
}