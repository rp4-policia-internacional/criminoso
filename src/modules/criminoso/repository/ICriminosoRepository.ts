import ICreateCriminosoDTO from "../dtos/ICreateCriminoso.dto";
import ICreateMementoDTO from "../dtos/ICreateMemento.dto";
import CriminosoEntity from "../entities/Criminoso.entity";
import MementoEntity from "../entities/Memento.entity";


export default interface ICriminosoRepository{
    create(data: ICreateCriminosoDTO): Promise<CriminosoEntity>;
    delete(id:string):Promise<void>;
    findById(id: string): Promise<CriminosoEntity>;
    update(data: ICreateCriminosoDTO): Promise<CriminosoEntity>;
    listAll():Promise<CriminosoEntity[]>;
    createMemento(data: ICreateMementoDTO):Promise<MementoEntity>;
    listAllMemento():Promise<MementoEntity[]>;
    findByIdMemento(id: string): Promise<MementoEntity[]>;
    
}