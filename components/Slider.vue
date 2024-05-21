<!-- Slider.vue -->
<script setup>
const items = [
  { title: 'Registre des émotions', img: '/emotion.png', bg: 'bg-tertiary-light'},
  { title: 'Journal de gratitude', img: '/gratitude.png', bg: 'bg-tertiary-light'},
  { title: 'Mon carnet secret', img: '/secret.png', bg: 'bg-tertiary-light'},
  { title: 'Ma routine bien-être', img: '/routine.png', bg: 'bg-tertiary-light'},
]
</script>

<template>
  <div class="flex overflow-x-auto snap-x snap-mandatory w-full">
    <Card v-for="item in items" :key="item.title" :items="item" class="flex-shrink-0 snap-center  w-3/5"/>
  </div>
</template>
<style scoped>

</style>
