import dotenv from "dotenv";
dotenv.config();

export const CONFIG = {
  PORT: Number(process.env.PORT) || 3001,
  WS_PORT: Number(process.env.WS_PORT) || 8081,
  CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS!,
  WEB3_PROVIDER_URL: process.env.WEB3_PROVIDER_URL!,
  RATE_UPDATE_INTERVAL_MS: Number(process.env.RATE_UPDATE_INTERVAL_MS) || 5000,
};