const baseURL = import.meta.env.VITE_SERVER_URL;

function converterParaJson(resposta) {
  if (resposta.ok) {
    return resposta.json();
  } else {
    throw new Error("Resposta Incorreta");
  }
}

export default class DadosProduto {
  constructor() {
    // this.categoria = categoria;
    // this.caminho = `../publico/json/${this.categoria}.json`;
  }
  async obterDados(categoria) {
    const resposta = await fetch(`${baseURL}products/search/${categoria}`);
    const dados = await converterParaJson(resposta);
    
    return dados.Result;
  }
  async buscarProdutoPorId(id) {
    const resposta = await fetch(`${baseURL}product/${id}`);
    const dados = await converterParaJson(resposta);
    console.log(dados.Result);
    return dados.Result;
  }
}