<template>
<div>
  <div>
    <img :src="items.img" alt="">
    <div>
      <p>{{ items.timer }}</p>
      <progress :value="items.timer" :max="items.timerMax"></progress>
    </div>
  </div>
  <nuxt-link :to="items.link">
    <h2>{{ items.title }}</h2>
    <p>{{ items.author }}</p>
  </nuxt-link>
  <div>
    //settings button
  </div>
</div>
</template>

<script setup>
defineProps({
  items: Object
}
)
</script>

<style scoped>

</style>