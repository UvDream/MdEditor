import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// const path=require("path");
import vitePluginForArco from "@arco-plugins/vite-react";
import * as path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@":path.resolve(__dirname,"./src")
    }
  },
  plugins: [react(), vitePluginForArco({})],
});
