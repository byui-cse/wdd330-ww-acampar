import { obterParametro } from "./uteis.mjs";
import DadosProduto from "./DadosProduto.mjs";
import DetalhesProduto from "./DetalhesProduto.mjs";

const fonteDados = new DadosProduto("barracas");
const idProduto = obterParametro("produto");

const produto = new DetalhesProduto(idProduto, fonteDados);
produto.init();

// // manipulador de evento do botão adicionar ao carrinho
// async function manipuladorAdicionarAoCarrinho(e) {
//   const produto = await fonteDados.encontrarProdutoPorId(e.target.dataset.id);
//   adicionarProdutoAoCarrinho(produto);
// }

// // adiciona ouvinte ao botão Adicionar ao Carrinho
// document
//   .getElementById("adicionarAoCarrinho")
//   .addEventListener("click", manipuladorAdicionarAoCarrinho);