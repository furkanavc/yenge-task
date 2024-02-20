// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  nitro: {
    routeRules: {
      "/cats": {
        proxy: `${process.env.CATS_API_KEY}`,
        headers: {
          "x-api-key": `${process.env.CATS_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    },
    devProxy: {
      "/cats": {
        target: "https://api.thecatapi.com/v1/images/search",
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
