import { Router } from "express";
import OrganizacaoController from "../controllers/OrganizacaoController";

const organizacaoRoutes =Router();

const controller = new OrganizacaoController;

organizacaoRoutes.post("/",controller.create);
organizacaoRoutes.delete("/:id", controller.delete);
//organizacaoRoutes.get("/:id", controller.getOne);
organizacaoRoutes.get("/", controller.getAll);
organizacaoRoutes.put("/", controller.update);

export default  organizacaoRoutes;