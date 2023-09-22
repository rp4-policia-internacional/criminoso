export default interface ICreateCriminosoDTO {
    id:string;
    nome: string;
    sobrenome: string;
    caracteristicas: string;
    id_paisOrigem: string;
    apelido: string;
    dataNascimento: Date;
    altura: number;
    idade: number ;
    genero: string;
    id_paisVistoPorUltimo: string;
    foto: string;
    status:string;
}