import CreateCriminosoService from "@modules/criminoso/services/CreateCriminosoServece";
import { container } from "tsyringe";
import {Request, Response} from "express";
import DeleteCriminosoService from "@modules/criminoso/services/DeleteCriminosoService";
import UpdateCriminosoService from "@modules/criminoso/services/UpdateCriminosoService";
import FindOneCriminosoService from "@modules/criminoso/services/FindOneCriminosoService";
import ListCriminosoService from "@modules/criminoso/services/ListCriminosoService";
import MementoCriminosoService from "@modules/criminoso/services/MementoCriminosoServece";
import { CriminosoMemento } from "../../../memento/CriminosoMemento";
import { CriminosoCareTaker } from "../../../memento/CriminosoCareTaker";
import ListMementoCriminosoService from "@modules/criminoso/services/ListMementoCriminosoService";
import FindOneCriminosoMementoService from "@modules/criminoso/services/FindOneCriminosoMementoService";

//let idHistorico = 1;
export default class CriminosoController{   
   
    public async create(req:Request, res:Response):Promise<Response>{
        const createCriminoso = container.resolve(CreateCriminosoService);
        const createMemento = container.resolve(MementoCriminosoService);
        const careTaker = new CriminosoCareTaker();

        const {id,nomeCompleto,caracteristicas,id_paisOrigem,apelido,dataNascimento,altura,idade,genero,id_paisVistoPorUltimo,foto,status,id_organizacao} = req.body;

        const formatedDate=new Date(dataNascimento).toISOString();
        
        const createdCriminoso = await createCriminoso.execute({
            id,
            nomeCompleto, 
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
            id_organizacao
        });     

        const mementoCriminoso = new CriminosoMemento(createdCriminoso);
        careTaker.addMemento(mementoCriminoso);
        
        await createMemento.execute({
            ...createdCriminoso, 
            dataAtualizacao: new Date(),
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
        const createMemento = container.resolve(MementoCriminosoService);
        const careTaker = new CriminosoCareTaker();
        const {id,nomeCompleto,caracteristicas,id_paisOrigem,apelido,dataNascimento,altura,idade,genero,id_paisVistoPorUltimo,foto,status,newStatus,id_organizacao} = req.body;

        const formatedDate = new Date(dataNascimento).toISOString();
        const createdCriminoso = await updateCriminoso.execute({
            id,
            nomeCompleto, 
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
            id_organizacao
        });
        
        await createMemento.execute({
         //   idHistorico,
            ...createdCriminoso, 
            dataAtualizacao: new Date()
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

    public async exibirHistorico(req: Request, res: Response): Promise<Response> {
        const historico = container.resolve(ListMementoCriminosoService);
        
        const getAllHistorico = await historico.execute();
        
        return res.status(200).json(getAllHistorico);
    }
    
    public async getMemento(req: Request, res: Response): Promise<Response> {
        const getOneMemento = container.resolve(FindOneCriminosoMementoService);

        const {id} = req.params;

        const gotOneMemento = await getOneMemento.execute(id);

        return res.json(gotOneMemento).status(200).send();

    }

    


}