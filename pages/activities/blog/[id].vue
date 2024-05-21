<script setup>
const router = useRouter();
const blog = useState('blog');
const id = router.currentRoute.value.params.id;

const blogPost = computed(() => {
  return blog.value.find(item => item.id === Number(id));
});
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md max-w-sm">
    <img :src="blogPost.blogImg" :alt="blogPost.blogImg" class="w-full rounded-lg">
    <h3 class="text-xl font-bold my-3">{{ blogPost.title }}</h3>
    <div class="flex flex-col">
      <div class="flex justify-between items-center py-2 border-b border-gray-400 text-xs">
        <img :src="blogPost.thumbnail" :alt="blogPost.thumbnail" class="size-5 rounded-full">
        <p>{{ blogPost.author }}</p>
        <p>{{ blogPost.authorDesc }}</p>
      </div>
      <div class="text-xs flex text-gray-400">
        <p class="mr-6">{{ blogPost.date }}</p>
        <p> Lecture {{ blogPost.time }}</p>
      </div>
    </div>
    <div>
      <p>
        <br/><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dicta fuga fugit quos recusandae suscipit? Commodi doloribus eius eos facilis id, libero molestiae necessitatibus nemo perspiciatis possimus quae quas tenetur.</span><br/><span>Adipisci cum deleniti dicta dolorum, ducimus ea exercitationem facere, fuga illo, illum in ipsam iure nisi quam reiciendis saepe ut vitae voluptatem voluptates voluptatum. Animi autem porro praesentium repellendus voluptates?</span><br/><span>Aliquid at blanditiis ducimus, ea eaque, hic illo illum incidunt minima nihil nisi numquam odio perferendis perspiciatis provident quam quos, tempore voluptatum. Exercitationem hic ipsam nisi, pariatur quia quis veritatis.</span><br/><span>Adipisci alias amet asperiores aut autem commodi, fugiat laboriosam laborum natus pariatur porro sit sunt veniam? Ab accusamus, animi blanditiis, dignissimos dolore error expedita nam, necessitatibus quis quisquam tenetur vitae!</span><br/><span>Magnam nihil nostrum optio, quae temporibus veniam vero! Assumenda error ex incidunt labore laborum sint ut? Debitis dolores ducimus numquam odit quos? Alias consequatur libero minus quas quibusdam quo repellat.</span><br/><span>Aliquam aspernatur aut consectetur dolore dolores facilis fuga, inventore ipsam ipsum laborum laudantium, libero magnam magni maiores nemo optio pariatur quia quibusdam repellendus sapiente velit vitae, voluptatibus? Libero, repellendus veritatis!</span><br/><span>Ad asperiores assumenda blanditiis eligendi enim fuga fugiat harum incidunt maxime nemo, optio quibusdam quos repellendus saepe similique suscipit veniam vero. Dolorem dolores eaque maiores qui quod repellendus similique velit?</span><br/><span>Amet beatae commodi consectetur dicta dignissimos error esse illo ipsa laudantium maiores, nemo pariatur qui quod quos ratione sit totam! Ab commodi corporis ea eaque et illum molestias repellat voluptate?</span><br/><span>Adipisci, blanditiis iure officiis pariatur quae repellendus tempore velit? Amet aspernatur beatae, dolore ducimus earum eum ex exercitationem, impedit laborum nulla officia quae quia quis repellat repellendus rerum sed voluptates.</span><br/><span>Blanditiis illo rem similique sit vero vitae? Dolorem esse ipsa modi? Accusantium architecto dignissimos dolorem dolorum eligendi est ex expedita, illum incidunt itaque, iusto necessitatibus perferendis quas quidem rerum unde!</span>
      </p>
    </div>
  </div>
</template>


<style scoped>

</style>