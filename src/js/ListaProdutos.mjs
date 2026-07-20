import { renderizarListaComModelo } from "./uteis.mjs";

function modeloCartaoProduto(produto) {
  return `
    <li class="cartao-produto">
      <a href="/paginas_produto/?produto=${produto.Id}">
        <img src="${produto.Imagens.PrimariaMedia}" alt="${produto.Nome}">
        <h3>${produto.Marca.Nome}</h3>
        <p>${produto.NomeSemMarca}</p>
        <p class="cartao-produto__preco">R$${produto.PrecoFinal}</p>
      </a>
    </li>
    `;
}

export default class ListaProdutos {
  constructor(categoria, fonteDados, elementoLista) {
    this.categoria = categoria;
    this.fonteDados = fonteDados;
    this.elementoLista = elementoLista;
  }

  async inicializar() {
    const lista = await this.fonteDados.obterDados(this.categoria);
    this.renderizarLista(lista);
    document.querySelector(".titulo").textContent = this.categoria;
  }

  renderizarLista(lista) {
    // const stringsHtml = lista.map(modeloCartaoProduto);
    // this.elementoLista.insertAdjacentHTML("afterbegin", stringsHtml.join(""));

    // aplique o uso da nova funcao utilitaria em vez do codigo comentado acima
    renderizarListaComModelo(modeloCartaoProduto, this.elementoLista, lista);
  }
}