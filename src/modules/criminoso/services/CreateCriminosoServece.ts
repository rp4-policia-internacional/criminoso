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
        //regra de negocio
        if (data.nomeCompleto.length < 3) {
            throw new AppError("Nome completo deve ter pelo menos 3 caracteres", 400);
          }
          
        if (data.altura < 0 || data.altura > 300) {
        throw new AppError("Altura inválida", 400);
        }
        
        if (data.idade<18) {
            throw new AppError("Idade menor que o permitido",400);
            
        }
        
        const dataNascimento = new Date(data.dataNascimento);
        const dataAtual = new Date();
        if (dataNascimento > dataAtual) {
        throw new AppError("A data de nascimento não pode estar no futuro", 400);
        }

        const criminoso = await this.criminosoRepository.create(data);

        return criminoso;
    }
}

export default CreateCriminosoService;