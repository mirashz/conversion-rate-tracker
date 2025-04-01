import express from "express";
import cors from "cors";
import { fetchRate } from "./api/rateController";

const app = express();
app.use(cors());
app.use(express.json());

// Health check route
app.get("/health", (req, res) => {
    res.status(200).json({ status: "healthy" });
});

export default app;