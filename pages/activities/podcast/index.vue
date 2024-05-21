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
    <!-- Section Bienvenue -->
    <div class="text-start ">
      <h1 class="text-3xl font-[mikser] font-semibold text-primary">Bienvenue !</h1>
      <p class="text-sm text-gray-600">Trouve les meilleurs podcasts pour toi</p>
    </div>
    <!-- Section Bannière Principale -->
    <div class="h-44 rounded-xl my-4 bg-cover bg-center flex items-end justify-center p-1" style="background-image: url('/podacastBackground.png');">
      <div class="flex justify-between align-middle py-4 px-6 bg-blackShadow rounded-3xl w-full">
        <div class="flex flex-col justify-start align-middle w-full">
          <p class="text-white">Cultiver l'Amour de Soi</p>
          <div class="flex">
            <img src="/clock.png" alt="" class="size-4 self-center  mr-2">
            <p class="text-whiteShadow">15 minutes d'écoute</p>
          </div>
        </div>
        <div class="flex flex-col justify-center align-middle">
          <img src="/playButton.png" alt="">
        </div>
      </div>
    </div>

    <div>
      <div class="flex justify-between items-center mb-2">
        <h2 class="text-sm font-semibold text-gray-800">Ajouté récemment</h2>
        <nuxt-link to="/activities/podcast/all/podcast">Voir tous</nuxt-link>
      </div>
      <div class="space-y-4">
        <PodcastVignette v-for="item in newItems" :key="item.title" :items="item" />
      </div>
    </div>

    <div class="mt-6">
      <div class="flex justify-between items-center m-4">
        <h2 class="text-sm font-semibold text-gray-800">Chaînes populaires</h2>
        <nuxt-link to="/activities/podcast/all/channel">Voir tous</nuxt-link>
      </div>
      <div class="grid grid-cols-2 ml-4">
        <LinkCard v-for="item in items" :key="item.link" :items="item"/>
      </div>
    </div>
  </div>
</template>


<style scoped>

</style>