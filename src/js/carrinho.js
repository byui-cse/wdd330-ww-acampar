// carrinho.js
import { obterArmazeNomentoLocal } from "./uteis.mjs";

function renderizarConteudoCarrinho() {
  const itensCarrinho = obterArmazeNomentoLocal("so-carrinho");
  const itensHtml = itensCarrinho.map((item) => modeloItemCarrinho(item));
  document.querySelector(".lista-produtos").innerHTML = itensHtml.join("");
}

function modeloItemCarrinho(item) {
  const novoItem = `<li class="cartao-carrinho divisor">
  <a href="#" class="cartao-carrinho__Imagemm">
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
  <p class="cartao-carrinho__preco">$${item.PrecoFinal}</p>
</li>`;

  return novoItem;
}

renderizarConteudoCarrinho();