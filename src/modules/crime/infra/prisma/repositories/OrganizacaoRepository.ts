import { prisma } from "@shared/infra/prisma";
import ICreateOrganizacaoDTO from "@modules/organizacao/dtos/ICreateOrganizacao.dto";
import OrganizacaoEntity from "@modules/organizacao/entities/Organizacao.entity";
import IOrganizacaoRepository from "@modules/organizacao/repository/IOrganizacaoRepository";


export default class OrganizacaoRepository implements IOrganizacaoRepository{
    
    public async create(data: ICreateOrganizacaoDTO): Promise<OrganizacaoEntity> {
        const organizacao = await prisma.organizacao.create({data});

        return organizacao as unknown as OrganizacaoEntity;
    }
    public async delete(id: string): Promise<void> {
        await prisma.organizacao.delete({where:{id}});
    }
    public async findById(id: string): Promise<OrganizacaoEntity> {
        const organizacao = await prisma.organizacao.findUnique({where:{id}});

        return organizacao as unknown as OrganizacaoEntity;

    }
    public async update(data: ICreateOrganizacaoDTO): Promise<OrganizacaoEntity> {
        const organizacao = await prisma.organizacao.update({where:{id:data.id},data});

        return organizacao as unknown as OrganizacaoEntity;

    }
    public async listAll(): Promise<OrganizacaoEntity[]> {
        const organizacaos = await prisma.organizacao.findMany();       
        return organizacaos;
    }
  

}