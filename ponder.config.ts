import { createConfig, factory } from "ponder";

import { http, parseAbiItem } from "viem";

import { HyperfundFactoryAbi } from "./abis/HyperfundFactoryAbi";
import { HyperfundAbi } from "./abis/HyperfundAbi";

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
      address: "0xFa9525E19196285Dc69D178C9Fc9F210F9e7F718",
      startBlock: 7583181,
    },
    Hyperfund: {
      network: "sepolia",
      abi: HyperfundAbi,
      address: factory({
        // The address of the factory contract that creates instances of this child contract.
        address: "0xFa9525E19196285Dc69D178C9Fc9F210F9e7F718",
        // The event emitted by the factory that announces a new instance of this child contract.
        event: parseAbiItem(
          "event HyperfundCreated(address indexed hyperfundAddress, address indexed manager, uint256 hypercertId)"
        ),
        // The name of the parameter that contains the address of the new child contract.
        parameter: "hyperfundAddress",
      }),
      startBlock: 7583181,
    },
  },
});
