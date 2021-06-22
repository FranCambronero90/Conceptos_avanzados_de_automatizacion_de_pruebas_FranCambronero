/**
 * sub page containing specific selectors and methods for a specific page
 */
class Searchpage {
    /**
    * define selectors using getter methods
    */
    get btnFisica () { return $('//*[text()= "Física"]') }
    get btnOcupacional () { return $('//*[text()="Ocupacional"]') }
    get btnLenguaje () { return $('//*[text()="Lenguaje"]') }
    get btnSubmit () { return $('//*[@type="submit"]') }
    get SearchInput (){ return $('//*[@class="form-control padding-right"]')}
    get btnLista (){ return $('//*[@class= "icon-th-list"]')}
    get btnMap (){ return $('//*[@class= "icon-map-1"]')}
    get btnPerfilCompleto(){return $('//*[@class="btn_listing"]')}

    /**
    Metodo para dar click al boton de Fisica
    */
    async ClickBtnFisica () {
        await (await this.btnFisica).click();
    }
    /**
    Metodo para dar click al boton Ocupacional
    */
    async ClickBtnOcupacional () {
        await (await this.btnOcupacional).click();
    }
    /**
     Metodo para dar click al boton Lenguaje
    */
    async ClickbtnLenguaje () {
        await (await this.btnLenguaje).click();
    }
    /**
     Metodo para dar click al boton buscar
    */
     async ClickbtnSubmit () {
        await (await this.btnSubmit).click();
    }
    /**
    Metodo para ingresar texto de busqueda
     */
    async InputToSearch (Nombre) {
        await (await this.SearchInput).addValue(Nombre);
    }
    /**
    Metodo para presionar boton lista
     */
    async ClickbtnLista () {
        await (await this.btnLista).click();
    }
    /**
    Metodo para presionar boton Mapa
     */
    async ClickbtnMap () {
        await (await this.btnMap).click();
    }
    /**
    Metodo para presionar boton perfil completp
     */
    async ClickbtnPerfil () {
        await (await this.btnPerfilCompleto).click();
    }
    /**
    * overwrite specifc options to adapt it to page object
     */
      async open () {
          return await browser.url('/#/search');
      }
  }
  
  module.exports = new Searchpage();