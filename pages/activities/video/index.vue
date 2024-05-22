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
  <div>
      <input type="text" v-model="searchQuery" placeholder="Recherche" class="p-2 bg-greenShadow rounded placeholder:text-[#41916C]">
    </div>
    <div>
      //tagList
    </div>
    <div>
      //video carousel
    </div>
    <div class="flex justify-between items-center mb-2 text-tertiary">
        <h2 class="text-sm font-semibold">Les plus populaires</h2>
        <nuxt-link to="/activities/video/all/populaires">Voir tous ></nuxt-link>
      </div>
      <div class="space-y-4">
        //video Card slider
      </div>
      <div class="flex justify-between items-center mb-2 text-tertiary">
        <h2 class="text-sm font-semibold ">Continuer à regarder</h2>
        <nuxt-link to="/activities/video/all/reprendre">Voir tous ></nuxt-link>
      </div>
      <div class="space-y-4">
        //video vignette list
      </div>
  </div>
</template>


<style scoped>

</style>