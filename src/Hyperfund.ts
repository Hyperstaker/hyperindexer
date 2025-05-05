import { ponder } from "ponder:registry";
import {
  tokenAllowlisted,
  nonfinancialContribution,
  fractionRedeemed,
} from "ponder:schema";

ponder.on("Hyperfund:TokenAllowlisted", async ({ event, context }) => {
  await context.db.insert(tokenAllowlisted).values({
    id: event.transaction.hash,
    hyperfund: event.log.address as `0x${string}`,
    token: event.args.token,
    multiplier: event.args.multiplier,
  });
});

ponder.on("Hyperfund:NonfinancialContribution", async ({ event, context }) => {
  await context.db.insert(nonfinancialContribution).values({
    id: event.transaction.hash,
    hyperfund: event.log.address as `0x${string}`,
    address: event.args.contributor,
    units: event.args.units,
  });
});

ponder.on("Hyperfund:FractionRedeemed", async ({ event, context }) => {
  await context.db.insert(fractionRedeemed).values({
    address: event.transaction.from,
    fraction: event.args.hypercertId,
    hyperfund: event.log.address as `0x${string}`,
    token: event.args.token,
    amount: event.args.amount,
  });
});
