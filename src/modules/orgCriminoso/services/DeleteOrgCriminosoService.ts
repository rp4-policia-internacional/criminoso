import { inject, injectable } from "tsyringe";
import IOrgCriminosoRepository from "../repository/IOrgCriminosoRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class DeleteOrgCriminosoService{

    constructor(
        @inject("OrgCriminosoRepository")
        private orgCriminosoRepository: IOrgCriminosoRepository
    ){}
    
    public async execute(id: string): Promise<void>{
        const findOrg = await this.orgCriminosoRepository.findById(id);

        if (!findOrg) {
            throw new AppError("Organização não encontrado",400);
        }

        await this.orgCriminosoRepository.delete(id);
        return;
    }
}

export default DeleteOrgCriminosoService;