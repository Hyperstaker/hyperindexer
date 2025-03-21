import { ponder } from "ponder:registry";
import { poolFunded, totalFinancialContributionsToPool } from "ponder:schema";
import { HyperStrategyAbi } from "../abis/HyperStrategyAbi";

ponder.on("Hyperstrategy:Donated", async ({ event, context }) => {
  const poolId = await context.client.readContract({
    abi: HyperStrategyAbi,
    address: event.log.address,
    functionName: "getPoolId",
  });

  await context.db.insert(poolFunded).values({
    id: event.transaction.hash,
    poolId: poolId,
    donor: event.args.donor,
    hypercertUnits: event.args.hypercertUnits,
    token: event.args.token,
    amount: event.args.amount,
  });

  await context.db
    .insert(totalFinancialContributionsToPool)
    .values({
      poolId: poolId,
      totalHypercertUnits: event.args.hypercertUnits,
    })
    .onConflictDoUpdate((row) => ({
      totalHypercertUnits: row.totalHypercertUnits + event.args.hypercertUnits,
    }));
});
