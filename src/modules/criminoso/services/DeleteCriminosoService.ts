import { inject, injectable } from "tsyringe";
import ICriminosoRepository from "../repository/ICriminosoRepository";
import AppError from "@shared/errors/AppError";

@injectable()
class DeleteCriminosoService{

    constructor(
        @inject('CriminosoRepository')
        private criminosoRepository: ICriminosoRepository
    ){

    }

    public async execute(id: string): Promise<void>{
        const findCriminoso = await this.criminosoRepository.findById(id);

        if (!findCriminoso) {
            throw new AppError("Criminoso não encontrado",400);
        }

        await this.criminosoRepository.delete(id);
        return;
    }
}
export default DeleteCriminosoService;