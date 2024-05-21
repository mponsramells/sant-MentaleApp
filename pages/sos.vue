<script setup>

</script>
<template>
  <div class="p-4 mb-10">
    <h1 class="text-2xl text-center text-primary">Es-tu en crise ?</h1>

    <p class="my-6 text-sm">
      Respire profondément et <span class="font-bold">contacte ton psychologue ou ton médecin.</span> Si tu n'arrives pas à parler à ta famille ou à tes amis, tu peux appeler l'une des lignes d'assistance téléphonique de ta région :
    </p>

    <div class="bg-[#FFE1E1] rounded-2xl  flex flex-col">
      <div class="flex justify-start p-4">
        <img  class="px-2" src="/phoneIcon.png" alt="">
        <a class="self-end underline" href="https://www.sos-amitie.com">S.O.S amitié France</a>
      </div>
      <div class="flex justify-start p-4">
        <img class="px-2" src="/phoneIcon.png" alt="">
        <a class="self-end underline" href="https://www.filsantejeunes.com">Fil santé jeunes</a>
      </div>
      <div class="flex justify-start p-4">
        <img class="px-2" src="/phoneIcon.png" alt="">
        <a class="self-end underline" href="https://www.nightline.fr/services-decoute">Nightline France</a>
      </div>
      <div class="flex justify-start p-4">
        <img class="px-2" src="/infoIcon.png" alt="">
        <a class="self-end underline" href="https://www.santepsyjeunes.fr">Santé mentale des jeunes</a>
      </div>
    </div>

    <p class="my-6 text-sm">
      Si tu as besoin du soutien d'un <span class="font-bold">professionnel</span>, tu peux prendre contact avec un de ta région :
    </p>

    <div class="p-4 rounded-lg flex ">
      <img src="/sosPro.png" alt="Dr. Camille Moreau, Psychologue" class="h-36 w-36 rounded-full mr-4 self-center">
      <div class="flex flex-col">
        <div class="flex flex-col justify-start">
          <h2 class="font-semibold text-sm text-primary">Dr. Camille Moreau, Psychologue</h2>
          <p class="text-sm text-primary">74000, Annecy, France</p>
        </div>
        <div class="flex flex-col">
          <div class="p-2 px-4 bg-[#FFB3C6] text-white rounded-2xl w-fit my-3">
            ★ 4.4/5
          </div>
          <div class="p-2 px-4 bg-[#FFE1E1] text-primary rounded-2xl">
            <p class="text-sm">
              Débloquer ce contact et d'autres avec <span class="font-bold">premium</span>
            </p>
          </div>
        </div>
      </div>

    </div>

    <div class="flex flex-col mt-6">
      <button class="py-3 px-6 mb-2 rounded-full bg-primary text-white self-center w-fit">
        Exercice de respiration
      </button>
      <nuxt-link to="/chat" class="underline text-primary self-center">
        Parler avec Iki
      </nuxt-link>
    </div>
  </div>
</template>


<style scoped>

</style>