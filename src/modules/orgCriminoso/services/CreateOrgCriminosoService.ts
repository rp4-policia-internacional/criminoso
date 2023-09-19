import { injectable, inject} from "tsyringe";
import IOrgCriminosoRepository from "../repository/IOrgCriminosoRepository";
import OrgCriminosoEntity from "../entities/OrgCriminoso.entity";
import ICreateOrgCriminosoDTO from "../dtos/ICreateOrgCriminoso.dtos";

@injectable()
class CreateOrgCriminosoService{

    constructor(
        @inject('OrgCriminosoRepository')
        private orgCriminosoRepository:IOrgCriminosoRepository
    ){}

    public async execute(data: ICreateOrgCriminosoDTO):Promise<OrgCriminosoEntity>{
        const org = await this.orgCriminosoRepository.create(data)

        return org;

    }
        
}
export default CreateOrgCriminosoService;
