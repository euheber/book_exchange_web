<script setup>
import { RouterView } from 'vue-router'
import headerComponent from '@/components/layout/header.vue';

</script>
<template>
  <div class="flex overflow-hidden">
    <headerComponent/>
    <RouterView class="w-full h-screen rounded-r-md"/>
  </div>
</template>
