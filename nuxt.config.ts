// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  nitro: {
    routeRules: {
      "/cats": {
        proxy: `${process.env.CATS_URL}`,
        headers: {
          "x-api-key": `${process.env.CATS_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
      "/login": { ssr: false },
      "/": { ssr: false },
    },
    devProxy: {
      "/cats": {
        target: `${process.env.CATS_URL}`,
        changeOrigin: true,
        headers: {
          "x-api-key": `${process.env.CATS_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
