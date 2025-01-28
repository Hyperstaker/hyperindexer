import { createConfig } from "ponder";

import { http } from "viem";

import { HyperfundFactoryAbi } from "./abis/HyperfundFactoryAbi";

export default createConfig({
  networks: {
    sepolia: {
      chainId: 11155111,
      transport: http(process.env.PONDER_RPC_URL_11155111),
    },
  },
  contracts: {
    HyperfundFactory: {
      network: "sepolia",
      abi: HyperfundFactoryAbi,
      address: "0x3B5912158bb9a0aF359dc5298aF8eb28E936a534",
      startBlock: 7583181,
    },
  },
});
