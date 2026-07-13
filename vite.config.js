import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        carrinho: resolve(__dirname, "src/carrinho/index.html"),
        checkout: resolve(__dirname, "src/checkout/index.html"),
        produto1: resolve(
          __dirname,
          "src/paginas_produto/cedar-ridge-rimrock-2.html",
        ),
        produto2: resolve(__dirname, "src/paginas_produto/marmot-ajax-3.html"),
        produto3: resolve(
          __dirname,
          "src/paginas_produto/northface-alpine-3.html",
        ),
        produto4: resolve(
          __dirname,
          "src/paginas_produto/northface-talus-4.html",
        ),
      },
    },
  },
});
