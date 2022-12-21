import { PAIR_TOKEN } from "../enums";
import { INetworkType } from "./network.interface";
interface IPair {
    network?: INetworkType,
    pairName: PAIR_TOKEN,
    address: string
}
export {
    IPair
}