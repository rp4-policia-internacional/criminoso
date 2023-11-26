export default interface ICreateMementoDTO {
    id:string;
    nomeCompleto: string;
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
    id_organizacao:string;
    dataAtualizacao:Date;
}