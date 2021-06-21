/**
 * sub page containing specific selectors and methods for a specific page
 */
class Homepage {
    /**
     * define selectors using getter methods
     */
    get btnSubmit () { return $('//*[@class="btn_search"]') }
    get btnOcupacional () { return $('//*[text()="Ocupacional"]') }
    get SearchInput (){ return $('#search-input')}
    get textoBarraBuscar(){return $('//*[text()="¿Buscas un Terapeuta?"]')}
    get textofoco(){return $('//input[@placeholder="¿Buscas a alguien o algo en específico?"]')}
    get foco(){return $('//div[@class="input-group focus-div"]')}
    get resultadoBusqueda() {return $('//*[text() = "Licda. María Miranda Vargas"]')}
    get EstadoMapa() {return $('//aside[@class="col-lg-5"]')}
    /**
     metodo para dar click al boton de busqueda
     */
    async ClickBtnSubmit () {
        await (await this.btnSubmit).click();
    }
    /**
    Metodo para el boton Ocupacional
     */
    async ClickBtnOcupacional () {
        await (await this.btnOcupacional).click();
    }
    /**
    Metodo para ingresar texto de busqueda
     */
    async InputToSearch (Nombre) {
        await (await this.SearchInput).addValue(Nombre);
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    async open () {
        return await browser.url('/');
    }
}

module.exports = new Homepage();
