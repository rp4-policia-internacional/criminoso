class GrupoCriminosoEntity{
    id:string;
    grupoID: string;
    criminosoID: string;

    constructor(id:string, grupoID:string,criminosoID:string){
        this.id=id;
        this.grupoID=grupoID;
        this.criminosoID=criminosoID;

    }
    //setters
    public setGrupoID(grupoID:string) {
        this.grupoID=grupoID;
    }
    public setCriminosoID(criminosoID:string){
        this.criminosoID=criminosoID;
    }
    //getters
    public getGrupoID() : string {
        return this.grupoID;
    }
    public getCriminoso() : string {
        return this.criminosoID;
    }
    
}
export default GrupoCriminosoEntity;