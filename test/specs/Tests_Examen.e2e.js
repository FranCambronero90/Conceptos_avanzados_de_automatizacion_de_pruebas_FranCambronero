const Homepage = require('../pageobjects/Homepage');
const Searchpage = require('../pageobjects/Searchpage');

let constantes = 
{
fisica: 'phisical',
lenguaje: 'language',
ocupcional: 'ocupational',
nombre:'Maria',
Metodo: 'GET',
URL: 'https://javito-prod.herokuapp.com/v1/specialist/bfea3295-af20-4824-8bed-170a227bc1e6',
Codigoestado: 200

}

describe('HomePage Tests - Terapeutica', () => {
    beforeEach (async ()=>{
        await Homepage.open();
    })
    it('Presionar boton buscar sin texto - 1.a', async () => {
        await Homepage.ClickBtnSubmit();
        await expect(await Homepage.textoBarraBuscar).toBeDisplayed();
    });
    it('Presionar boton especialidad para validar foco y texto - 1.b', async () => {
        await Homepage.ClickBtnOcupacional();
        await expect(await Homepage.textofoco).toBeDisplayed();
        await expect(await Homepage.foco).toBeDisplayed();
    });
    it('Buscar Profesional "Maria" - 1.c', async () => {
        await Homepage.InputToSearch(constantes.nombre);
        await Homepage.ClickBtnSubmit();
        await expect(await Homepage.resultadoBusqueda).toBeDisplayed();
    });
});
describe('Searchpage Tests - Terapeutica', () => {
    before (async ()=>{
        await Homepage.open();
    })
    beforeEach (async ()=>{
        await Searchpage.open();
    })
    it('Cambio de especialidad (Fisica) - 2.a', async () => {
        await Searchpage.ClickBtnFisica();
        await expect(browser).toHaveUrlContaining(constantes.fisica);
    });
    it('Cambio de especialidad (Lenguaje) - 2.a', async () => {
        await Searchpage.ClickbtnLenguaje();
        await expect(browser).toHaveUrlContaining(constantes.lenguaje);
    });
    it('Cambio de especialidad (Ocupacional) - 2.a', async () => {
        await Searchpage.ClickBtnOcupacional();
        await expect(browser).toHaveUrlContaining(constantes.ocupcional);
    });
    it('Refrescar pagina luego de buscar - 2.b', async () => {
        await Searchpage.InputToSearch(constantes.nombre);
        await Searchpage.ClickbtnSubmit();
        await expect(browser).toHaveUrlContaining(constantes.nombre);
        await expect(await Homepage.resultadoBusqueda).toBeDisplayed();
    });
    it('Validar Mapa desaparece - 2.c', async () => {
        await Searchpage.ClickbtnLista();
        await expect(await Homepage.EstadoMapa).not.toBeDisplayed();
    });
    it('Validar Mapa aparece - 2.c', async () => {
        await Searchpage.ClickbtnLista();
        await Searchpage.ClickbtnMap();
        await expect(await Homepage.EstadoMapa).toBeDisplayed();
    });
});
describe('Interceptar URL', () => {
    beforeEach (async ()=>{
        await Searchpage.open();
    })
    it('Validar Perfil profesional - 3.a', async () => {
        await browser.setupInterceptor();
        await Searchpage.ClickbtnPerfil();
        await browser.pause(1000);
        await browser.expectRequest(constantes.Metodo,constantes.URL, constantes.Codigoestado);
        await browser.assertExpectedRequestsOnly();
    });    
});