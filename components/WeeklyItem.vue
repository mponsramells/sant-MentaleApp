<script setup>
defineProps(
  {
    item: Object
  }
)
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="rounded-full bg-secondary p-1 flex flex-col items-center justify-center">
      <img :src="item.icon" :alt="'Icon for ' + item.day" class="h-6 w-6">
    </div>
    <p class="text-xs text-secondary">{{ item.day }}</p>
  </div>
</template>

<style scoped>

</style>