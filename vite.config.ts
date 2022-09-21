import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  // prevent vite from obscuring rust errors
  clearScreen: false,
  // Tauri expects a fixed port, fail if that port is not available
  server: {
    strictPort: true,
    // host: "0.0.0.0",
  },
  // to make use of `TAURI_PLATFORM`, `TAURI_ARCH`, `TAURI_FAMILY`,
  // `TAURI_PLATFORM_VERSION`, `TAURI_PLATFORM_TYPE` and `TAURI_DEBUG`
  // env variables
  envPrefix: ["VITE_", "TAURI_"],
  build: {
    // Tauri supports es2021
    target: ["es2021", "chrome100", "safari13"],
    // don't minify for debug builds
    minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
    // produce sourcemaps for debug builds
    sourcemap: !!process.env.TAURI_DEBUG,
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
