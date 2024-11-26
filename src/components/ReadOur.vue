<script setup>
import Button from './Button.vue';
</script>

<template>
 <div class="bg-readOur pt-24 pb-24 ">
    <div class="container">
      <div>
        <img src="/public/section/blueKvadrat.png" alt="">

        <h1 class="text-5xl mt-5 mb-10 ">Read our latest blogs & news</h1>

        <div class="flex gap-8">
          <div class="flex  bg-white ">
            <img src="/public/section/Image.png" alt="">
            <div class="p-10 gap-5">
              Jan 19,2021
              <h2 class="text-3xl pt-5 pb-8 "> Today’s best design trends for digital products</h2>

              <Button/>
            </div>
          </div>

          <div class="flex bg-white ">
            <img src="/public/section/Image.png" alt="">
            <div class="p-10 gap-5">
              Jan 19,2021
              <h2 class="text-3xl pt-5 pb-8 "> Today’s best design trends for digital products</h2>

                <Button/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped lang="scss">

</style>