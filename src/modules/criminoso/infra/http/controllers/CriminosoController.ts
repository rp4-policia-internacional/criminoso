import CreateCriminosoService from "@modules/criminoso/services/CreateCriminosoServece";
import { container } from "tsyringe";
import {Request, Response} from "express";
import DeleteCriminosoService from "@modules/criminoso/services/DeleteCriminosoService";
import UpdateCriminosoService from "@modules/criminoso/services/UpdateCriminosoService";
import FindOneCriminosoService from "@modules/criminoso/services/FindOneCriminosoService";
import ListCriminosoService from "@modules/criminoso/services/ListCriminosoService";
import Criminoso from "@modules/criminoso/entities/Criminoso.entity";

export default class CriminosoController{
    private statusMementos: { [id: string]: Criminoso } = {};
    public async create(req:Request, res:Response):Promise<Response>{
        const createCriminoso = container.resolve(CreateCriminosoService);

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
        const findCriminoso = container.resolve(FindOneCriminosoService);

        const {id,nomeCompleto,caracteristicas,id_paisOrigem,apelido,dataNascimento,altura,idade,genero,id_paisVistoPorUltimo,foto,status,newStatus,id_organizacao} = req.body;
       
        const criminoso = await findCriminoso.execute(id);

        if (!criminoso) {
          return res.status(404).json({ error: "Criminoso não encontrado" });
        }
        this.statusMementos[id] = criminoso.clone();

        criminoso.setStatus(newStatus);

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
            newStatus,
            id_organizacao
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

    public async undoStatusChange(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        const criminoso = this.statusMementos[id];
    
        if (!criminoso) {
          return res.status(404).json({ error: "Nenhuma alteração de status a ser desfeita" });
        }
    
        const updateCriminoso = container.resolve(UpdateCriminosoService);
    
    
        const statusMemento = criminoso.clone();
        this.statusMementos[id] = statusMemento;
    
        const updatedCriminoso = await updateCriminoso.execute({
          id,
          newStatus: statusMemento.getStatus(),
        });
    
        return res.json(updatedCriminoso);
      }
      


}