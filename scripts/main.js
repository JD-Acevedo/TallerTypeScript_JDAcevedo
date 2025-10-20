import { dataSeries } from "./data.js";
var seriesTBody = document.getElementById("tablaSeries");
var divPromedio = document.getElementById("promedio");
var imagen = document.getElementById("imagenCard");
var titulo = document.getElementById("tituloCard");
var descripcion = document.getElementById("cuerpoCard");
var link = document.getElementById("linkCard");
function renderTablaSeries(series) {
    series.forEach(function (s) {
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        tdId.textContent = String(s.id);
        var tdName = document.createElement("td");
        tdName.textContent = s.nombre;
        tdName.style.cursor = "pointer";
        tdName.addEventListener("click", function () { return renderCard(s); });
        var tdChannel = document.createElement("td");
        tdChannel.textContent = s.canal;
        var tdSeasons = document.createElement("td");
        tdSeasons.textContent = String(s.temporadas);
        tr.append(tdId, tdName, tdChannel, tdSeasons);
        seriesTBody.appendChild(tr);
    });
}
function sacarPromedio(series) {
    if (series.length == 0) {
        return 0;
    }
    var suma = 0;
    series.forEach(function (s) {
        suma = suma + s.temporadas;
    });
    var total;
    total = suma / series.length;
    return total;
}
function renderPromedio(series) {
    var promedio = sacarPromedio(series);
    divPromedio.textContent = "Promedio de Temporadas: ".concat(promedio);
}
function renderCard(serie) {
    imagen.src = serie.imagen;
    titulo.textContent = serie.nombre;
    descripcion.textContent = serie.descripcion;
    link.href = serie.pagina;
    link.textContent = serie.pagina;
}
renderTablaSeries(dataSeries);
renderPromedio(dataSeries);
