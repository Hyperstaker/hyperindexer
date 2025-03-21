import { ponder } from "ponder:registry";
import { hyperfundCreated, hyperstakerCreated } from "ponder:schema";

ponder.on("HyperfundFactory:HyperfundCreated", async ({ event, context }) => {
  await context.db.insert(hyperfundCreated).values({
    hyperfund: event.args.hyperfundAddress,
    manager: event.args.manager,
    hypercert: event.args.hypercertId,
  });
});

ponder.on("HyperfundFactory:HyperstakerCreated", async ({ event, context }) => {
  await context.db.insert(hyperstakerCreated).values({
    hyperstaker: event.args.hyperstakerAddress,
    manager: event.args.manager,
    hypercert: event.args.hypercertId,
  });
});
