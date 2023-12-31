class CriminosoEntity{
    id:string;
    nomeCompleto:string;
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

    constructor(id:string, nomeCompleto:string, caracteristicas: string, id_paisOrigem:string,apelido:string, dataNascimento:Date, altura: number, idade: number , genero:string, id_paisVistoPorUltimo:string, foto:string,status:string,id_organizacao:string ){
        this.id=id;
        this.nomeCompleto=nomeCompleto;
        this.caracteristicas=caracteristicas;
        this.id_paisOrigem=id_paisOrigem;
        this.apelido=apelido;
        this.dataNascimento=dataNascimento;
        this.altura=altura;
        this.idade=idade;
        this.genero=genero;
        this.id_paisVistoPorUltimo=id_paisVistoPorUltimo;
        this.foto= foto;
        this.status=status;
        this.id_organizacao=id_organizacao;
    }
 
}
export default CriminosoEntity;