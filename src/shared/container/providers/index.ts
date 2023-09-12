import CriminosoRepository from "@modules/pessoa/infra/prisma/repositories/CriminosoRepository";
import ICriminosoRepository from "@modules/pessoa/repository/ICriminosoRepository";
import { container } from "tsyringe";

container.registerSingleton<ICriminosoRepository>(
    'CriminosoRepository',
    CriminosoRepository
);