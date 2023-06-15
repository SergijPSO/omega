import Router from "express";
import newsController from "../controllers/newsController.js";

const newsRouter = new Router();

newsRouter.get("/", newsController.getAll);
newsRouter.get("/:id", newsController.getOne);
newsRouter.post("/", newsController.create);
newsRouter.put("/", newsController.update);
newsRouter.delete("/:id", newsController.delete);

export default newsRouter;
