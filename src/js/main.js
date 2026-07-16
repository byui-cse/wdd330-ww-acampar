import { carregarHeaderFooter } from "./uteis.mjs";
import DadosProduto from "./DadosProduto.mjs";
import ListaProdutos from "./ListaProdutos.mjs";

carregarHeaderFooter();

const fonteDados = new DadosProduto("barracas");
const elemento = document.querySelector(".lista-produtos");
const listaProdutos = new ListaProdutos("Barracas", fonteDados, elemento);

listaProdutos.inicializar();