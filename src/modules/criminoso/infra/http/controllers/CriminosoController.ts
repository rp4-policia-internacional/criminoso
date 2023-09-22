import CreateCriminosoService from "@modules/criminoso/services/CreateCriminosoServece";
import { container } from "tsyringe";
import {Request, Response} from "express";
import DeleteCriminosoService from "@modules/criminoso/services/DeleteCriminosoService";
import UpdateCriminosoService from "@modules/criminoso/services/UpdateCriminosoService";
import FindOneCriminosoService from "@modules/criminoso/services/FindOneCriminosoService";
import ListCriminosoService from "@modules/criminoso/services/ListCriminosoService";

export default class CriminosoController{

    public async create(req:Request, res:Response):Promise<Response>{
        const createCriminoso = container.resolve(CreateCriminosoService);

        const {id,nome,sobrenome,caracteristicas,id_paisOrigem,apelido,dataNascimento,altura,idade,genero,id_paisVistoPorUltimo,foto,status} = req.body;

        const formatedDate=new Date(dataNascimento).toISOString();
        
        const createdCriminoso = await createCriminoso.execute({
            id,
            nome, 
            sobrenome, 
            caracteristicas, 
            id_paisOrigem, 
            apelido, 
            dataNascimento:new Date(formatedDate), 
            altura, 
            idade, 
            genero, 
            id_paisVistoPorUltimo, 
            foto, 
            status,
        });
    
        return res.json(createdCriminoso).status(201).send(); 
    }

    public async delete(req:Request, res:Response):Promise<Response>{
        const deleteCriminoso =container.resolve(DeleteCriminosoService);

        const {id}= req.params;

        const deletedCriminoso = await deleteCriminoso.execute(
            id
        );

        return res.json(deletedCriminoso).status(202).send(); 
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const updateCriminoso = container.resolve(UpdateCriminosoService);

        const {id,nome,sobrenome,caracteristicas,id_paisOrigem,apelido,dataNascimento,altura,idade,genero,id_paisVistoPorUltimo,foto,status} = req.body;

        const formatedDate = new Date(dataNascimento).toISOString();
        const createdCriminoso = await updateCriminoso.execute({
            id,
            nome, 
            sobrenome, 
            caracteristicas, 
            id_paisOrigem, 
            apelido, 
            dataNascimento:new Date(formatedDate), 
            altura, 
            idade, 
            genero, 
            id_paisVistoPorUltimo, 
            foto, 
            status,
        });
        return res.json(createdCriminoso).status(201).send();
    }

    public async getOne(req: Request, res: Response): Promise<Response> {
        const getOneCriminoso = container.resolve(FindOneCriminosoService);

        const {id} = req.params;

        const gotOneCriminoso = await getOneCriminoso.execute(
            id
        );

        return res.json(gotOneCriminoso).status(200).send();

    }

    public async getAll(req: Request, res: Response): Promise<Response> {
        const getAllCriminoso = container.resolve(ListCriminosoService);

        const gotAllCriminoso = await getAllCriminoso.execute();

        return res.json(gotAllCriminoso).status(200).send();
    }



}