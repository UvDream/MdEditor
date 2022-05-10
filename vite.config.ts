import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginForArco from "@arco-plugins/vite-react";
import * as path from "path";
export default defineConfig({
  base: "/",
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src")
    }
  },
  plugins: [react(), vitePluginForArco({})],
});
