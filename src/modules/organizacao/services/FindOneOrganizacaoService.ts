import { inject, injectable } from "tsyringe";
import IOrganizacaoRepository from "../repository/IOrganizacaoRepository";

@injectable()
class FindOneOganizacaoService{

    constructor(
        @inject("OrganizacaoRepository")
        private organizacaoRepository: IOrganizacaoRepository
    ){}

    public async excecute(id:string){
        const findOrg= await this.organizacaoRepository.findById(id);
        
        return findOrg;
    }
}

export default FindOneOganizacaoService