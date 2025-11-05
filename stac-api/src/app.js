// Express setup
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import collectionsRouter from "./routes/collections.js";
import searchRouter from "./routes/search.js";
import conformanceRouter from "./routes/conformance.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: "10mb" }));

app.use("/collections", collectionsRouter);
app.use("/search", searchRouter);
app.use("/conformance", conformanceRouter);

app.use(errorHandler);

export default app;
