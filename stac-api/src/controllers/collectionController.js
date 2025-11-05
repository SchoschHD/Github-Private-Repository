import { fetchCollections, fetchCollectionById } from "../models/collectionModel.js";

export const getCollections = async (req, res, next) => {
  try {
    const collections = await fetchCollections();
    res.json({
      stac_version: "1.1.0",
      type: "Catalog",
      collections
    });
  } catch (err) {
    next(err);
  }
};

export const getCollectionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const collection = await fetchCollectionById(id);
    if (!collection) return res.status(404).json({ code: 404, description: "Collection not found" });
    res.json(collection);
  } catch (err) {
    next(err);
  }
};
