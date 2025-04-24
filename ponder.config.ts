import { createConfig, factory } from "ponder";

import { http, parseAbiItem } from "viem";

import { HyperfundFactoryAbi } from "./abis/HyperfundFactoryAbi";
import { HyperfundAbi } from "./abis/HyperfundAbi";
import { HyperstakerAbi } from "./abis/HyperstakerAbi";
import { HyperStrategyFactoryAbi } from "./abis/HyperStrategyFactoryAbi";
import { HyperStrategyAbi } from "./abis/HyperStrategyAbi";

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
      address: "0xd75B857560E4d07d43FfD474A22b1d7775F4fCfF",
      startBlock: 8185000,
    },
    Hyperfund: {
      network: "sepolia",
      abi: HyperfundAbi,
      address: factory({
        // The address of the factory contract that creates instances of this child contract.
        address: "0xd75B857560E4d07d43FfD474A22b1d7775F4fCfF",
        // The event emitted by the factory that announces a new instance of this child contract.
        event: parseAbiItem(
          "event HyperfundCreated(address indexed hyperfundAddress, uint256 indexed hypercertId, address admin, address manager, address pauser, address upgrader)"
        ),
        // The name of the parameter that contains the address of the new child contract.
        parameter: "hyperfundAddress",
      }),
      startBlock: 8185000,
    },
    Hyperstaker: {
      network: "sepolia",
      abi: HyperstakerAbi,
      address: factory({
        // The address of the factory contract that creates instances of this child contract.
        address: "0xd75B857560E4d07d43FfD474A22b1d7775F4fCfF",
        // The event emitted by the factory that announces a new instance of this child contract.
        event: parseAbiItem(
          "event HyperstakerCreated(address indexed hyperstakerAddress, uint256 hypercertId, address admin, address manager, address pauser, address upgrader)"
        ),
        // The name of the parameter that contains the address of the new child contract.
        parameter: "hyperstakerAddress",
      }),
      startBlock: 8185000,
    },
    hyperstrategyFactory: {
      network: "sepolia",
      abi: HyperStrategyFactoryAbi,
      address: "0x48880b8a4Fcb2deE00Ede91F837835135B794c13",
      startBlock: 7583181,
    },
    Hyperstrategy: {
      network: "sepolia",
      abi: HyperStrategyAbi,
      address: factory({
        // The address of the factory contract that creates instances of this child contract.
        address: "0x48880b8a4Fcb2deE00Ede91F837835135B794c13",
        // The event emitted by the factory that announces a new instance of this child contract.
        event: parseAbiItem(
          "event HyperstrategyCreated(address indexed hyperstrategyAddress, address allo)"
        ),
        // The name of the parameter that contains the address of the new child contract.
        parameter: "hyperstrategyAddress",
      }),
      startBlock: 7583181,
    },
  },
});
