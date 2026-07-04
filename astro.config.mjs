// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = env.PUBLIC_SANITY_DATASET || "production";
const apiVersion = env.SANITY_API_VERSION || "2026-07-02";

//if (!projectId) {
//  throw new Error("Falta PUBLIC_SANITY_PROJECT_ID en el archivo .env");
//}

export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react(),
  ],
});
