import { inject, injectable } from "tsyringe";
import ICriminosoRepository from "../repository/ICriminosoRepository";
import ICreateMementoDTO from "../dtos/ICreateMemento.dto";
import Memento from "../entities/Memento.entity";
import AppError from "@shared/errors/AppError";
@injectable()
class MementoCriminosoService{

    constructor(
        @inject('CriminosoRepository')
        private criminosoRepository:ICriminosoRepository
    ){}

    
    public async execute(data:ICreateMementoDTO): Promise<Memento>{        

        const CriminosoMemento = await this.criminosoRepository.createMemento(data);
        return CriminosoMemento;
    }
}

export default MementoCriminosoService;