import { obterArmazenamentoLocal, definirArmazenamentoLocal } from "./uteis.mjs";

export default class DetalhesProduto {

  constructor(idProduto, fonteDados) {
    this.idProduto = idProduto;
    this.produto = {};
    this.fonteDados = fonteDados;
  }

  async inicializar() {
    // usa a fonteDados para obter os detalhes do produto atual. encontrarProdutoPorId retornará uma promise! use await ou .then() para processá-la
    this.produto = await this.fonteDados.buscarProdutoPorId(this.idProduto);
    // os detalhes do produto são necessários antes de renderizar o HTML
    this.renderizarDetalhesProduto();
    // uma vez que o HTML é renderizado, adicione um ouvinte ao botão Adicionar ao Carrinho
    // Note o .bind(this). Este callback não funcionará se o bind(this) estiver faltando. Revise as leituras desta semana sobre 'this' para entender o porquê.
    document
      .getElementById('adicionarAoCarrinho')
      .addEventListener('click', this.adicionarProdutoAoCarrinho.bind(this));
  }

  adicionarProdutoAoCarrinho() {
    const itensCarrinho = obterArmazenamentoLocal("so-carrinho") || [];
    itensCarrinho.push(this.produto);
    definirArmazenamentoLocal("so-carrinho", itensCarrinho);
  }

  renderizarDetalhesProduto() {
    ModeloDetalhesProduto(this.produto);
  }
}

function ModeloDetalhesProduto(produto) {
  document.querySelector('h2').textContent = produto.Marca.Nome;
  document.querySelector('h3').textContent = produto.NomeSemMarca;

  const imagemProduto = document.getElementById('imagemProduto');
  imagemProduto.src = produto.Imagem;
  imagemProduto.alt = produto.NomeSemMarca;

  document.getElementById('precoProduto').textContent = `R$${produto.PrecoFinal}`;
  document.getElementById('corProduto').textContent = produto.Cores[0].NomeCor;
  document.getElementById('descricaoProduto').innerHTML = produto.DescricaoHtmlSimples;

  document.getElementById('adicionarAoCarrinho').dataset.id = produto.Id;
}

// ************* Método Alternativo de Exibição de Detalhes do Produto *******************
// function ModeloDetalhesProduto(produto) {
//   return `<section class="detalhe-produto"> <h3>${produto.Marca.Nome}</h3>
//     <h2 class="divisor">${produto.NomeSemMarca}</h2>
//     <img
//       class="divisor"
//       src="${produto.Imagem}"
//       alt="${produto.NomeSemMarca}"
//     />
//     <p class="cartao-produto__preco">R$${produto.PrecoFinal}</p>
//     <p class="produto__cor">${produto.Cores[0].NomeCor}</p>
//     <p class="produto__descricao">
//     ${produto.DescricaoHtmlSimples}
//     </p>
//     <div class="detalhe-produto__adicionar">
//       <button id="adicionarAoCarrinho" data-id="${produto.Id}">Adicionar ao Carrinho</button>
//     </div></section>`;
// }