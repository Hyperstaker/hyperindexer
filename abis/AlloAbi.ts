export const AlloAbi = [
  {
    inputs: [
      { internalType: "bytes32", name: "_profileId", type: "bytes32" },
      { internalType: "address", name: "_strategy", type: "address" },
      { internalType: "bytes", name: "_initStrategyData", type: "bytes" },
      { internalType: "address", name: "_token", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      {
        components: [
          { internalType: "uint256", name: "protocol", type: "uint256" },
          { internalType: "string", name: "pointer", type: "string" },
        ],
        internalType: "struct Metadata",
        name: "_metadata",
        type: "tuple",
      },
      { internalType: "address[]", name: "_managers", type: "address[]" },
    ],
    name: "createPool",
    outputs: [{ internalType: "uint256", name: "poolId", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "bytes32", name: "_profileId", type: "bytes32" },
      { internalType: "address", name: "_strategy", type: "address" },
      { internalType: "bytes", name: "_initStrategyData", type: "bytes" },
      { internalType: "address", name: "_token", type: "address" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      {
        components: [
          { internalType: "uint256", name: "protocol", type: "uint256" },
          { internalType: "string", name: "pointer", type: "string" },
        ],
        internalType: "struct Metadata",
        name: "_metadata",
        type: "tuple",
      },
      { internalType: "address[]", name: "_managers", type: "address[]" },
    ],
    name: "createPoolWithCustomStrategy",
    outputs: [{ internalType: "uint256", name: "poolId", type: "uint256" }],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_poolId", type: "uint256" }],
    name: "getPool",
    outputs: [
      {
        components: [
          { internalType: "bytes32", name: "profileId", type: "bytes32" },
          {
            internalType: "contract IStrategy",
            name: "strategy",
            type: "address",
          },
          { internalType: "address", name: "token", type: "address" },
          {
            components: [
              { internalType: "uint256", name: "protocol", type: "uint256" },
              { internalType: "string", name: "pointer", type: "string" },
            ],
            internalType: "struct Metadata",
            name: "metadata",
            type: "tuple",
          },
          { internalType: "bytes32", name: "managerRole", type: "bytes32" },
          { internalType: "bytes32", name: "adminRole", type: "bytes32" },
        ],
        internalType: "struct IAllo.Pool",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "_poolId", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
    ],
    name: "fundPool",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;
