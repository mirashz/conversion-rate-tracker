import { ethers } from 'ethers';
import { CONFIG } from "../config/env";

// Set up the provider and contract
const provider = new ethers.JsonRpcProvider(CONFIG.WEB3_PROVIDER_URL);
const contract = new ethers.Contract(
  CONFIG.CONTRACT_ADDRESS,
  ['function totalAssets() view returns (uint256)', 'function totalSupply() view returns (uint256)'],
  provider
);

// Convert `RATE_UPDATE_INTERVAL_MS` to a number from environment variable
const RATE_UPDATE_INTERVAL_MS = CONFIG.RATE_UPDATE_INTERVAL_MS || 60000; // Default to 60 seconds if not defined

const DECIMALS = 18;
let cachedRate: number | null = null;
let lastFetched: number = 0;

export const getConversionRate = async (): Promise<number> => {
  const currentTime = Date.now();

  // Always return the rate regardless of whether it's time for an update
  try {
    // Fetch total assets and supply (they are BigInt in v6)
    const [assets, supply] = await Promise.all([
      contract.totalAssets(),
      contract.totalSupply()
    ]);

    // Convert BigInt to a number (only if within safe range)
    const assetsNumber = Number(assets);  
    const supplyNumber = Number(supply);  

    // Check if the conversion is safe (BigInt range to Number range)
    if (isNaN(assetsNumber) || isNaN(supplyNumber)) {
      throw new Error('BigInt to Number conversion resulted in NaN');
    }

    // Calculate conversion rate
    const newRate = assetsNumber / supplyNumber;

    // Update the cached rate and fetch timestamp if it's time to update based on interval
    if (currentTime - lastFetched > RATE_UPDATE_INTERVAL_MS) {
      cachedRate = newRate;
      lastFetched = currentTime;
    }

    // Always return the rate (cached or newly fetched)
    return cachedRate!;
  } catch (error: unknown) {
    // Type assertion to make sure TypeScript understands that error is of type 'Error'
    if (error instanceof Error) {
      console.error('Error fetching rate:', error.message);
      throw new Error(`Contract call failed: ${error.message}`);
    } else {
      // Handle case where error is not an instance of Error
      console.error('Unknown error:', error);
      throw new Error('An unknown error occurred while fetching the rate.');
    }
  }
};
