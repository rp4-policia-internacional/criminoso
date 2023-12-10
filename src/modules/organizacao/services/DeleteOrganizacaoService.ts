import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import IOrganizacaoRepository from "../repository/IOrganizacaoRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class DeleteOrganizacaoService{

    constructor(
        @inject("OrganizacaoRepository")
        private organizacaoRepository: IOrganizacaoRepository
    ){}
    
    public async execute(id: string): Promise<void>{
        const findOrg = await this.organizacaoRepository.findById(id);

        if (!findOrg) {
            throw new AppError("Organização não encontrado",400);
        }

        await this.organizacaoRepository.delete(id);
        return;
    }
}

export default DeleteOrganizacaoService;