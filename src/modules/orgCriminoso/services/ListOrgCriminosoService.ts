import { injectable, inject } from "tsyringe";
import IOrgCriminosoRepository from "../repository/IOrgCriminosoRepository";

@injectable()
class ListOrgCriminosoService {

    constructor(
        @inject('OrgCriminosoRepository')
        private orgCriminosoRepository: IOrgCriminosoRepository
    ){}

    public async execute() {
        return await this.orgCriminosoRepository.listAll();
    }
}

export default ListOrgCriminosoService;