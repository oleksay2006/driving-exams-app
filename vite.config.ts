import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          "@import \"@/styles/_variables.scss\"; @import \"@/styles/_mixins.scss\"; @import \"@/styles/_typography.scss\";"
      }
    }
  }
});
