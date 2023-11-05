class OrganizacaoEntity{
    id:string;
    nome: string;
    lider:string;
    descricao: string;
    //simbolo, hierarquia
    sigla:string;

    constructor(id:string, nome:string, descricao:string, sigla:string, lider:string){
        this.id=id;
        this.nome=nome;
        this.descricao=descricao;
        this.sigla=sigla;
        this.lider=lider;

    }

}
export default OrganizacaoEntity;