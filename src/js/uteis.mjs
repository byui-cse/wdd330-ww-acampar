// atalho para querySelector... retorna o elemento correspondente
export function seletorRapido(seletor, pai = document) {
  return pai.querySelector(seletor);
}
// ou uma versão mais concisa se você gostar desse tipo de coisa:
// export const seletorRapido = (seletor, pai = document) => pai.querySelector(seletor);

// recupera dados do armazenamento local (localStorage)
export function obterArmazenamentoLocal(chave) {
  return JSON.parse(localStorage.getItem(chave));
}
// salva dados no armazenamento local (localStorage)
export function definirArmazenamentoLocal(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}
// configura um ouvinte tanto para touchend quanto para click
export function definirClique(seletor, funcaoRetorno) {
  seletorRapido(seletor).addEventListener("touchend", (event) => {
    event.preventDefault();
    funcaoRetorno();
  });
  seletorRapido(seletor).addEventListener("click", funcaoRetorno);
}

// obtém o id do produto a partir da query string
export function obterParametro(parametro) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const produto = urlParams.get(parametro);
  return produto
}

export function renderizarListaComModelo(modelo, elementoPai, lista, posicao = "afterbegin", limpar = false) {
  const stringsHtml = lista.map(modelo);
  // se limpar for verdadeiro, precisamos limpar o conteúdo do elemento pai.
  if (limpar) {
    elementoPai.innerHTML = "";
  }
  elementoPai.insertAdjacentHTML(posicao, stringsHtml.join(""));
}

export function renderizarComModelo(modelo, elementoPai, dados, funcaoRetorno) {
  elementoPai.innerHTML = modelo;
  if (funcaoRetorno) {
    funcaoRetorno(dados);
  }
}

async function carregarModelo(caminho) {
  const resposta = await fetch(caminho);
  const modelo = await resposta.text();
  return modelo;
}

export async function carregarHeaderFooter() {
  const modeloHeader = await carregarModelo("../parciais/header.html");
  const modeloFooter = await carregarModelo("../parciais/footer.html");

  const elementoHeader = document.querySelector("#header-principal");
  const elementoFooter = document.querySelector("#footer-principal");

  renderizarComModelo(modeloHeader, elementoHeader);
  renderizarComModelo(modeloFooter, elementoFooter);
}