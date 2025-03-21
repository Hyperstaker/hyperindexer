export const HyperStrategyFactoryAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "_hypercertMinter",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createHyperstrategy",
    inputs: [
      {
        name: "_allo",
        type: "address",
        internalType: "address",
      },
      {
        name: "_name",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "HyperstrategyCreated",
    inputs: [
      {
        name: "hyperstrategyAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "allo",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;
