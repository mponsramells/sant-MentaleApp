<script setup>

const items = [
  { type:"Blog", link:"/activities/blog/1", title: "L'Importance de l'Activité Physique", icon: "/blogIcon.png", author:'Par Nicolas Martin, Entraîneur personnel et coach en bien-être', content: "Cet article explore le lien entre l'activité physique et le bien-être mental, en mettant en avant les nombreux avantages d'une pratique régulière de l'exercice physique pour la santé mentale."},
  { type: "Vidéo",  link:"/activities/blog/4", title: "Se réveiller en douceur", icon: "/videoIcon.png", author:"Par Émilie Lambert, Monitrice De Yoga", content: "Cet ensemble d'exercices de stretching vise à détendre vos muscles et à stimuler votre énergie dès le matin. 10 à 15 minutes pour réveiller votre corps en douceur et préparer votre esprit pour une journée productive."},
]

</script>

<template>
  <div class="h-full overflow-x-hidden p-6">
    <h1 class="text-3xl font-bold text-brown mb-4">Bonjour Léa,</h1>
    <div class="relative -mx-6">
      <img src="/home-msg.png" alt="" class="mb-4 w-full">
    </div>
    <h2 class="text-2xl font-semibold my-4">Actions rapides :</h2>
    <Slider/>
    <h2 class="text-2xl font-semibold my-4">Ceci peut t'intéresser...</h2>
    <TextContainer v-for="item in items" :items="item"/>
  </div>
</template>

<style scoped>

</style>
