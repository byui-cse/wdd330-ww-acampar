import { carregarHeaderFooter } from "./uteis.mjs";
import { Processofinalizar_compra } from "./Processofinalizar_compra.mjs";

carregarHeaderFooter();

const order = new Processofinalizar_compra("so-carrinho", ".finalizar_compra-resumo");
order.init();

// Adiciona os ouvintes de evento para disparar calcularTotalPedido quando o usuário alterar o CEP
document
  .querySelector("#cep")
  .addEventListener("blur", order.calcularTotalPedido.bind(order));

// ouvindo o clique no botão
document.querySelector("#finalizar_compraEnviar").addEventListener("click", (e) => {
  e.preventDefault();

  order.finalizar_compra();
});