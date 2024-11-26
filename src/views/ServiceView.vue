<script setup>
import OurProcess from '@/components/OurProcess.vue';
import ServiceSlots from '@/components/ServiceSlots.vue';
import NEWSLETTER from '@/components/NEWSLETTER.vue';
import Button from '@/components/Button.vue';
</script>

<template>

<div class=" bg-ourServices " >
  <div class="container flex pt-24 pb-24 ">

    <div class="w-3/6  " >
      <div>OUR SERVICES</div>
      <h1 class="text-5xl pr-10  pt-5 pb-5 " > We Build Software Solutionthat Solve Clients Business Challenges </h1>
      <p class="pr-28" >
        Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.      </p>

      <button class="flex  bg-blue-600 mt-10  " >
        <span><img src="/public/section/Shapes (3).png" alt=""></span>
        <div class="flex items-center gap-3 text-white  pt-5 pb-5 pr-5 " > Request A Quote 
        <span><img src="/public/services/right.png" alt="" class=""  ></span>
      </div>
      </button>

    </div>
    <div class=" flex justify-center items-center w-3/6 " >
    <div class="" >
      <div class="pt-5 pb-5 " >Technical support</div>
      <Button title="Development" />    
      <div class="pt-5">AWS/Azure </div>    
      <div class="pt-5">Consulting</div>    
      <div class="pt-5">Information Technology</div>    

    </div>
    </div>
  </div>
</div>

<OurProcess/>


<div class="container" >
        <ServiceSlots
            title="Technical Support"
            h1="Best in class tech support for your company. We become your tech backbone "
            text="Through True Rich Attended does no end it his mother
             since real had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded. 
            Through True Rich Attended does no end it his mother since real had half every."
            
            class= " flex item-center">  
            <template  #right  >
              <div class="flex justify-end w-full " >
              <img src="/public/services/Feature 1 Image.png" alt="" >
            </div>
            </template>
        </ServiceSlots>
</div>

<div class="container" >
        <ServiceSlots
            title="Technical Support"
            h1="Best in class tech support for your company. We become your tech backbone "
            text="Through True Rich Attended does no end it his mother
             since real had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded. 
            Through True Rich Attended does no end it his mother since real had half every."
            
            class= " flex item-center">  
            <template  #left  >
              <div class="flex justify-start w-full " >
              <img src="/public/services/Feature (2).png" alt="" >
            </div>
            </template>
        </ServiceSlots>
</div>

<div class="container" >
        <ServiceSlots
            title="Technical Support"
            h1="Best in class tech support for your company. We become your tech backbone "
            text="Through True Rich Attended does no end it his mother
             since real had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded. 
            Through True Rich Attended does no end it his mother since real had half every."
            
            class= " flex item-center">  
            <template  #right  >
              <div class="flex justify-end w-full " >
              <img src="/public/services/Feature (3).png" alt="" >
            </div>
            </template>
        </ServiceSlots>
</div>

<div class="container" >
        <ServiceSlots
            title="Technical Support"
            h1="Best in class tech support for your company. We become your tech backbone "
            text="Through True Rich Attended does no end it his mother
             since real had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded. 
            Through True Rich Attended does no end it his mother since real had half every."
            
            class= " flex item-center">  
            <template  #left  >
              <div class="flex justify-start w-full " >
              <img src="/public/services/Feature (4).png" alt="" >
            </div>
            </template>
        </ServiceSlots>
</div>

<div class="container  " >
        <ServiceSlots
            title="Technical Support"
            h1="Best in class tech support for your company. We become your tech backbone "
            text="Through True Rich Attended does no end it his mother
             since real had half every him case in packages enquire we up ecstatic
              unsatiable saw his giving Remain expense you position concluded. 
            Through True Rich Attended does no end it his mother since real had half every."
            
            class= " flex item-center">  
            <template  #right  >
              <div class="flex justify-end w-full " >
              <img src="/public/services/Feature (5).png" alt="" >
            </div>
            </template>
        </ServiceSlots>
</div>


<NEWSLETTER class="pt-0" />

</template>

<style scoped>

</style>
