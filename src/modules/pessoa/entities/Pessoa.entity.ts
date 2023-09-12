class PessoaEntity{
    id:string;
    nome:string;
    sobrenome:string;
    dataNasc: Date;

    constructor(id: string, nome:string, sobrenome:string, dataNasc: Date){
        this.id=id;
        this.nome=nome;
        this.sobrenome=sobrenome;
        this.dataNasc=dataNasc;
    }

}
export default PessoaEntity;
