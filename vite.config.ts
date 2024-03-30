import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const envFile =
    mode === "development" ? ".env.development" : ".env.production";
  dotenv.config({ path: envFile });
  return {
    plugins: [react()],
    build: {
      outDir: "build",
      assetsDir: "assets",
      emptyOutDir: true,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
