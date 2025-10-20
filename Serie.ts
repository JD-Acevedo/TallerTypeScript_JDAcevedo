export class Serie{
    public id: number;
    public nombre: string;
    public temporadas: number;
    public descripcion: string;
    public canal: string;
    public pagina:string;
    public imagen:string;

    constructor(idE: number, nombreE:string,canalE:string, temporadasE:number,  descrpE:string, paginaE:string,imagE:string){

        this.descripcion=descrpE
        this.id=idE
        this.nombre=nombreE
        this.temporadas=temporadasE
        this.canal=canalE
        this.imagen=imagE
        this.pagina=paginaE
    }
}