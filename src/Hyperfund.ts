import { ponder } from "ponder:registry";
import {
  tokenAllowlisted,
  donationsWithdrawn,
  donationReceived,
  nonfinancialContribution,
  fractionRedeemed,
} from "ponder:schema";

ponder.on("Hyperfund:TokenAllowlisted", async ({ event, context }) => {
  await context.db.insert(tokenAllowlisted).values({
    hyperfund: event.transaction.to as `0x${string}`,
    token: event.args.token,
    multiplier: event.args.multiplier,
  });
});

ponder.on("Hyperfund:DonationReceived", async ({ event, context }) => {
  await context.db.insert(donationReceived).values({
    hyperfund: event.transaction.to as `0x${string}`,
    id: event.transaction.hash,
    token: event.args.token,
    amount: event.args.amount,
  });
});

ponder.on("Hyperfund:DonationsWithdrawn", async ({ event, context }) => {
  await context.db.insert(donationsWithdrawn).values({
    id: event.transaction.hash,
    hyperfund: event.transaction.to as `0x${string}`,
    token: event.args.token,
    amount: event.args.amount,
    recipient: event.args.to,
  });
});

ponder.on("Hyperfund:NonfinancialContribution", async ({ event, context }) => {
  await context.db.insert(nonfinancialContribution).values({
    id: event.transaction.hash,
    hyperfund: event.transaction.to as `0x${string}`,
    address: event.args.contributor,
    units: event.args.units,
  });
});

ponder.on("Hyperfund:FractionRedeemed", async ({ event, context }) => {
  await context.db.insert(fractionRedeemed).values({
    fraction: event.args.fractionId,
    hyperfund: event.transaction.to as `0x${string}`,
    token: event.args.token,
    amount: event.args.amount,
  });
});
