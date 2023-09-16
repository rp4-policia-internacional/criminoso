class CriminosoEntity{
    id:string;
    nome: string;
    sobrenome: string;
    caracteristicas: string;
    paisOrigem: string;
    apelido: string;
    dataNascimento: Date;
    altura: number;
    idade: number ;
    genero: string;
    vistoPorUltimo: string;
    foto: string;
    status:string;

    constructor(id:string, nome:string,sobrenome:string, caracteristicas: string, paisOrigem:string,apelido:string, dataNascimento:Date, altura: number, idade: number , genero:string, vistoPorUltimo:string, foto:string,status:string ){
        this.id=id;
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.caracteristicas=caracteristicas;
        this.paisOrigem=paisOrigem;
        this.apelido=apelido;
        this.dataNascimento=dataNascimento;
        this.altura=altura;
        this.idade=idade;
        this.genero=genero;
        this.vistoPorUltimo=vistoPorUltimo;
        this.foto= foto;
        this.status=status;
    }
 
}
export default CriminosoEntity;