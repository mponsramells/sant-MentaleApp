<script setup>
const router = useRouter();
const fullPath = computed(() => router.currentRoute.value.fullPath);
let segments = fullPath.value.split('/');
let lastPage = ref(segments[segments.length - 2]);
let newPath = ref(segments.slice(0, -1).join('/'));

watch(fullPath, (newPathValue) => {
  segments = newPathValue.split('/');
  lastPage.value = segments[segments.length - 2];
  newPath.value = segments.slice(0, -1).join('/');
});
</script>

<template>
  <nav class="fixed top-0 w-full z-50 bg-white py-4 shadow-md flex flex-col">
      <div class="flex justify-end">
        <div class="container flex justify-between w-1/3">
          <nuxt-link to="/settings" class="text-2xl font-bold text-primary">
            <img src="/settings.png" alt="Settings">
          </nuxt-link>
          <nuxt-link to="/sos" class="text-2xl font-bold text-primary">
            <img src="/SOS.png" alt="SOS">
          </nuxt-link>
        </div>
      </div>
    <nuxt-link v-if="newPath" :to="newPath" class="capitalize text-xl flex self-start text-tertiary"><img src="/backArrow.svg" class="mx-4 self-center" alt="">{{ lastPage }}</nuxt-link>
    <div v-if="$route.path === '/activities'" class="mt-4 font-bold flex text-xl justify-center font-[mikser] w-full text-[#52B787]">
      Ressources et activités
    </div>
  </nav>
</template>


<style scoped>
</style>
