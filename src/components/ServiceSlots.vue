<script setup>

import {defineProps} from "vue" ;


defineProps({
    variant: String,
    title: String,
    h1: String,
    text:String,
    style: String
})


</script>


<template>

<div class="flex items-center pb-24 " >
    <slot name="left" />
    <div class="w-full  " >
        <div >{{title}}</div>
        <h1 class="text-4xl pt-5 pb-5" >{{ h1 }}</h1>
        <p class="pr-28" >{{ text }}</p>
    </div>
    <slot name="right" />
</div>

</template>

<style scoped>


</style>
