import { inject, injectable } from "tsyringe";
import IOrgCriminosoRepository from "../repository/IOrgCriminosoRepository";

@injectable()
class FindOneOganizacaoService{

    constructor(
        @inject("OrgCriminosoRepository")
        private orgCriminosoRepository: IOrgCriminosoRepository
    ){}

    public async excecute(id: string){
        const findOrg= await this.orgCriminosoRepository.findById(id);
        
        return findOrg;
    }
}

export default FindOneOganizacaoService