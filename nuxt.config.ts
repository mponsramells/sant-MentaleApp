// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "nuxt-chatgpt"],
  runtimeConfig: {
    public: {
    }
  },
  image: {
  },
  chatgpt: {
    apiKey: 'sk-proj-8YP4CNDObMALt9HlpEPoT3BlbkFJsJluyb8NgCQBuyPrBRa8'
  },
});