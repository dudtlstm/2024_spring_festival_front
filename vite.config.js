import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     minify: true,
//     terserOptions: {
//       compress: {
//         drop_console: true,
//         drop_debugger: true,
//       },
//     },
//   },
// });
