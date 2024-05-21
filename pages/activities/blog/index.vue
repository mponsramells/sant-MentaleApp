<script setup>

const items = ref([]);
const blog = useState('blog');
items.value = blog.value;

const searchQuery = ref('');

const filteredItems = computed(() => {
  return items.value.filter(item => {
    return item.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
           item.author.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
           item.desc.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});
</script>


<template>
  <div class="bg-white px-4 pb-10">
    <div>
      <input type="text" v-model="searchQuery" placeholder="Recherche" class="p-2 bg-greenShadow rounded placeholder:text-[#41916C]">
    </div>
    <div>
      <BlogCard v-for="item in filteredItems" :key="item.id" :items="item"/>
    </div>
  </div>
</template>


<style scoped>

</style>