<script setup>
defineProps({
  items: Object,
})
</script>

<template>
    <div :class="items.bg" class=" flex flex-col justify-between items-center text-center m-2 p-4 rounded-xl">
      <img :src="items.img" alt="" class="h-24 w-24 object-contain mb-2">
      <nuxt-link :to="items.link">
        <h3 class="text-base font-semibold">{{ items.title }}</h3>
      </nuxt-link>
    </div>
</template>

<style scoped>

</style>
