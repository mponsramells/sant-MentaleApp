<script setup lang="ts">
const { chat } = useChatgpt()

const data = ref('')
const inputData = ref('')

async function sendMessage() {
  try {
    const response = await chat(inputData.value)
    data.value = response
  } catch(error) {
    alert(`Join the waiting list if you want to use GPT-4 models: ${error}`)
  }
}
</script>

<template>
  <div class="mt-11">
    fonctionnalité a venir
  </div>
</template>


<style scoped>

</style>