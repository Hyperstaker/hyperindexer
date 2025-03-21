import { ponder } from "ponder:registry";
import { hyperstrategyCreated } from "ponder:schema";

ponder.on(
  "hyperstrategyFactory:HyperstrategyCreated",
  async ({ event, context }) => {
    await context.db.insert(hyperstrategyCreated).values({
      id: event.transaction.hash,
      hyperstrategy: event.args.hyperstrategyAddress,
    });
  }
);
