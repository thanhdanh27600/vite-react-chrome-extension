import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		cssCodeSplit: false,
		rollupOptions: {
			output: {
				entryFileNames: "js/popup.js",
				assetFileNames(chunkInfo) {
					if (/.{1,}css/i.test(chunkInfo.name)) return "css/popup.css";
				},
			},
		},
	},
});
