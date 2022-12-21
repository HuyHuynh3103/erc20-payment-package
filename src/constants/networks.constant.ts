import { ChainSlug, ChainType } from "../enums";
import { INetworkType } from "../interfaces";

const networks: INetworkType[] = [
  {
    "name": "Ethereum Mainnet",
    "chainSlug": ChainSlug.ETHEREUM,
    "networkSlug": ChainType.MAINNET,
    "chainId": 1
  },
  {
    "name": "BNB Chain Mainnet",
    "chainSlug": ChainSlug.BSC,
    "networkSlug": ChainType.MAINNET,
    "chainId": 56
  },
  {
    "name": "Polygon Mainnet",
    "chainSlug": ChainSlug.POLYGON,
    "networkSlug": ChainType.MAINNET,
    "chainId": 137
  },
  {
    "name": "Arbitrum Mainnet",
    "chainSlug": ChainSlug.ARBITRUM,
    "networkSlug": ChainType.MAINNET,
    "chainId": 42161
  },
  {
    "name": "Avalanche Mainnet",
    "chainSlug": ChainSlug.AVALANCHE,
    "networkSlug": ChainType.MAINNET,
    "chainId": 43114
  },
  {
    "name": "Optimistic Ethereum",
    "chainSlug": ChainSlug.OPTIMISM,
    "networkSlug": ChainType.MAINNET,
    "chainId": 10
  },
  {
    "name": "Moonriver Mainnet",
    "chainSlug": ChainSlug.MOONRIVER,
    "networkSlug": ChainType.MAINNET,
    "chainId": 1285
  },
  {
    "name": "Fantom Opera",
    "chainSlug": ChainSlug.FANTOM,
    "networkSlug": ChainType.MAINNET,
    "chainId": 250
  },
  {
    "name": "Harmony Mainnet",
    "chainSlug": ChainSlug.HARMONY,
    "networkSlug": ChainType.MAINNET,
    "chainId": 1666600000
  },
  {
    "name": "Moonbeam Mainnet",
    "chainSlug": ChainSlug.MOONBEAM,
    "networkSlug": ChainType.MAINNET,
    "chainId": 1284
  },
  {
    "name": "Metis Mainnet",
    "chainSlug": ChainSlug.METIS,
    "networkSlug": ChainType.MAINNET,
    "chainId": 1088
  }
]
export default networks