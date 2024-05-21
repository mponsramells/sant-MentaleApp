<script setup>
const router = useRouter();
const podcastChannel = useState('podcastChannel');
const podcast = useState('podcast');
const itemsData = {
  'podcast': podcast.value,
  'channel': podcastChannel.value
}
const modelName = ref('podcast');
const items = computed(() => itemsData[modelName.value] || []);
const searchQuery = ref('');

const filteredItems = computed(() => {
  return items.value.filter(item => {
    return item.title.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

</script>

<template>
  <div class="mt-6 mx-2">
    <div class="my-2">
      <input type="text" v-model="searchQuery" placeholder="Recherche" class="p-2 bg-greenShadow rounded placeholder:text-[#41916C]">
    </div>
    <div class="flex justify-around">
      <button @click="modelName =  'podcast'">Podcast</button>
      <button @click="modelName =  'channel'">Channel</button>
    </div>
    <div class="flex justify-between items-center m-4">
      <h2 class="text-sm font-semibold text-gray-800 capitalize">{{ modelName }}</h2>
    </div>
    <div v-if="modelName === 'channel'" class="grid grid-cols-2 ml-4">
      <LinkCard v-for="item in filteredItems" :key="item.link" :items="item"/>
    </div>
    <div v-else class="flex flex-col">
      <PodcastVignette v-for="item in filteredItems" :key="item.title" :items="item" class="ml-10 my-2" />
    </div>
  </div>
</template>

<style scoped>

</style>