import { injectable, inject} from "tsyringe";
import IOrganizacaoRepository from "../repository/IOrganizacaoRepository";
import OrganizacaoEntity from "../entities/Organizacao.entity";
import ICreateOrganizacaoDTO from "../dtos/ICreateOrganizacao.dto";

@injectable()
class CreateOrganizacaoService{

    constructor(
        @inject('OrganizacaoRepository')
        private organizacaoRepository:IOrganizacaoRepository
    ){}

    public async execute(data: ICreateOrganizacaoDTO):Promise<OrganizacaoEntity>{
        const org = await this.organizacaoRepository.create(data)

        return org;

    }
        
}
export default CreateOrganizacaoService;
