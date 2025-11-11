import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import collectionsRouter from "./routes/collections.js";
import searchRouter from "./routes/search.js";
import conformanceRouter from "./routes/conformance.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/collections", collectionsRouter);
app.use("/search", searchRouter);
app.use("/conformance", conformanceRouter);

// Error handling middleware
app.use(errorHandler);

export default app;
