import { carregarHeaderFooter, obterParametro } from "./uteis.mjs";
import ServicosExternos from "./ServicosExternos.mjs";
import ListaProdutos from "./ListaProdutos.mjs";

carregarHeaderFooter();

const categoria = obterParametro("categoria");
const fonteDados = new ServicosExternos();
const elemento = document.querySelector(".lista-produtos");
const listagem = new ListaProdutos(categoria, fonteDados, elemento);

listagem.inicializar();