import ICreateCriminosoDTO from "../dtos/ICreateCriminoso.dto";
import CriminosoEntity from "../entities/Criminoso.entity";

export default interface ICriminosoRepository{
    create(data: ICreateCriminosoDTO): Promise<CriminosoEntity>;
    delete(id:string):Promise<void>;
    findById(id: string): Promise<CriminosoEntity>;
    update(data: ICreateCriminosoDTO): Promise<CriminosoEntity>;
    listAll():Promise<CriminosoEntity[]>;
    

}