import CriminosoRepository from "@modules/criminoso/infra/prisma/repositories/CriminosoRepository";
import ICriminosoRepository from "@modules/criminoso/repository/ICriminosoRepository";
import OrgCriminosoRepository from "@modules/orgCriminoso/infra/prisma/repositories/OrgCriminosoRepository";
import IOrgCriminosoRepository from "@modules/orgCriminoso/repository/IOrgCriminosoRepository";
import OrganizacaoRepository from "@modules/organizacao/infra/prisma/repositories/OrganizacaoRepository";
import IOrganizacaoRepository from "@modules/organizacao/repository/IOrganizacaoRepository";
import { container } from "tsyringe";

container.registerSingleton<ICriminosoRepository>(
    'CriminosoRepository',
    CriminosoRepository
);
container.registerSingleton<IOrganizacaoRepository>(
    'OrganizacaoRepository',
    OrganizacaoRepository
);
container.registerSingleton<IOrgCriminosoRepository>(
    'OrgCriminosoRepository',
    OrgCriminosoRepository
);