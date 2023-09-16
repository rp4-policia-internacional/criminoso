import criminosoRoutes from "@modules/criminoso/infra/http/routes/criminoso.routes";
import { Router } from "express";

const routes =Router();

routes.use("/criminoso",criminosoRoutes);

export default routes;