import { defineConfig, envField } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://astronaut.github.io',
  base: 'my-repo',
});
