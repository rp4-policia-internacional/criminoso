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

    //setters
    public setNome(nome:string) {
        this.nome=nome;
    }
    public setSobrenome(sobrenome:string){
        this.sobrenome=sobrenome;
    }
    public setCaracteristicas(caracteristicas:string) {
        this.caracteristicas=caracteristicas;
    }
    public setApelido(apelido:string) {
        this.apelido=apelido;
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
    public setGenero(genero:string){
        this.genero=genero;
    }
    public setVistoPorUltimo(vistoPorUltimo:string){
        this.vistoPorUltimo=vistoPorUltimo;
    }
    public setFoto(foto:string){
        this.foto=foto;
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
    public getCaracteristicas(): string{
        return this.caracteristicas;
    }
    public getApelido(): string{
        return this.apelido;
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
    public getGenero():string{
        return this.genero;
    }
    public getDataNascimento() : Date {
        return this.dataNascimento;
    }
    public getVistoPorUltimo(): string{
        return this.vistoPorUltimo;
    }
    public getFoto():string{
        return this.foto;
    }
    public getStatus() : string {
        return this.status;
    }
    
}
export default CriminosoEntity;