<script setup>
const items = ref([]);
const newItems = ref([]);
const podcastChannel = useState('podcastChannel');
const podcast = useState('podcast');
items.value = podcastChannel.value;
newItems.value = podcast.value;
</script>

<template>
  <div class="bg-white px-4 pb-10">

  </div>
</template>


<style scoped>

</style>