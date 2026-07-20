import { obterArmazenamentoLocal, carregarHeaderFooter } from "./uteis.mjs";

carregarHeaderFooter();

function renderizarConteudoCarrinho() {
  const itensCarrinho = obterArmazenamentoLocal("so-carrinho");
  const itensHtml = itensCarrinho.map((item) => modeloItemCarrinho(item));
  document.querySelector(".lista-produtos").innerHTML = itensHtml.join("");
}

function modeloItemCarrinho(item) {
  const novoItem = `<li class="cartao-carrinho divisor">
  <a href="#" class="cartao-carrinho__imagem">
    <img
      src="${item.Imagem}"
      alt="${item.Nome}"
    />
  </a>
  <a href="#">
    <h2 class="cartao__nome">${item.Nome}</h2>
  </a>
  <p class="cartao-carrinho__cor">${item.Cores[0].NomeCor}</p>
  <p class="cartao-carrinho__quantidade">qtd: 1</p>
  <p class="cartao-carrinho__preco">R$${item.PrecoFinal}</p>
</li>`;

  return novoItem;
}

renderizarConteudoCarrinho();