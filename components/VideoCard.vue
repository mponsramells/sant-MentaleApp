<template>
  <nuxt-link :to="items.link">
    <div>
      <img src="" alt="like"><img src="" alt="follow">
    </div>
    <div>
      <h2>{{ items.title }}</h2>
    </div>
  </nuxt-link>
</template>

<script setup>
defineProps({
  items: Object
}
)
</script>

<style scoped>

</style>