import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    rollupOptions: {
      external: ['src/context/cartContext'],
    },
  },
  plugins: [react()],
  base:"/GiottoFoodHost/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
