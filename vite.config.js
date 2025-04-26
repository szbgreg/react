import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/react",
  build: {
    rollupOptions: {
      input: {
        main: "react.html",
      },
    },
  },
});
