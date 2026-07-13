// uteis.mjs

// atalho para querySelector... retorna o elemento correspondente
export function qs(seletor, pai = document) {
  return pai.querySelector(seletor);
}
// ou uma versão mais concisa se você gostar desse tipo de coisa:
// export const qs = (seletor, pai = document) => pai.querySelector(seletor);

// recupera dados do armazenamento local (localStorage)
export function obterArmazenamentoLocal(chave) {
  return JSON.parse(localStorage.getItem(chave));
}

// salva dados no armazenamento local (localStorage)
export function definirArmazenamentoLocal(chave, dados) {
  localStorage.setItem(chave, JSON.stringify(dados));
}

// configura um ouvinte tanto para touchend quanto para click
export function configurarClique(seletor, acao) {
  qs(seletor).addEventListener("touchend", (evento) => {
    evento.preventDefault();
    acao();
  });
  qs(seletor).addEventListener("click", acao);
}