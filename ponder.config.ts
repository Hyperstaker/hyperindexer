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
    celo: {
      chainId: 42220,
      transport: http(process.env.PONDER_RPC_URL_42220),
    },
  },
  contracts: {
    HyperfundFactory: {
      network: {
        sepolia: {
          address: "0xd75B857560E4d07d43FfD474A22b1d7775F4fCfF",
          startBlock: 8185000,
        },
        celo: {
          address: "0x57a894DD4ffc25E33Cd6BbFA4c65Dd0DB2343BF1",
          startBlock: 34637556,
        },
      },
      abi: HyperfundFactoryAbi,
    },
    Hyperfund: {
      network: {
        sepolia: {
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
        celo: {
          address: factory({
            // The address of the factory contract that creates instances of this child contract.
            address: "0x57a894DD4ffc25E33Cd6BbFA4c65Dd0DB2343BF1",
            // The event emitted by the factory that announces a new instance of this child contract.
            event: parseAbiItem(
              "event HyperfundCreated(address indexed hyperfundAddress, uint256 indexed hypercertId, address admin, address manager, address pauser, address upgrader)"
            ),

            // The name of the parameter that contains the address of the new child contract.
            parameter: "hyperfundAddress",
          }),
          startBlock: 34637556,
        },
      },
      abi: HyperfundAbi,
    },
    Hyperstaker: {
      network: {
        sepolia: {
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
        celo: {
          address: factory({
            // The address of the factory contract that creates instances of this child contract.
            address: "0x57a894DD4ffc25E33Cd6BbFA4c65Dd0DB2343BF1",
            // The event emitted by the factory that announces a new instance of this child contract.
            event: parseAbiItem(
              "event HyperstakerCreated(address indexed hyperstakerAddress, uint256 hypercertId, address admin, address manager, address pauser, address upgrader)"
            ),
            // The name of the parameter that contains the address of the new child contract.
            parameter: "hyperstakerAddress",
          }),
          startBlock: 34637556,
        },
      },
      abi: HyperstakerAbi,
    },
    hyperstrategyFactory: {
      network: {
        sepolia: {
          address: "0x48880b8a4Fcb2deE00Ede91F837835135B794c13",
          startBlock: 7583181,
        },
        celo: {
          address: "0xD67030174E90400432e93Da55C7E589D831ceAD8",
          startBlock: 34637556,
        },
      },
      abi: HyperStrategyFactoryAbi,
    },
    Hyperstrategy: {
      network: {
        sepolia: {
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
        celo: {
          address: "0xD67030174E90400432e93Da55C7E589D831ceAD8",
          startBlock: 34637556,
        },
      },
      abi: HyperStrategyAbi,
    },
  },
});
