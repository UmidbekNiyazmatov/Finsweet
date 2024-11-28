<script setup>

import {defineProps} from "vue" ;


defineProps({
    variant: String,
    title: String,
   
    style: String
})


</script>


<template>



    <div  class="flex items-center gap-3 text-blue-600 ">
        {{title}} <span><img src="/public/section/arrow2.png" alt=""></span>
    </div>
</template>
<style scoped >

</style>