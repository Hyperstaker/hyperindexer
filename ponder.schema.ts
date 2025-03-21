import { onchainTable } from "ponder";

export const hyperfundCreated = onchainTable(
  "hyperfund_created_event",
  (t) => ({
    hyperfund: t.hex().notNull(),
    manager: t.hex().notNull(),
    hypercert: t.bigint().notNull().primaryKey(),
  })
);

export const hyperstakerCreated = onchainTable(
  "hyperstaker_created_event",
  (t) => ({
    hyperstaker: t.hex().notNull(),
    manager: t.hex().notNull(),
    hypercert: t.bigint().notNull().primaryKey(),
  })
);

export const tokenAllowlisted = onchainTable("token_allowlisted", (t) => ({
  id: t.text().primaryKey(),
  hyperfund: t.hex().notNull(),
  token: t.hex().notNull(),
  multiplier: t.bigint().notNull(),
}));

export const donationsWithdrawn = onchainTable("donation_withdrawn", (t) => ({
  hyperfund: t.hex().notNull(),
  id: t.text().primaryKey(),
  token: t.hex(),
  amount: t.bigint().notNull(),
  to: t.hex(),
}));

export const donationReceived = onchainTable("donation_received", (t) => ({
  hyperfund: t.hex().notNull(),
  id: t.text().primaryKey(),
  token: t.hex(),
  amount: t.bigint().notNull(),
}));

export const nonfinancialContribution = onchainTable(
  "nonfinancial_contributions",
  (t) => ({
    hyperfund: t.hex().notNull(),
    id: t.text().primaryKey(),
    address: t.hex().notNull(),
    units: t.bigint().notNull(),
  })
);

export const fractionRedeemed = onchainTable("fraction_redeemed", (t) => ({
  hyperfund: t.hex().notNull(),
  fraction: t.bigint().primaryKey().notNull(),
  token: t.hex().notNull(),
  amount: t.bigint(),
}));

export const staked = onchainTable("staked", (t) => ({
  hyperstaker: t.hex().notNull(),
  id: t.text().primaryKey(),
  hypercertId: t.bigint().notNull(),
  fractionId: t.bigint().notNull(),
  from: t.hex().notNull(),
}));

export const unstaked = onchainTable("unstaked", (t) => ({
  hyperstaker: t.hex().notNull(),
  id: t.text().primaryKey(),
  hypercertId: t.bigint().notNull(),
  fractionId: t.bigint().notNull(),
  to: t.hex().notNull(),
}));

export const rewardClaimed = onchainTable("rewardClaimed", (t) => ({
  id: t.text().primaryKey(),
  address: t.hex().notNull(),
  reward: t.bigint().notNull(),
}));

export const rewardSet = onchainTable("rewardSet", (t) => ({
  id: t.text().primaryKey(),
  token: t.hex().notNull(),
  amount: t.bigint().notNull(),
}));

export const hyperstrategyCreated = onchainTable(
  "hyperstrategy_created",
  (t) => ({
    id: t.text().primaryKey(),
    hyperstrategy: t.hex().notNull(),
  })
);

export const poolFunded = onchainTable("pool_funded", (t) => ({
  id: t.text().primaryKey(),
  poolId: t.bigint().notNull(),
  donor: t.hex().notNull(),
  hypercertUnits: t.bigint().notNull(),
  token: t.hex().notNull(),
  amount: t.bigint().notNull(),
}));

export const totalFinancialContributionsToPool = onchainTable(
  "total_financialcontributions_to_pool",
  (t) => ({
    poolId: t.bigint().primaryKey(),
    totalHypercertUnits: t.bigint().notNull(),
  })
);
