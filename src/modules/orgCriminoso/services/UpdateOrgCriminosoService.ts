import { inject, injectable } from "tsyringe";
import IOrgCriminosoRepository from "../repository/IOrgCriminosoRepository";
import ICreateOrgCriminosoDTO from "../dtos/ICreateOrgCriminoso.dtos";
import { OrgCriminoso } from "@prisma/client";
import AppError from "@shared/errors/AppError";


@injectable()
class UpdateOrgCriminosoService {
    constructor(
        @inject('OrgCriminosoRepository')
        private orgCriminosoRepository: IOrgCriminosoRepository
    ){}

    public async execute(data: ICreateOrgCriminosoDTO): Promise<OrgCriminoso> {
        const orgCriminoso = await this.orgCriminosoRepository.findById(data.id);
        if(!orgCriminoso){
            throw new AppError('OrgCriminoso não encontrado',404);
        }

        const updateOrgCriminoso = await this.orgCriminosoRepository.update(data);
        return updateOrgCriminoso;
    }    
        
}

export default UpdateOrgCriminosoService;