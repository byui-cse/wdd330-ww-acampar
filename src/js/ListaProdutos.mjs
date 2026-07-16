import { renderizarListaComModelo } from "./uteis.mjs";

function modeloCartaoProduto(produto) {
  return `
    <li class="cartao-produto">
      <a href="paginas_produto/?produtos=${produto.Id}">
        <img src="${produto.Imagem}" alt="${produto.Nome}">
        <h2>${produto.Marca.Nome}</h2>
        <h3>${produto.NomeSemMarca}</h3>
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
    const lista = await this.fonteDados.obterDados();
    this.renderizarLista(lista);
  }

  renderizarLista(lista) {
    // const stringsHtml = lista.map(modeloCartaoProduto);
    // this.elementoLista.insertAdjacentHTML("afterbegin", stringsHtml.join(""));

    // aplica o uso da nova função utilitária em vez do código comentado acima
    renderizarListaComModelo(modeloCartaoProduto, this.elementoLista, lista);
  }
}