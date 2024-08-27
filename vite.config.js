import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  base: "/slowscube/",
  plugins: [react()],
  worker: {
    format: "es",
  },
});
