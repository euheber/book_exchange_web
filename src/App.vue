<script setup>
import { RouterView } from 'vue-router'
import headerComponent from '@/components/layout/header.vue';

</script>
<template>
  <div class="flex overflow-hidden">
    <headerComponent/>
    <RouterView class="w-full  rounded-r-md h-screen"/>
  </div>
</template>
