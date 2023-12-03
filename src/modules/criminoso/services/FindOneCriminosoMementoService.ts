import { inject, injectable } from "tsyringe";
import ICriminosoRepository from "../repository/ICriminosoRepository";

@injectable()
class FindOneCriminosoMementoService {
    
    constructor(
        @inject('CriminosoRepository') 
        private criminosoRepository:ICriminosoRepository) {
        
    }

    public async execute(id: string) {
        const findHistoricoCriminoso= await this.criminosoRepository.findById(id);
        
        return findHistoricoCriminoso;

    }

}
export default FindOneCriminosoMementoService;