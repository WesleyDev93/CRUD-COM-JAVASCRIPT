import {clienteService} from "../service/cliente-service.js";

const formulario = document.querySelector ('[data-form]');

//const cadastrar = document.querySelector ('.botao');


formulario.addEventListener ('submit', (evento) => {
     evento.preventDefault ()

     const nome = evento.target.querySelector ('[data-nome]').value
     const email = evento.target.querySelector ('[data-email]').value
})


