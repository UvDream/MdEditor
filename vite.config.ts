import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import vitePluginForArco from "@arco-plugins/vite-react";
import * as path from "path";

export default defineConfig({
    base: "/",
    clearScreen: false,
    server: {
        port: 3000,
        strictPort: true,
    },
    envPrefix: ["VITE_", "TAURI_"],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    build: {
        // Tauri supports es2021
        target: ["es2021", "chrome97", "safari13"],
        // don't minify for debug builds
        minify: !process.env.TAURI_DEBUG ? "esbuild" : false,
        // produce sourcemaps for debug builds
        sourcemap: !!process.env.TAURI_DEBUG,
    },
    plugins: [react(), vitePluginForArco({})],
});
