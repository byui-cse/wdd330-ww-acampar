// invólucro para querySelector...retorna elemento correspondente
export function obterElemento(seletor, elementoPai = document) {
  return elementoPai.querySelector(seletor);
}
// ou uma versão mais concisa, se preferir:
// export const obterElemento = (seletor, elementoPai = document) => elementoPai.querySelector(seletor);

// recuperar dados do localstorage
export function obterArmazenamentoLocal(chave) {
  return JSON.parse(localStorage.getItem(chave));
}
// salvar dados no local storage
export function definirArmazenamentoLocal(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}
// definir um ouvinte para touchend e click
export function definirClique(seletor, funcaoRetorno) {
  obterElemento(seletor).addEventListener("touchend", (evento) => {
    evento.preventDefault();
    funcaoRetorno();
  });
  obterElemento(seletor).addEventListener("click", funcaoRetorno);
}

// obter o id do produto da query string
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