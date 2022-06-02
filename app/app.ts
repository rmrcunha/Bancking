import { NegociacaoController } from "./controllers/negociacao-controller.js";
import { NegociacoesView } from "./views/nogociacoes-view.js";

const controller = new NegociacaoController();

const form = document.querySelector('.form')
if (form){
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
} else {
    throw Error('Nâo foi possível iniciar a aplicação. Verifique se o form existe.')
}