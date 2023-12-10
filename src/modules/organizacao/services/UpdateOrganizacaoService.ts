import 'reflect-metadata';
import { inject, injectable } from "tsyringe";
import IOrganizacaoRepository from "../repository/IOrganizacaoRepository";
import ICreateOrganizacaoDTO from "../dtos/ICreateOrganizacao.dto";
import { Organizacao } from "@prisma/client";
import AppError from "@shared/errors/AppError";


@injectable()
class UpdateOrganizacaoService {
    constructor(
        @inject('OrganizacaoRepository')
        private organizacaoRepository: IOrganizacaoRepository
    ){}

    public async execute(data: ICreateOrganizacaoDTO): Promise<Organizacao> {
        const organizacao = await this.organizacaoRepository.findById(data.id);
        if(!organizacao){
            throw new AppError('Organizacao não encontrado',404);
        }

        const updateOrganizacao = await this.organizacaoRepository.update(data);
        return updateOrganizacao;
    }    
        
}

export default UpdateOrganizacaoService;