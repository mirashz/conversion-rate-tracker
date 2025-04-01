import WebSocket from "ws";
import { getConversionRate } from "../services/contractService";
import { CONFIG } from "../config/env";
import { logger } from "../config/logger";

export function startWebSocketServer() {
  const wss = new WebSocket.Server({ port: CONFIG.WS_PORT });
  logger.info(`WebSocket server running on port ${CONFIG.WS_PORT}`);

  wss.on("connection", (ws) => {
    const interval = setInterval(async () => {
      try {
        console.log("Attempting to fetch current rate...");
        const currentRate = await getConversionRate();
        console.log("Rate fetched:", currentRate);

        // Send the current rate and timestamp every interval, no matter what
        console.log("Sending rate to WebSocket clients:", currentRate);
        ws.send(JSON.stringify({
          rate: currentRate,
          timestamp: Date.now()
        }));
      } catch (error) {
        console.error("WebSocket rate fetch error:", error);
      }
    }, CONFIG.RATE_UPDATE_INTERVAL_MS);

    ws.on("close", () => clearInterval(interval));
  });
}
