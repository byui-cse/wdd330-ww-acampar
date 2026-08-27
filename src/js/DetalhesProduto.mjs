import { obterArmazenamentoLocal, definirArmazenamentoLocal } from "./uteis.mjs";

export default class DetalhesProduto {

  constructor(idProduto, fonteDados) {
    this.idProduto = idProduto;
    this.produto = {};
    this.fonteDados = fonteDados;
  }

  async inicializar() {
    // utilize a fonte de dados para obter os detalhes do produto atual. buscarProdutoPorId retornará uma promessa! use await ou .then() para processá-la
    this.produto = await this.fonteDados.buscarProdutoPorId(this.idProduto);
    // os detalhes do produto são necessários antes de renderizar o HTML
    this.renderizarDetalhesProduto();
    // assim que o HTML for renderizado, adicione um ouvinte ao botão Adicionar ao Carrinho
    // Note o .bind(this). Esta função de retorno não funcionará se o bind(this) estiver faltando. Revise as leituras desta semana sobre "this" para entender o porquê.
    document
      .getElementById("adicionar-ao-carrinho")
      .addEventListener("click", this.adicionarProdutoAoCarrinho.bind(this));
  }

  adicionarProdutoAoCarrinho() {
    const itensCarrinho = obterArmazenamentoLocal("so-carrinho") || [];
    itensCarrinho.push(this.produto);
    definirArmazenamentoLocal("so-carrinho", itensCarrinho);
  }

  renderizarDetalhesProduto() {
    modeloDetalhesProduto(this.produto);
  }
}

function modeloDetalhesProduto(produto) {
  document.querySelector("h2").textContent = produto.Categoria.charAt(0).toUpperCase() + produto.Categoria.slice(1);
  document.querySelector("#p-marca").textContent = produto.Marca.Nome;
  document.querySelector("#p-nome").textContent = produto.NomeSemMarca;

  const imagemProduto = document.querySelector("#p-imagem");
  imagemProduto.src = produto.Imagens.PrincipalExtraGrande;
  imagemProduto.alt = produto.NomeSemMarca;
  const precoEuro = new Intl.NumberFormat('de-DE',
    {
      style: 'currency', currency: 'EUR',
    }).format(Number(produto.PrecoFinal) * 0.85);
  document.querySelector("#p-preco").textContent = `${precoEuro}`;
  document.querySelector("#p-cor").textContent = produto.Cores[0].NomeCor;
  document.querySelector("#p-descricao").innerHTML = produto.DescricaoHtmlSimples;

  document.querySelector("#adicionar-ao-carrinho").dataset.id = produto.Id;
}

// ************* Método Alternativo de Exibição de Detalhes do Produto *******************
// function modeloDetalhesProduto(produto) {
//   return `<section class="detalhe-produto"> <h3>${produto.Marca.Nome}</h3>
//     <h2 class="divisor">${produto.NomeSemMarca}</h2>
//     <img
//       class="divisor"
//       src="${produto.Imagem}"
//       alt="${produto.NomeSemMarca}"
//     />
//     <p class="cartao-produto__preco">R$${produto.PrecoFinal}</p>
//     <p class="cor__produto">${produto.Cores[0].NomeCor}</p>
//     <p class="descricao__produto">
//     ${produto.DescricaoHtmlSimples}
//     </p>
//     <div class="detalhe-produto__adicionar">
//       <button id="adicionarAoCarrinho" data-id="${produto.Id}">Adicionar ao Carrinho</button>
//     </div></section>`;
// }