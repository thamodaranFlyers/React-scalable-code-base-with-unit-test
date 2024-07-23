// import { defineConfig, configDefaults } from "vite";
import { configDefaults, defineConfig } from "vitest/config";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "ordersMFE",
      filename: "./remoteEntry.js",
      exposes: {
        "./Table": "./src/components/Table.jsx",
      },
      shared: ["react", "react-dom", "react-router-dom"],
    }),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.js", "./src/**/*.jsx"],
      exclude: [],
    }),
  ],
  build: {
    target: "es2022",
  },
  esbuild: {
    target: "es2022",
  },
  optimizeDeps: {
    esbuildOptions: {
      target: "es2022",
    },
  },
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
    },
  },
});
