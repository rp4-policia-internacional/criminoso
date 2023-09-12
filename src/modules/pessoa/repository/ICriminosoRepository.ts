import ICreateCriminosoDTO from "../dtos/ICreateCriminoso.dto";
import Criminoso from "../entities/Criminoso.entity";

export default interface ICriminosoRepository{
    create(data: ICreateCriminosoDTO): Promise<Criminoso>;
    delete(id:string):Promise<void>;
    findById(id: string): Promise<Criminoso>;
    update(data: ICreateCriminosoDTO): Promise<Criminoso>;

}