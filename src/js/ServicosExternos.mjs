const baseURL = import.meta.env.VITE_SERVER_URL;

function converterParaJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Resposta Incorreta");
  }
}

export default class ServicosExternos {
  constructor() {
    // this.categoria = categoria;
    // this.caminho = `../publico/json/${this.categoria}.json`;
  }
  async obterDados(categoria) {
    const response = await fetch(`${baseURL}produtos/busca/${categoria}`);
    const dados = await converterParaJson(response);

    return dados.Result;
  }
  async buscarProdutoPorId(id) {
    const response = await fetch(`${baseURL}produto/${id}`);
    const dados = await converterParaJson(response);
    // console.log(dados.Result);
    return dados.Result;
  }

  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(`${baseURL}finalizar-compra/`, options).then(converterParaJson);
  }
}