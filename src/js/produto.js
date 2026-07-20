import { obterParametro, carregarHeaderFooter } from "./uteis.mjs";
import ServicosExternos from "./ServicosExternos.mjs";
import DetalhesProduto from "./DetalhesProduto.mjs";

carregarHeaderFooter();

const fonteDados = new ServicosExternos("barracas");
const idProduto = obterParametro("produto");

const produto = new DetalhesProduto(idProduto, fonteDados);
produto.inicializar();