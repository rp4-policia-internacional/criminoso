class CriminosoEntity{
    id:string;
    nome: string;
    sobrenome: string;
    paisOrigem: string;
    altura: number;
    idade: number ;
    dataNascimento: Date;
    status:string;

    constructor(id:string, nome:string,sobrenome:string, paisOrigem:string, altura: number, idade: number , dataNascimento:Date,status:string ){
        this.id=id;
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.paisOrigem=paisOrigem;
        this.altura=altura;
        this.idade=idade;
        this.dataNascimento=dataNascimento;
        this.status=status;
    }

    //setters
    public setNome(nome:string) {
        this.nome=nome;
    }
    public setSobrenome(sobrenome:string){
        this.sobrenome=sobrenome;
    }
    public setAltura(altura:number) {
        this.altura=altura;
    }
    public setIdade(idade:number) {
        this.idade=idade;
    }
    public setDataNascimento(data:Date) {
        this.dataNascimento=data;
    }
    public setStatus(status:string){
        this.status=status;
    }
    //getters
    public getNome() : string {
        return this.nome;
    }
    public getSobrenome() : string {
        return this.sobrenome;
    }
    public getPaisOrigem() : string {
        return this.paisOrigem;
    }
    public getAltura() : number {
        return this.altura;
    }
    public getIdade() : number {
        return this.idade;
    }
    public getDataNascimento() : Date {
        return this.dataNascimento;
    }
    public getStatus() : string {
        return this.status;
    }
    
}
export default CriminosoEntity;