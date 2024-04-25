import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://upryzing.app",
  integrations: [icon({
    iconDir: "public/icons/"
  }), sitemap()],
  output: "server",
  adapter: vercel()
});