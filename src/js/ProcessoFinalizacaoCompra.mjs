import { obterArmazenamentoLocal } from "./uteis.mjs";
import ServicosExternos from "./ServicosExternos.mjs";

const servicos = new ServicosExternos();

function dadosFormularioParaJSON(elementoFormulario) {
  // converte os dados do formulário para um objeto JSON
  const dadosFormulario = new FormData(elementoFormulario);
  const jsonConvertido = {};
  dadosFormulario.forEach((valor, chave) => {
    jsonConvertido[chave] = valor;
  });
  return jsonConvertido;
}

function empacotarItens(itens) {
  const itensSimplificados = itens.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      preco: item.PrecoFinal,
      nome: item.Nome,
      quantidade: 1,
    };
  });
  return itensSimplificados;
}

export default class ProcessoFinalizacaoCompra {
  constructor(chave, seletorSaida) {
    this.chave = chave;
    this.seletorSaida = seletorSaida;
    this.lista = [];
    this.totalItens = 0;
    this.frete = 0;
    this.imposto = 0;
    this.totalPedido = 0;
  }

  inicializar() {
    this.lista = obterArmazenamentoLocal(this.chave);
    this.calcularResumoItens();
  }

  calcularResumoItens() {
    // calcula e exibe o valor total dos itens no carrinho e o número de itens.
    const elementoResumo = document.querySelector(
      this.seletorSaida + " #totalCarrinho"
    );
    const elementoNumeroItens = document.querySelector(
      this.seletorSaida + " #num-items"
    );
    elementoNumeroItens.innerText = this.lista.length;
    // calcula o total de todos os itens no carrinho
    const valores = this.lista.map((item) => item.PrecoFinal);
    this.totalItens = valores.reduce((soma, item) => soma + item, 0);
    elementoResumo.innerText = `R$${this.totalItens}`;
  }

  calcularTotalPedido() {
    // calcula os valores de frete e imposto. Em seguida, usa-os junto com o total do carrinho para calcular o total do pedido
    this.imposto = this.totalItens * 0.06;
    this.frete = 10 + (this.lista.length - 1) * 2;
    this.totalPedido =
      parseFloat(this.totalItens) +
      parseFloat(this.imposto) +
      parseFloat(this.frete);
    // exibe os totais.
    this.exibirTotaisPedido();
  }

  exibirTotaisPedido() {
    // uma vez que todos os totais estejam calculados, exibe-os na página de resumo do pedido
    const impostoEl = document.querySelector(`${this.seletorSaida} #imposto`);
    const freteEl = document.querySelector(`${this.seletorSaida} #frete`);
    const totalPedidoEl = document.querySelector(`${this.seletorSaida} #totalPedido`);

    impostoEl.innerText = `R$${this.imposto.toFixed(2)}`;
    freteEl.innerText = `R$${this.frete.toFixed(2)}`;
    totalPedidoEl.innerText = `R$${this.totalPedido.toFixed(2)}`;
  }

  async finalizar_compra() {
    const elementoFormulario = document.forms["finalizar_compra"];
    const pedido = dadosFormularioParaJSON(elementoFormulario);

    pedido.dataPedido = new Date().toISOString();
    pedido.totalPedido = this.totalPedido;
    pedido.imposto = this.imposto;
    pedido.frete = this.frete;
    pedido.itens = empacotarItens(this.lista);
    //console.log(pedido);

    try {
      const resposta = await servicos.checkout(pedido);
      console.log(resposta);
    } catch (erro) {
      console.log(erro);
    }
  }
}