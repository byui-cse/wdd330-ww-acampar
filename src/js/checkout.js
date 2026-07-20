import { carregarHeaderFooter } from "./uteis.mjs";
import { ProcessoCheckout } from "./ProcessoCheckout.mjs";

carregarHeaderFooter();

const order = new ProcessoCheckout("so-carrinho", ".checkout-resumo");
order.init();

// Adiciona os ouvintes de evento para disparar calcularTotalPedido quando o usuário alterar o CEP
document
  .querySelector("#cep")
  .addEventListener("blur", order.calcularTotalPedido.bind(order));

// ouvindo o clique no botão
document.querySelector("#checkoutEnviar").addEventListener("click", (e) => {
  e.preventDefault();

  order.checkout();
});