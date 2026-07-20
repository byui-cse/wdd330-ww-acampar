import { carregarHeaderFooter, obterParametro } from "./uteis.mjs";
import DadosProduto from "./DadosProduto.mjs";
import ListaProdutos from "./ListaProdutos.mjs";

carregarHeaderFooter();

const categoria = obterParametro("categoria");
const fonteDados = new DadosProduto();
const elemento = document.querySelector(".lista-produtos");
const listagem = new ListaProdutos(categoria, fonteDados, elemento);

listagem.inicializar();