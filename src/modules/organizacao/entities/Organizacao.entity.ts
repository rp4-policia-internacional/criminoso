class OrganizacaoEntity{
    id:string;
    nome: string;
    descricao: string;

    constructor(id:string, nome:string, descricao:string){
        this.id=id;
        this.nome=nome;
        this.descricao=descricao;

    }

}
export default OrganizacaoEntity;