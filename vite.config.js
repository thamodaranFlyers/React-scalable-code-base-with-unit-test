// import { defineConfig, configDefaults } from "vite";
import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
  resolve: {
    alise: {
      components: "./src/components",
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/setup.js",
    exclude: [...configDefaults.exclude, "**/test/**", "**/node_modules/**"],
    coverage: {
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./tests/coverage",
      // exclude: [
      //   ...configDefaults.exclude,
      //   "./src/config",
      //   "../**/Main.jsx",
      //   "../",
      // ],
    },
  },
});
