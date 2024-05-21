<script setup>
defineProps({
  items: Object
})
</script>

<template>
  <div class="flex">
    <img :src="items.thumbnail" class="size-20" alt="thumbnail">
    <div class="flex flex-col justify-center align-middle ml-2">
      <p class="">{{ items.title }}</p>
      <div class="flex">
        <img src="/clock.png" alt="" class="size-4 self-center mr-2">
        <p class="text-gray-600">{{ items.duration }} minutes d'écoute</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>