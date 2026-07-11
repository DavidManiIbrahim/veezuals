// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  nitro: true,
  vite: {
    server: {
      allowedHosts: ["veezuals.onrender.com"],
    },
    build: {
      rollupOptions: {
        external: ["@tanstack/query-core"],
      },
    },
    plugins: [
      viteImagemin({
        gifsicle: { optimizationLevel: 7 },
        optipng: { optimizationLevel: 7 },
        mozjpeg: { quality: 70 },
        pngquant: { quality: [0.65, 0.8], speed: 4 },
        svgo: {
          plugins: [{ name: "removeViewBox" }, { name: "removeEmptyAttrs", active: false }],
        },
      }),
    ],
  },
});
