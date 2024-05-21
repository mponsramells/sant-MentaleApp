<script setup>
const router = useRouter();
const podcastChannel = useState('podcastChannel');
const podcast = useState('podcast');
const itemsData = {
  'podcast': podcast.value,
  'channel': podcastChannel.value
}
const modelName = computed(() => router.currentRoute.value.params.model);
const items = computed(() => itemsData[modelName.value] || []);
</script>

<template>
  <div class="mt-6">
    <div class="flex justify-between items-center m-4">
      <h2 class="text-sm font-semibold text-gray-800 capitalize">{{ modelName }}</h2>
    </div>
    <div v-if="modelName === 'channel'" class="grid grid-cols-2 ml-4">
      <LinkCard v-for="item in items" :key="item.link" :items="item"/>
    </div>
    <div v-else class="flex flex-col">
      <PodcastVignette v-for="item in items" :key="item.title" :items="item" class="ml-10 my-2" />
    </div>
  </div>
</template>

<style scoped>

</style>