export const HyperfundFactoryAbi = [
  {
    type: "constructor",
    inputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "UPGRADE_INTERFACE_VERSION",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "string",
        internalType: "string",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "createHyperfund",
    inputs: [
      {
        name: "hypercertTypeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "admin",
        type: "address",
        internalType: "address",
      },
      {
        name: "manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "pauser",
        type: "address",
        internalType: "address",
      },
      {
        name: "upgrader",
        type: "address",
        internalType: "address",
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
    type: "function",
    name: "createHyperstaker",
    inputs: [
      {
        name: "hypercertTypeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "admin",
        type: "address",
        internalType: "address",
      },
      {
        name: "manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "pauser",
        type: "address",
        internalType: "address",
      },
      {
        name: "upgrader",
        type: "address",
        internalType: "address",
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
    type: "function",
    name: "createProject",
    inputs: [
      {
        name: "hypercertTypeId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "admin",
        type: "address",
        internalType: "address",
      },
      {
        name: "manager",
        type: "address",
        internalType: "address",
      },
      {
        name: "pauser",
        type: "address",
        internalType: "address",
      },
      {
        name: "upgrader",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "hyperfund",
        type: "address",
        internalType: "address",
      },
      {
        name: "hyperstaker",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "hyperfunds",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hyperstakers",
    inputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "initialize",
    inputs: [
      {
        name: "_hypercertMinter",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proxiableUUID",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "renounceOwnership",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "transferOwnership",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "upgradeToAndCall",
    inputs: [
      {
        name: "newImplementation",
        type: "address",
        internalType: "address",
      },
      {
        name: "data",
        type: "bytes",
        internalType: "bytes",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    name: "HyperfundCreated",
    inputs: [
      {
        name: "hyperfundAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "hypercertId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "admin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "manager",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "pauser",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "upgrader",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "HyperstakerCreated",
    inputs: [
      {
        name: "hyperstakerAddress",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "hypercertId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "admin",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "manager",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "pauser",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "upgrader",
        type: "address",
        indexed: false,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Initialized",
    inputs: [
      {
        name: "version",
        type: "uint64",
        indexed: false,
        internalType: "uint64",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "OwnershipTransferred",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Upgraded",
    inputs: [
      {
        name: "implementation",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "AlreadyDeployed",
    inputs: [],
  },
  {
    type: "error",
    name: "DeploymentFailed",
    inputs: [],
  },
  {
    type: "error",
    name: "ERC1967InvalidImplementation",
    inputs: [
      {
        name: "implementation",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "ERC1967NonPayable",
    inputs: [],
  },
  {
    type: "error",
    name: "FailedCall",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidAddress",
    inputs: [],
  },
  {
    type: "error",
    name: "InvalidInitialization",
    inputs: [],
  },
  {
    type: "error",
    name: "NotInitializing",
    inputs: [],
  },
  {
    type: "error",
    name: "NotOwnerOfHypercert",
    inputs: [],
  },
  {
    type: "error",
    name: "OwnableInvalidOwner",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "OwnableUnauthorizedAccount",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "UUPSUnauthorizedCallContext",
    inputs: [],
  },
  {
    type: "error",
    name: "UUPSUnsupportedProxiableUUID",
    inputs: [
      {
        name: "slot",
        type: "bytes32",
        internalType: "bytes32",
      },
    ],
  },
] as const;
