import ICreatePessoaDTO from "../dtos/ICreatePessoa.dto";
import Pessoa from "../entities/Pessoa.entity";

export default interface IPeopleRepository {
  create(data: ICreatePessoaDTO): Promise<Pessoa>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<Pessoa>;
  update(data: Pessoa): Promise<Pessoa>;
  listAll(): Promise<Pessoa[]>;
}