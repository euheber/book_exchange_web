<script setup>
import { RouterView } from 'vue-router'
import headerComponent from '@/components/layout/header.vue';

</script>
<template>
  <div class="flex max-w-5xl mx-auto mt-10 border rounded-md min-h-[550px]">
    <headerComponent />
    <RouterView class="p-2 w-full rounded-r-md"/>
  </div>
</template>
