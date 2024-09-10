import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ["path", "url", "fs"], // Only include the 'path' polyfill
    }),
  ],
  optimizeDeps: {
    exclude: ["source-map-js"],
  },
});
