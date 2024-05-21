<script setup>
defineProps({
  items: Object,
})
</script>

<template>
    <div class="rounded-xl">
      <nuxt-link :to="items.link">
        <img :src="items.image" :alt="items.title" class="size-40 object-contain mb-2">
      </nuxt-link>
    </div>
</template>

<style scoped>

</style>
