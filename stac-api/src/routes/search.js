import express from "express";
import { searchCollections, searchCollectionsGet } from "../controllers/searchController.js";

const router = express.Router();

// POST /search for complex queries (body) and GET /search?q=... for quick checks
router.post("/", searchCollections);
router.get("/", searchCollectionsGet);

export default router;