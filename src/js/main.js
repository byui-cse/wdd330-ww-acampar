import DadosProduto from "./DadosProduto.mjs";
import ListaProdutos from "./ListaProdutos.mjs";

const fonteDados = new DadosProduto("barracas");

const elemento = document.querySelector(".lista-produtos");

const listaProdutos = new ListaProdutos("Barracas", fonteDados, elemento);

listaProdutos.inicializar();