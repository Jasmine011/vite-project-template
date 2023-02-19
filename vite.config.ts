import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名
  },
  server: {
    proxy: {
      "/api": {
        target: "http://192.168.50.178:9010",
        ws: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
