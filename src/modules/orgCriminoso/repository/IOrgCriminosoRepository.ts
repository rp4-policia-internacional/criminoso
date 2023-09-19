import ICreateOrgCriminoso from "../dtos/ICreateOrgCriminoso.dtos";
import OrganizacaoEntity from "../entities/OrgCriminoso.entity";


export default interface IOrganizacaoRepository{
    create(data:ICreateOrgCriminoso):Promise<OrganizacaoEntity>
    delete(id:string):Promise<void>
    findById(id: string): Promise<OrganizacaoEntity>;
    update(data: ICreateOrgCriminoso): Promise<OrganizacaoEntity>;
    listAll():Promise<OrganizacaoEntity[]>;
}