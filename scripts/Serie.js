var Serie = /** @class */ (function () {
    function Serie(idE, nombreE, canalE, temporadasE, descrpE, paginaE, imagE) {
        this.descripcion = descrpE;
        this.id = idE;
        this.nombre = nombreE;
        this.temporadas = temporadasE;
        this.canal = canalE;
        this.imagen = imagE;
        this.pagina = paginaE;
    }
    return Serie;
}());
export { Serie };
