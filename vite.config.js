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
        checkout: resolve(__dirname, "src/checkout/index.html"),
        produto: resolve(__dirname, "src/pagina_produtos/index.html"),
      },
    },
  },
});
