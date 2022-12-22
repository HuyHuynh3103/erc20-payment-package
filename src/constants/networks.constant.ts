import { ChainSlug, ChainType } from "../enums";
import { INetworkType } from "../interfaces";

const networks: INetworkType[] = [
  {
    "name": "Ethereum Mainnet",
    "chainSlug": ChainSlug.ETHEREUM,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://eth-mainnet-public.unifra.io",
    "chainId": 1
  },
  {
    "name": "BNB Chain Mainnet",
    "chainSlug": ChainSlug.BSC,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://bsc-dataseed2.binance.org",
    "chainId": 56
  },
  {
    "name": "Polygon Mainnet",
    "chainSlug": ChainSlug.POLYGON,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://polygon-rpc.com", 
    "chainId": 137
  },
  {
    "name": "Arbitrum Mainnet",
    "chainSlug": ChainSlug.ARBITRUM,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://arb1.arbitrum.io/rpc",
    "chainId": 42161
  },
  {
    "name": "Avalanche Mainnet",
    "chainSlug": ChainSlug.AVALANCHE,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://api.avax.network/ext/bc/C/rpc",
    "chainId": 43114
  },
  {
    "name": "Optimistic Ethereum",
    "chainSlug": ChainSlug.OPTIMISM,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://mainnet.optimism.io",
    "chainId": 10
  },
  {
    "name": "Moonriver Mainnet",
    "chainSlug": ChainSlug.MOONRIVER,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://moonriver.api.onfinality.io/public",
    "chainId": 1285
  },
  {
    "name": "Fantom Opera",
    "chainSlug": ChainSlug.FANTOM,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://rpcapi.fantom.network",
    "chainId": 250
  },
  {
    "name": "Harmony Mainnet",
    "chainSlug": ChainSlug.HARMONY,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://harmony-mainnet.chainstacklabs.com",
    "chainId": 1666600000
  },
  {
    "name": "Moonbeam Mainnet",
    "chainSlug": ChainSlug.MOONBEAM,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://rpc.api.moonbeam.network",
    "chainId": 1284
  },
  {
    "name": "Metis Mainnet",
    "chainSlug": ChainSlug.METIS,
    "networkSlug": ChainType.MAINNET,
    "rpc": "https://andromeda.metis.io/?owner=1088",
    "chainId": 1088
  }
]
export default networks