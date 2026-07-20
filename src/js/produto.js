import { obterParametro, carregarHeaderFooter } from "./uteis.mjs";
import DadosProduto from "./DadosProduto.mjs";
import DetalhesProduto from "./DetalhesProduto.mjs";

carregarHeaderFooter();

const fonteDados = new DadosProduto("barracas");
const idProduto = obterParametro("produto");

const produto = new DetalhesProduto(idProduto, fonteDados);
produto.inicializar();