import { Router } from "express";
import OrgCriminosoController from "../controllers/OrgCriminosoController";

const orgCriminosoRoutes =Router();

const controller = new OrgCriminosoController;

orgCriminosoRoutes.post("/",controller.create);
orgCriminosoRoutes.delete("/:id", controller.delete);
orgCriminosoRoutes.get("/:id", controller.getOne);
orgCriminosoRoutes.get("/", controller.getAll);
orgCriminosoRoutes.put("/", controller.update);

export default  orgCriminosoRoutes;