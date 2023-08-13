import typescript from "@rollup/plugin-typescript";

export default {
	input: "src/ext/loader.ts", // Input TypeScript file
	output: {
		file: "dist/js/loader.js", // Output JavaScript file
		format: "cjs", // CommonJS module format
	},
	plugins: [typescript()],
};
