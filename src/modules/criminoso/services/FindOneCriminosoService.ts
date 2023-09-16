import { inject, injectable } from "tsyringe";
import ICriminosoRepository from "../repository/ICriminosoRepository";

@injectable()
class FindOneCriminosoService {
    
    constructor(
        @inject('CriminosoRepository') 
        private criminosoRepository:ICriminosoRepository) {
        
    }

    public async execute(id: string) {
        const findCriminoso= await this.criminosoRepository.findById(id);
        
        return findCriminoso;

    }

}
export default FindOneCriminosoService;