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
    <div class="flex justify-between items-center m-4">
      <h2 class="text-sm font-semibold text-gray-800 capitalize">{{ modelName }}</h2>
    </div>
    <div>
      //all video card
    </div>
  </div>
</template>

<style scoped>

</style>