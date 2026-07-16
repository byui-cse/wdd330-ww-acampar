function converterParaJson(resposta) {
  if (resposta.ok) {
    return resposta.json();
  } else {
    throw new Error("Resposta Incorreta");
  }
}

export default class DadosProduto {
  constructor(categoria) {
    this.categoria = categoria;
    this.caminho = `../publico/json/${this.categoria}.json`;
  }
  obterDados() {
    return fetch(this.caminho)
      .then(converterParaJson)
      .then((dados) => dados);
  }
  async buscarProdutoPorId(id) {
    const produtos = await this.obterDados();
    return produtos.find((item) => item.Id === id);
  }
}