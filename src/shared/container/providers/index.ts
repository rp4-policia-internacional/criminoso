import CriminosoRepository from "@modules/criminoso/infra/prisma/repositories/CriminosoRepository";
import ICriminosoRepository from "@modules/criminoso/repository/ICriminosoRepository";
import { container } from "tsyringe";

container.registerSingleton<ICriminosoRepository>(
    'CriminosoRepository',
    CriminosoRepository
);