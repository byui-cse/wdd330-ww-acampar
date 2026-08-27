import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",
  publicDir: "publico",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        carrinho: resolve(__dirname, "src/carrinho/index.html"),
        finalizar_compra: resolve(__dirname, "src/finalizar_compra/index.html"),
        produto: resolve(__dirname, "src/pagina_produtos/index.html"),
      },
    },
  },
});
