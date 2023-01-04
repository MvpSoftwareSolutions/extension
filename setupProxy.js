
import vue from "@vitejs/plugin-vue"
import { defineConfig } from "vite"
export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://198.251.68.245:2020/˝",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    plugins: [vue()],
})