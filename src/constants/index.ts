import feeds from "./feeds.constant";
import networks from "./networks.constant";
import { erc20Abi, feedAbi } from "./abi";
const constants = {
    networks,
    feeds: feeds,
    abi: {
        erc20: erc20Abi,
        feed: feedAbi
    }
}

export default constants;