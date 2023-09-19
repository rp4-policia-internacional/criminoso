import CreateOrganizacaoService from "@modules/organizacao/services/CreateOrganizacaoService";
import DeleteOrganizacaoService from "@modules/organizacao/services/DeleteOrganizacaoService";
import FindOneOrganizacaoService from "@modules/organizacao/services/FindOneOrganizacaoService";
import ListOrganizacaoService from "@modules/organizacao/services/ListOrganizacaoService";
import UpdateOrganizacaoService from "@modules/organizacao/services/UpdateOrganizacaoService";
import {Request, Response} from "express";
import { container } from "tsyringe";

export default class OrganizacaoController{

    public async create(req:Request, res:Response):Promise<Response>{
        const createOrganizacao = container.resolve(CreateOrganizacaoService);

        const {id,nome,descricao} = req.body;

        const createdOrganizacao = await createOrganizacao.execute({
            id,
            nome, 
            descricao,
        });
    
        return res.json(createdOrganizacao).status(201).send(); 
    }
    public async delete(req:Request,res:Response):Promise<Response>{
        const deleteOrg =container.resolve(DeleteOrganizacaoService);

        const {id}= req.params;

        const deletedOrg = await deleteOrg.execute(
            id
        );

        return res.json(deletedOrg).status(202).send();
    }
    public async update(req:Request,res:Response):Promise<Response>{
        const updateOrganizacao= container.resolve(UpdateOrganizacaoService);

        const {id,nome,descricao} = req.body;
        
        const updatedOrganizacao = await updateOrganizacao.execute({
            id,
            nome, 
            descricao,
        });
        return res.json(updatedOrganizacao).status(201).send();
    }
    
    public async getOne(req: Request, res: Response): Promise<Response> {
        const getOneOrganizacao = container.resolve(FindOneOrganizacaoService);

        const {id} = req.params;

        const gotOneOrganizacao = await getOneOrganizacao.excecute(id);

        return res.json(gotOneOrganizacao).status(200).send();

    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const getAllOrganizacao = container.resolve(ListOrganizacaoService);

        const gotAllOrganizacao = await getAllOrganizacao.execute();

        return res.json(gotAllOrganizacao).status(200).send();
    }


}