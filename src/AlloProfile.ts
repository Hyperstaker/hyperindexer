import { ponder } from "ponder:registry";
import { alloProfile } from "ponder:schema";

const IPFS_GATEWAYS = [
  "https://ipfs.io/ipfs/",
  "https://gateway.pinata.cloud/ipfs/",
  "https://cloudflare-ipfs.com/ipfs/",
  "https://dweb.link/ipfs/",
];

async function fetchFromIPFS(ipfsHash: string): Promise<any> {
  let lastError: Error | null = null;

  for (const gateway of IPFS_GATEWAYS) {
    try {
      const response = await fetch(`${gateway}${ipfsHash}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      lastError = error as Error;
      console.warn(`Failed to fetch from ${gateway}: ${lastError.message}`);
      continue;
    }
  }

  throw new Error(
    `Failed to fetch metadata from all IPFS gateways: ${lastError?.message}`
  );
}

ponder.on("AlloRegistry:ProfileCreated", async ({ event, context }) => {
  const ipfsHash = event.args.metadata.pointer;
  try {
    const metadata = await fetchFromIPFS(ipfsHash);
    await context.db.insert(alloProfile).values({
      id: event.transaction.hash,
      alloProfileId: event.args.profileId,
      name: event.args.name,
      metadata: metadata,
    });
  } catch (error) {
    console.error(`Failed to process profile creation: ${error}`);
    // Still insert the profile with empty metadata if fetch fails
    await context.db.insert(alloProfile).values({
      id: event.transaction.hash,
      alloProfileId: event.args.profileId,
      name: event.args.name,
      metadata: {},
    });
  }
});
