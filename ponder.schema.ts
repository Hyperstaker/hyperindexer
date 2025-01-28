import { onchainTable, primaryKey } from "ponder";

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
