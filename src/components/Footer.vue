<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue';
import Button from './Button.vue';


const isOpenModal = ref(false)

const openModal = () => {
  isOpenModal.value = true;
};

const closeModal = () => {
  isOpenModal.value = false
}


</script>

<template>
<div class="container ">

<img src="/public/section/Shapes (3).png" alt="">
<div class=" flex pt-10 pb-5">
  <div class="w-3/6 ">
    <h1 class="text-6xl w-4/5 ">
      Let's make
      something special
    </h1>

    <div class="pt-8 pb-8 text-xl "> <b> Let's talk! 🤙 </b></div>

    <p>
      020 7993 2905 <br>
      hi@finsweet.com
    </p>
  </div>

  <div class="flex gap-24 p-5">
    <div>
      <b>Navigation</b>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/service">Service</router-link></li>
        <li><router-link to="/company">Company</router-link></li>
        <li><router-link to="/career">Career</router-link></li>
        <li>News</li>
      </ul>
    </div>

    <div>
      <b>Service</b>
      <ul>
        <li>Technical support</li>
        <li>Testing</li>
        <li>Development</li>
        <li>AWS/Azure</li>
        <li>Consulting</li>
        <li>Information Technology</li>
      </ul>
    </div>

    <div>
      <b>Resources</b>
      <ul>
        <li>About Us</li>
        <li>Testimonial</li>
        <li>Privacy Policy</li>
        <li>Terms of Use</li>
        <li>Blog</li>
      </ul>
    </div>
  </div>

</div>

<div class="flex  items-center  pb-20 ">
  <p class="w-1/4 pt-5 border-2 border-white border-t-neutral-300  ">
    DLF Cybercity, Bhubaneswar, <br>
    India, &52050
  </p>

  <button class="flex justify-end  items-center w-full pt-5 gap-3  " @click="openModal">
    <span>
      <img src="/public/section/Shapes Contact.png" alt="" class=" ">
    </span>
    Contact Us
    <span>
      <img src="/public/section/arrow2.png" alt="">
    </span>
  </button>
</div>



</div>
<div class="bg-ourServices" >
<div class="container" > 
  <div class="flex items-center pt-8 pb-8 ">
    <div class="flex w-3/6 gap-16" >
    <img src="/public/section/Logo (1).svg" alt="">

    <span>©2021 Finsweet </span>
  </div>
    <div class="flex justify-end gap-8 w-full " >
      <img src="/public/footer/Vector.png" alt="">
      <img src="/public/footer/Negative.png" alt="">
      <img src="/public/section/Group.png" alt="">
      <img src="/public/footer/Group.png" alt="">
    </div>
  </div>
</div>
</div>

<Modal :isOpen="isOpenModal" @close="closeModal" > 
  <div class=" px-40 py-20 w-full">
           
            <h1 class="text-5xl pt-5 pb-8 ">
                Have a Question ? <br>
                Let’s Get in Touch with us 👋
            </h1>
            <p>
                Fill up the Form and ou team will get back to within 24 hrs
            </p>
            <div class=" flex-col pt-10 pb-10  ">
                <div class="pt-5">
                    <div>Name</div>
                    <input type="text" class=" w-full pb-1 border-2 border-white border-b-neutral-300"
                        placeholder="Paresh Srichandan">
                </div>
                <div class="pt-5">
                    <div>E-mail</div>
                    <input type="text" class=" w-full  pb-1 border-2 border-white  border-b-neutral-300"
                        placeholder="Paresh@pixeto.com">
                </div>
                <div class="pt-5">
                    <div>Subject</div>
                    <input type="text" class=" w-full  pb-1 border-2 border-white  border-b-neutral-300"
                        placeholder="For web design work Enquire ">
                </div>
                <div class="pt-5">
                    <div>Messege</div>
                    <input type="text" class=" w-full  pb-1 border-2 border-white  border-b-neutral-300"
                        placeholder="Type your Messege">
                </div>
            </div>
            <button class="flex  bg-blue-600 mt-10  ">
                <span><img src="/public/section/Shapes (3).png" alt=""></span>
                <div class="flex items-center gap-3 text-white  pt-5 pb-5 pr-5 "> Request A Quote
                    <span><img src="/public/services/right.png" alt="" class=""></span>
                </div>
            </button>
        </div>
</Modal>

</template>

<style scoped lang="scss">

</style>
