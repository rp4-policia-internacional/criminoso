import { prisma } from "@shared/infra/prisma";
import ICreateOrgCriminosoDTO from "@modules/orgCriminoso/dtos/ICreateOrgCriminoso.dtos";
import OrgCriminosoEntity from "@modules/orgCriminoso/entities/OrgCriminoso.entity";
import IOrgCriminosoRepository from "@modules/orgCriminoso/repository/IOrgCriminosoRepository";


export default class OrgCriminosoRepository implements IOrgCriminosoRepository{
    
    public async create(data: ICreateOrgCriminosoDTO): Promise<OrgCriminosoEntity> {
        const orgCriminoso = await prisma.orgCriminoso.create({data});

        return orgCriminoso as unknown as OrgCriminosoEntity;
    }
    public async delete(id: string): Promise<void> {
        await prisma.orgCriminoso.delete({where:{id}});
    }
    public async findById(id: string): Promise<OrgCriminosoEntity> {
        const orgCriminoso = await prisma.orgCriminoso.findUnique({where:{id}});

        return orgCriminoso as unknown as OrgCriminosoEntity;

    }
    public async update(data: ICreateOrgCriminosoDTO): Promise<OrgCriminosoEntity> {
        const orgCriminoso = await prisma.orgCriminoso.update({where:{id:data.id},data});

        return orgCriminoso as unknown as OrgCriminosoEntity;

    }
    public async listAll(): Promise<OrgCriminosoEntity[]> {
        const orgCriminosos = await prisma.orgCriminoso.findMany();       
        return orgCriminosos;
    }
  

}