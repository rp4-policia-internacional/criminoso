import 'reflect-metadata';
import { injectable, inject } from "tsyringe";
import ICriminosoRepository from "../repository/ICriminosoRepository";

@injectable()
class ListMementoCriminosoService {

    constructor(
        @inject('CriminosoRepository')
        private criminosoRepository: ICriminosoRepository
    ){}

    public async execute() {
        try {
            console.log("Antes de chamar listAllMemento");
            const result = await this.criminosoRepository.listAllMemento();
            console.log("Resultado de listAllMemento:", result);
            return result;
        } catch (error) {
            console.error("Erro ao executar listAllMemento:", error);
            throw error; 
        }
    }
    
    
}

export default ListMementoCriminosoService;