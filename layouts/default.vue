<script setup>
useState('blog', () =>  [
  {id: 1, link:'/activities/blog/1', blogImg:"/blogImg2.png", thumbnail: '/pp1.png', title: 'L\'importance de l\'activité physique pour le bien être', author: 'Nicolas Martin', authorDesc:'Entraîneur personnel et coach en bien-être', date: 'Mai 29, 2024', time: '5 min', desc: 'Cet article explore le lien entre activité physique et le bien-être mental, en mettant en avant les nombreux avantages d\'une pratique régulière de l\'exercice physique pour la santé mentale.',},
  {id: 2, link:'/activities/blog/2', blogImg:"/blogImg1.png", thumbnail: '/pp2.png', title: 'Les bienfaits du self-love : Comment cultiver l\'amour de soi au quotidien', author: 'Dr. Léa Moreau', authorDesc:'Entraîneur personnel et coach en bien-être', date: 'Jan 20, 2024', time: '7 min', desc: 'Cet article explore les multiples avantages de pratiquer l\'amour de soi et propose des conseils pratiques pour intégrer cette pratique dans votre vie quotidienne.',},
  {id: 3, link:'/activities/blog/3', blogImg:"/blogImg1.png", thumbnail: '/pp3.png', title: '10 Astuces pour Mieux Gérer son Stress au Travail', author: 'Thomas Lambert', authorDesc:'Entraîneur personnel et coach en bien-être', date: 'Déc 20, 2023', time: '9 min', desc: 'Dans cet article, le coach en gestion du stress, Thomas Lambert, partage des stratégies efficaces pour faire face au stress professionnel et maintenir un équilibre émotionnel tout au long de la journée de travail.',},
]);
useState('activities', () => [
  { title: 'Podcast', img: '/podcastIcon.png', bg: 'bg-gradient-to-b from-[#BDE0FEA6] to-[#D8F3DCAA]', link:"/activities/podcast"},
  { title: 'Blog', img: '/blog.png', bg: 'bg-gradient-to-b from-[#BDE0FEA6] to-[#D8F3DCAA]', link:"/activities/blog"},
  { title: 'Vidéos', img: '/videoIconActivities.png', bg: 'bg-gradient-to-b from-[#BDE0FEA6] to-[#D8F3DCAA]', link:"/activities/podcast"},
]);
useState('podcast', () => [
  { title: 'Gérer l\'anxiété au quotidien', duration: '35', thumbnail: '/podcastThumbnail2.png', image: '/podcastThumbnail2.png', link: '/activities/podcast/1', creationDate: '02/02/23', channel: 'SELF' },
  { title: 'Deuil et reconstruction', duration: '25', thumbnail: '/podcastThumbnail1.png', image: '/podcastThumbnail1.png', link: '/activities/podcast/2', creationDate: '02/02/23', channel: 'SELF' },
]);
useState('podcastChannel', () => [
  { title: 'SELF', thumbnail: '/podcastThumbnail3.png', image: '/podcastThumbnail3.png', link: '/activities/podcast/1', streamCount: 5 },
  { title: 'THE ANXIOUS', thumbnail: '/podcastThumbnail4.png', image: '/podcastThumbnail4.png', link: '/activities/podcast/2', streamCount: 2 },
  { title: 'Parlez fort', thumbnail: '/podcastThumbnail5.png', image: '/podcastThumbnail5.png', link: '/activities/podcast/3', streamCount: 3 },
  { title: 'Are You Ok', thumbnail: '/podcastThumbnail6.png', image: '/podcastThumbnail6.png', link: '/activities/podcast/4', streamCount: 1 },
]);
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <Navbar />
    <main class="flex-grow pt-28 pb-16">
      <slot />
    </main>
    <Footer />
  </div>
</template>


<style scoped>
</style>
