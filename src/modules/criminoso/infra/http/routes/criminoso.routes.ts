import { Router } from "express";
import CriminosoController from "../controllers/CriminosoController";

const criminosoRoutes =Router();

const controller = new CriminosoController;

criminosoRoutes.post("/",controller.create);
criminosoRoutes.delete("/:id", controller.delete);
criminosoRoutes.get("/:id", controller.getOne);
criminosoRoutes.get("/", controller.getAll);
criminosoRoutes.put("/", controller.update);

export default  criminosoRoutes;