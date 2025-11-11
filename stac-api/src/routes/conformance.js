import express from "express";
import { getConformance } from "../controllers/conformanceController.js";

const router = express.Router();

router.get("/", getConformance);

export default router;