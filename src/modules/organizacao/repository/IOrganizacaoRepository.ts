import OrganizacaoEntity from "../entities/Organizacao.entity";
import ICreateOrganizacaoDTO from "../dtos/ICreateOrganizacao.dto";

export default interface IOrganizacaoRepository{
    create(data:ICreateOrganizacaoDTO):Promise<OrganizacaoEntity>
    delete(id:string):Promise<void>
    findById(id: string): Promise<OrganizacaoEntity>;
    update(data: ICreateOrganizacaoDTO): Promise<OrganizacaoEntity>;
    listAll():Promise<OrganizacaoEntity[]>;
}