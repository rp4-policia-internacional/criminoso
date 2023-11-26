import { prisma } from "@shared/infra/prisma";
import ICreateCriminosoDTO from "@modules/criminoso/dtos/ICreateCriminoso.dto";
import CriminosoEntity from "@modules/criminoso/entities/Criminoso.entity";
import MementoEntity from "@modules/criminoso/entities/Memento.entity";
import ICreateMementoDTO from "@modules/criminoso/dtos/ICreateMemento.dto";
import ICriminosoRepository from "@modules/criminoso/repository/ICriminosoRepository";

export default class CriminosoRepository implements ICriminosoRepository{
    
    public async create(data: ICreateCriminosoDTO): Promise<CriminosoEntity> {
        const criminoso = await prisma.criminoso.create({data});

        return criminoso as unknown as CriminosoEntity;
    }
    public async delete(id: string): Promise<void> {
        await prisma.criminoso.delete({where:{id}});
    }
    public async findById(id: string): Promise<CriminosoEntity> {
        const criminoso = await prisma.criminoso.findUnique({where:{id}});

        return criminoso as unknown as CriminosoEntity;

    }
    public async update(data: ICreateCriminosoDTO): Promise<CriminosoEntity> {
        const criminoso = await prisma.criminoso.update({where:{id:data.id},data});

        return criminoso as unknown as CriminosoEntity;

    }
    public async listAll(): Promise<CriminosoEntity[]> {
        const criminosos = await prisma.criminoso.findMany();       
        return criminosos;
    }
    public async createMemento(data: ICreateMementoDTO): Promise<MementoEntity> {
        const historico = await prisma.historicoCriminoso.create({data});

        return historico as unknown as MementoEntity;
    }

}