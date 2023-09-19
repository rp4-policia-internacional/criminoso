class OrgCriminosoEntity{
    id:string;
    grupoID: string;
    criminosoID: string;
    funcaoCriminoso:string;

    constructor(id:string, grupoID:string,criminosoID:string,funcaoCriminoso:string){
        this.id=id;
        this.grupoID=grupoID;
        this.criminosoID=criminosoID;
        this.funcaoCriminoso=funcaoCriminoso;

    }
}
export default OrgCriminosoEntity;