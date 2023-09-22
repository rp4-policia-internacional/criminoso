class CriminosoEntity{
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

    constructor(id:string, nome:string,sobrenome:string, caracteristicas: string, id_paisOrigem:string,apelido:string, dataNascimento:Date, altura: number, idade: number , genero:string, id_paisVistoPorUltimo:string, foto:string,status:string ){
        this.id=id;
        this.nome=nome;
        this.sobrenome=sobrenome;
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
    }
 
}
export default CriminosoEntity;