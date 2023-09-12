class GrupoEntity{
    id:string;
    nome: string;
    descricao: string;

    constructor(id:string, nome:string,descricao:string){
        this.id=id;
        this.nome=nome;
        this.descricao=descricao;

    }
    //setters
    public setNome(nome:string) {
        this.nome=nome;
    }
    public setDescricao(descricao:string){
        this.descricao=descricao;
    }
    //getters
    public getNome() : string {
        return this.nome;
    }
    public getDescricao() : string {
        return this.descricao;
    }
    
}
export default GrupoEntity;