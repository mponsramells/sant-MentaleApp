<script setup>

const items = [
  {day: 'Lundi', icon: 'nice.png'},
  {day: 'Mardi', icon: 'nice.png'},
  {day: 'Mercredi', icon: 'nice.png'},
  {day: 'Jeudi', icon: 'nice.png'},
  {day: 'Vendredi', icon: 'nice.png'},
  {day: 'Samedi', icon: 'nice.png'},
  {day: 'Dimanche', icon: 'nice.png'}
]

</script>

<template>
  <div class="h-full overflow-x-hidden p-6">
    <h1 class="text-3xl font-bold text-brown mb-4">Fête  tous tes progrès, Léa</h1>
    <div>
      <h3>Ta semaine en un coup d'oeil:</h3>
      <div class="flex flex-wrap gap-4">
        <WeeklyItem v-for="item in items" :item="item" :key="item.day"/>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>