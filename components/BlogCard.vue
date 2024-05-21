<script setup>
defineProps({
  items: Object
})

</script>

<template>
  <div class="bg-greenShadow p-4 shadow-md rounded-lg my-2">
    <h3 class="text-md font-bold mb-2">{{ items.title }}</h3>
    <div class="text-sm flex items-center space-x-4 mb-4 border-b-2 border-[#41916C]">
      <img :src="items.thumbnail" :alt="items.thumbnail" class="size-5 rounded-full">
        <p>{{ items.author }}</p>
        <p class="text-[#41916C] font-semibold">{{ items.date }}</p>
        <p class="text-[#41916C] font-semibold">Lecture {{ items.time }}</p>
    </div>
    <p class="text-gray-700 mb-4">{{ items.desc }}</p>
    <div class="w-full flex justify-center text-center">
      <nuxt-link :to="items.link" class="bg-[#41916C] w-full text-white px-4 py-2 rounded hover:bg-green-600">Lire la suite</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
</style>
