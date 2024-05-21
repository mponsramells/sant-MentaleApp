<script setup>

const items = ref([]);
const activities = useState('activities');
items.value = activities.value;
</script>

<template>
  <div class="grid grid-cols-2 my-5">
    <Card v-for="item in items" :key="item.title" :items="item" class="text-blue"/>
  </div>
</template>

<style scoped>

</style>