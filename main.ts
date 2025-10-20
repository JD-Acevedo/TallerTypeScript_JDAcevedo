import { dataSeries } from "./data.js";
import {Serie} from "./Serie.js";

const seriesTBody = document.getElementById("tablaSeries") as HTMLTableSectionElement;
const divPromedio = document.getElementById("promedio")

const imagen = document.getElementById("imagenCard") as HTMLImageElement;
const titulo = document.getElementById("tituloCard") as HTMLHeadingElement;
const descripcion = document.getElementById("cuerpoCard") as HTMLParagraphElement;
const link = document.getElementById("linkCard") as HTMLAnchorElement;

function renderTablaSeries(series: Serie[]): void {
    series.forEach(s => {
        const tr = document.createElement("tr");

        const tdId = document.createElement("td");
        tdId.textContent = String(s.id);

        const tdName = document.createElement("td");
        tdName.textContent = s.nombre;
        tdName.style.cursor = "pointer";
        tdName.addEventListener("click", () => renderCard(s));

        const tdChannel = document.createElement("td");
        tdChannel.textContent = s.canal;

        const tdSeasons = document.createElement("td");
        tdSeasons.textContent = String(s.temporadas);

        tr.append(tdId, tdName, tdChannel, tdSeasons);
        seriesTBody.appendChild(tr);
    });
}

function sacarPromedio(series:Serie[]):number{
    if (series.length==0){
        return 0
    }
    let suma :number=0
    series.forEach(s=>{
        suma=suma+s.temporadas
    })
    let total:number
    total=suma/series.length
    return total
}

function renderPromedio(series: Serie[]):void{
    let promedio:number =sacarPromedio(series)
    divPromedio!.textContent=`Promedio de Temporadas: ${promedio}`
}

function renderCard(serie:Serie):void{
    imagen.src=serie.imagen
    titulo.textContent=serie.nombre
    descripcion.textContent=serie.descripcion
    link.href=serie.pagina
    link.textContent=serie.pagina
}

renderTablaSeries(dataSeries)
renderPromedio(dataSeries)
