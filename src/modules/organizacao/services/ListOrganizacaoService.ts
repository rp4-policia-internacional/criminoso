import { injectable, inject } from "tsyringe";
import IOrganizacaoRepository from "../repository/IOrganizacaoRepository";

@injectable()
class ListOrganizacaoService {

    constructor(
        @inject('OrganizacaoRepository')
        private organizacaoRepository: IOrganizacaoRepository
    ){}

    public async execute() {
        return await this.organizacaoRepository.listAll();
    }
}

export default ListOrganizacaoService;