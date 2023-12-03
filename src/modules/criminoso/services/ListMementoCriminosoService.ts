import { injectable, inject } from "tsyringe";
import ICriminosoRepository from "../repository/ICriminosoRepository";

@injectable()
class ListMementoCriminosoService {

    constructor(
        @inject('CriminosoRepository')
        private criminosoRepository: ICriminosoRepository
    ){}

    public async execute() {
        return await this.criminosoRepository.listAllMemento();
    }
}

export default ListMementoCriminosoService;