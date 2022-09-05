import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
  },
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      devOptions: {
        enabled: true,
      },
      base: "/",
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["/icon.png"],
      strategies: "injectManifest",
      manifest: {
        name: "Test Project",
        short_name: "Test",
        description: "Game",
        theme_color: "#ffffff",
        start_url: "/game/server",
        display: "standalone",
        background_color: "#ffffff",
        orientation: "landscape",
        icons: [
          {
            src: "logo.png",
            sizes: "300x300",
            type: "image/png",
          },
          // {
          //   src: "/logo.png",
          //   sizes: "512x512",
          //   type: "image/png",
          // },
          // {
          //   src: "logo.png",
          //   sizes: "512x512",
          //   type: "image/png",
          //   purpose: "any maskable",
          // },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
