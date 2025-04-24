import { ponder } from "ponder:registry";
import { staked, unstaked, rewardClaimed, rewardSet } from "ponder:schema";
import { HyperstakerAbi } from "../abis/HyperstakerAbi";

ponder.on("Hyperstaker:Staked", async ({ event, context }) => {
  const baseHypercertId = await context.client.readContract({
    abi: HyperstakerAbi,
    address: event.log.address as `0x${string}`,
    functionName: "hypercertTypeId",
  });
  await context.db.insert(staked).values({
    hyperstaker: event.log.address as `0x${string}`,
    id: event.transaction.hash,
    hypercertId: baseHypercertId,
    fractionId: event.args.hypercertId,
    from: event.transaction.from as `0x${string}`,
  });
});

ponder.on("Hyperstaker:Unstaked", async ({ event, context }) => {
  const baseHypercertId = await context.client.readContract({
    abi: HyperstakerAbi,
    address: event.log.address as `0x${string}`,
    functionName: "hypercertTypeId",
  });
  await context.db.insert(unstaked).values({
    hyperstaker: event.log.address as `0x${string}`,
    id: event.transaction.hash,
    hypercertId: baseHypercertId,
    fractionId: event.args.hypercertId,
    to: event.transaction.from as `0x${string}`,
  });
});

ponder.on("Hyperstaker:RewardClaimed", async ({ event, context }) => {
  await context.db.insert(rewardClaimed).values({
    id: event.transaction.hash,
    hypercertId: event.args.hypercertId,
    reward: event.args.reward,
  });
});

ponder.on("Hyperstaker:RewardSet", async ({ event, context }) => {
  await context.db.insert(rewardSet).values({
    id: event.transaction.hash,
    token: event.args.token,
    amount: event.args.amount,
  });
});
