import { Request, Response } from "express";
import { getConversionRate } from "../services/contractService";
import { logger } from "../config/logger";

export async function fetchRate(req: Request, res: Response) {
  try {
    const rate = await getConversionRate();
    res.json({ rate, timestamp: Date.now() });
  } catch (error) {
    logger.error("Failed to fetch rate:", error);
    res.status(500).json({ error: "Failed to fetch rate" });
  }
}
