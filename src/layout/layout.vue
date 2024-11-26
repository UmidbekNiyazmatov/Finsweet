<script setup>
import { RouterView } from "vue-router";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
</script>
<template>
  <div>
    <!-- <Navbar />
    <main>
      <router-view />
    </main>
    <Footer /> -->

    <Navbar />
    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
