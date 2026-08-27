import { obterArmazenamentoLocal, definirArmazenamentoLocal } from "./uteis.mjs";
import DadosProduto from "./DadosProduto.mjs";

const fonteDados = new DadosProduto("barracas");

function adicionarProdutoAoCarrinho(produto) {
  const itensCarrinho = obterArmazenamentoLocal("so-carrinho") || []; // obtém o array de itens do carrinho do armazenamento local; se nulo, define como array vazio
  itensCarrinho.push(produto);
  definirArmazenamentoLocal("so-carrinho", itensCarrinho);
}

// manipulador de evento do botão adicionar ao carrinho
async function manipuladorAdicionarAoCarrinho(e) {
  const produto = await fonteDados.buscarProdutoPorId(e.target.dataset.id);
  adicionarProdutoAoCarrinho(produto);
}

// adiciona ouvinte ao botão Adicionar ao Carrinho
document
  .getElementById("adicionarAoCarrinho")
  .addEventListener("click", manipuladorAdicionarAoCarrinho);
