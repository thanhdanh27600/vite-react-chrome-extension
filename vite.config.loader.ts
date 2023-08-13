import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		copyPublicDir: false,
		emptyOutDir: false,
		lib: {
			entry: resolve(__dirname, "src/ext/loader.ts"),
			name: "loader",
			fileName: "loader",
			formats: ["es"],
		},
		outDir: "dist/js",
	},
});
