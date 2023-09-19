import CreateOrgCriminosoService from "@modules/orgCriminoso/services/CreateOrgCriminosoService";
import DeleteOrgCriminosoService from "@modules/orgCriminoso/services/DeleteOrgCriminosoService";
import FindOneOrgCriminosoService from "@modules/orgCriminoso/services/FindOneOrgCriminosoService";
import ListOrgCriminosoService from "@modules/orgCriminoso/services/ListOrgCriminosoService";
import UpdateOrgCriminosoService from "@modules/orgCriminoso/services/UpdateOrgCriminosoService";
import {Request, Response} from "express";
import { container } from "tsyringe";

export default class OrgCriminosoController{

    public async create(req:Request, res:Response):Promise<Response>{
        const createOrgCriminoso = container.resolve(CreateOrgCriminosoService);

        const {id,nome,descricao} = req.body;

        const createdOrgCriminoso = await createOrgCriminoso.execute({
            id,
            nome, 
            descricao,
        });
    
        return res.json(createdOrgCriminoso).status(201).send(); 
    }
    public async delete(req:Request,res:Response):Promise<Response>{
        const deleteOrg =container.resolve(DeleteOrgCriminosoService);

        const {id}= req.params;

        const deletedOrg = await deleteOrg.execute(
            id
        );

        return res.json(deletedOrg).status(202).send();
    }
    public async update(req:Request,res:Response):Promise<Response>{
        const updateOrgCriminoso= container.resolve(UpdateOrgCriminosoService);

        const {id,nome,descricao} = req.body;
        
        const updatedOrgCriminoso = await updateOrgCriminoso.execute({
            id,
            nome, 
            descricao,
        });
        return res.json(updatedOrgCriminoso).status(201).send();
    }
    
    public async getOne(req: Request, res: Response): Promise<Response> {
        const getOneOrgCriminoso = container.resolve(FindOneOrgCriminosoService);

        const {id} = req.params;

        const gotOneOrgCriminoso = await getOneOrgCriminoso.excecute(id);

        return res.json(gotOneOrgCriminoso).status(200).send();

    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const getAllOrgCriminoso = container.resolve(ListOrgCriminosoService);

        const gotAllOrgCriminoso = await getAllOrgCriminoso.execute();

        return res.json(gotAllOrgCriminoso).status(200).send();
    }


}