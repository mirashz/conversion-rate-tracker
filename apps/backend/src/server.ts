import app from "./app";
import { CONFIG } from "./config/env";
import { startWebSocketServer } from "./websocket/wsServer";
import { logger } from "./config/logger";

app.listen(CONFIG.PORT, () => logger.info(`HTTP server running on port ${CONFIG.PORT}`));
startWebSocketServer();