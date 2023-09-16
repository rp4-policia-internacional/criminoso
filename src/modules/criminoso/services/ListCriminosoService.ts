import { injectable, inject } from "tsyringe";
import ICriminosoRepository from "../repository/ICriminosoRepository";

@injectable()
class ListCriminosoService {

    constructor(
        @inject('CriminosoRepository')
        private criminosoRepository: ICriminosoRepository
    ){}

    public async execute() {
        return await this.criminosoRepository.listAll();
    }
}

export default ListCriminosoService;