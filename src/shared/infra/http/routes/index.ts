import criminosoRoutes from "@modules/criminoso/infra/http/routes/criminoso.routes";
import orgCriminosoRoutes from "@modules/orgCriminoso/infra/http/routes/orgCriminoso.routes";
import organizacaoRoutes from "@modules/organizacao/infra/http/routes/organizacao.routes";
import { Router } from "express";

const routes =Router();

routes.use("/criminoso",criminosoRoutes);
routes.use("/organizacao",organizacaoRoutes);
routes.use("/orgCriminoso",orgCriminosoRoutes);

export default routes;