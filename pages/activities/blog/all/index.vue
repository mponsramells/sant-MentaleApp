<script setup>
const items = [
  {image: '/podcastThumbnail3.png', title: 'SELF', link: '/activities/podcast/1'},
  {image: '/podcastThumbnail4.png', title: 'THE ANXIOUS', link: '/activities/podcast/2'},
  {image: '/podcastThumbnail5.png', title: 'Channel Name', link: '/activities/podcast/3'},
  {image: '/podcastThumbnail6.png', title: 'Channel Name', link: '/activities/podcast/4'},
]
</script>

<template>
  <div class="mt-6">
    <div class="flex justify-between items-center m-4">
      <h2 class="text-sm font-semibold text-gray-800 capitalize">Tous les Podcast</h2>
    </div>
    <div class="grid grid-cols-2 ml-4">
      <LinkCard v-for="item in items" :key="item.link" :items="item"/>
    </div>
  </div>
</template>

<style scoped>

</style>