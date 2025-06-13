import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import staticAdapter from "@astrojs/vercel/static";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  output: "server",
  adapter: staticAdapter(),
});
