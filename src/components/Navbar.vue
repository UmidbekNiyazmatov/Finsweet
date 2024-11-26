<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar__box">
        <div class="logo">
          <img src="/public/navbar/Logo.svg" alt="log" />
        </div>
        <ul class="menu">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/service">Service</router-link></li>
          <li><router-link to="/company">Company</router-link></li>
          <li><router-link to="/career">Career</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/contact">Contact us</router-link></li>

          <button class="nav-btn" @click="openModal" >
            Clone project
            <img src="/public/navbar/arrow.svg" alt="arrow" />
          </button>
        </ul>
      </div>
    </div>

    <Modal :isOpen="isOpenModal" @close="closeModal" > 
      <h2>hI</h2>
    </Modal>

  </nav>
</template>

<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';


const isOpenModal = ref(false)

const openModal = () => {
  isOpenModal.value = true;
};

const closeModal = () => {
  isOpenModal.value = false
}


</script>

<style scoped lang="scss">
.navbar {
  background-color: #232536;

  .navbar__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  .menu {
    display: flex;
    gap: 32px;

    a,
    .router-link-active {
      color: #ffffffae;
      transition: all 0.5s ease;

      &:hover {
        color: #ffff;
      }
    }

    .nav-btn {
      display: flex;
      align-items: center;
      background: transparent;
      border: none;
      color: #ffd3af;
      gap: 8px;
      cursor: pointer;
      transition: all 0.5s ease;

      &:hover {
        color: #e49350;
      }
    }
  }
}
</style>
