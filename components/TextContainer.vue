<script setup>
defineProps(
    {
      items: Object
    }
)
</script>

<template>
  <div class="bg-gradient-to-r from-[#BDE0FEA6] to-[#D8F3DCAA] rounded-2xl mb-4 w-[90%] p-4">
    <div class="flex items-center space-x-2">
      <img :src="items.icon" alt="" class="rotate-0">
      <h4 class="text-sm font-semibold">{{ items.type }}</h4>
    </div>
    <nuxt-link :to="items.link" class="text-md font-bold">{{ items.title }}</nuxt-link>
    <p class="text-xs">
      <span class="font-semibold text-xs">{{ items.author}}</span>
      {{ items.content }}
    </p>
  </div>
</template>

<style scoped>
</style>
