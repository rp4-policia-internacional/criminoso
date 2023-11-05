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
    newStatus:string;
    id_organizacao:string;
    private mementos: CriminosoMemento[] = [];



    constructor(id:string, nomeCompleto:string, caracteristicas: string, id_paisOrigem:string,apelido:string, dataNascimento:Date, altura: number, idade: number , genero:string, id_paisVistoPorUltimo:string, foto:string,status:string,newStatus:string,id_organizacao:string ){
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
        this.newStatus=status;
        this.id_organizacao=id_organizacao;
    }
    getStatus(): string {
        return this.status;
      }
    
    setStatus(status: string): void {
    this.status = status;
    }

    createMemento(): CriminosoMemento {
        const memento = new CriminosoMemento(this.status);
        this.mementos.push(memento);
        return memento;
      }
    
    restoreMemento(memento: CriminosoMemento): void {
    this.status = memento.getStatus();
    }
 
}
export default CriminosoEntity;