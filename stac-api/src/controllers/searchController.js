import { searchCollectionsByQuery } from "../models/collectionModel.js";

// POST /search (body: { q: string, cql2: string, ... })
export const searchCollections = async (req, res, next) => {
	try {
		// Basic behavior for now: support `q` free-text search (both GET query and POST body)
		const q = req.method === "GET" ? req.query.q : req.body.q || req.query.q;
		const collections = await searchCollectionsByQuery(q);

		// Return a simple STAC-like response (Collection Search extension minimal)
		res.json({
			type: "FeatureCollection",
			stac_version: "1.1.0",
			collections
		});
	} catch (err) {
		next(err);
	}
};

// For compatibility expose GET handler too
export const searchCollectionsGet = searchCollections;
