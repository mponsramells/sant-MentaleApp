<script setup>
const menuItems = [
  { name: 'Accueil', icon: '/home.png', activeIcon:'/home-active.png', link: '/' },
  { name: 'Chat', icon: '/chat.png', activeIcon:'/chat-active.png', link: '/chat' },
  { name: 'Activités', icon: '/activities.png', activeIcon:'/activities-active.png', link: '/activities' },
  { name: 'Dashboard', icon: '/dashboard.png', activeIcon:'/dashboard-active.png', link: '/dashboard' }
]
</script>

<template>
  <footer class="fixed bottom-0 w-full z-50 bg-white py-4 border-t flex justify-around">
    <ul class="flex w-full justify-around">
      <li v-for="{ link, icon, activeIcon, name } in menuItems" :key="name" class="text-center">
        <nuxt-link :to="link" class="flex flex-col items-center text-gray-600 hover:text-tertiary">
          <img :src="$route.path === link ? activeIcon : icon" alt="icon" class="w-6 h-6 mb-1" />
          <p>{{ name }}</p>
        </nuxt-link>
      </li>
    </ul>
  </footer>
</template>


<style scoped>
</style>
