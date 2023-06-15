import express from "express";
import cors from "cors";

import newsRouter from "./src/routes/news.js";

const PORT = 5000;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/news", newsRouter);

app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
