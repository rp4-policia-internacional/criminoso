import { inject, injectable } from "tsyringe";
import ICriminosoRepository from "../repository/ICriminosoRepository";
import ICreateCriminosoDTO from "../dtos/ICreateCriminoso.dto";
import Criminoso from "../entities/Criminoso.entity";
import AppError from "@shared/errors/AppError";

@injectable()
class CreateCriminosoService{

    constructor(
        @inject('CriminosoRepository')
        private criminosoRepository:ICriminosoRepository
    ){}

    public async execute(data:ICreateCriminosoDTO): Promise<Criminoso>{

        if (data.idade<=5) {
            throw new AppError("Quant >=5",400);
            
        }

        const criminoso = await this.criminosoRepository.create(data);

        return criminoso;
    }
}

export default CreateCriminosoService;