import { inject, injectable } from "tsyringe";
import ICriminosoRepository from "../repository/ICriminosoRepository";
import ICreateCriminosoDTO from "../dtos/ICreateCriminoso.dto";
import { Criminoso } from "@prisma/client";
import AppError from "@shared/errors/AppError";


@injectable()
class UpdateCriminosoService {
    constructor(
        @inject('CriminosoRepository')
        private criminosoRepository: ICriminosoRepository
    ){}

    public async execute(data: ICreateCriminosoDTO): Promise<Criminoso> {
        const criminoso = await this.criminosoRepository.findById(data.id);
        if(!criminoso){
            throw new AppError('Criminoso não encontrado',404);
        }

        const updateCriminoso = await this.criminosoRepository.update(data);
        return updateCriminoso;
    }    
        
}

export default UpdateCriminosoService;