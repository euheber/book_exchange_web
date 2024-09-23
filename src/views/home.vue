<script setup>
import logo from '@/components/icons/logo.vue';
import tree from '@/components/icons/tree.vue';
import book from '@/components/icons/book.vue';
import inputComponent from '@/components/layout/input.vue';
import { ref, reactive } from 'vue';

// import { RouterLink } from 'vue-router';

const userInfo = reactive({
  email: "",
  state: "",
  name: ""
})

</script>

<template>
  
  <main class="bg-white overflow-auto">

    

    <logo class="mt-6 mx-auto"/>
    <form class="mt-10 mx-auto max-w-96 flex justify-center flex-col gap-2">
      <inputComponent v-model:value="userInfo.name" placeholder="Nome" class="border rounded-md p-2" /> 

      <inputComponent v-model:value="userInfo.email" placeholder="Email" class="border rounded-md p-2" /> 

      <inputComponent v-model:value="userInfo.state" placeholder="Estado" class="border rounded-md p-2" /> 
      <button class="bg-emerald p-2 hover:bg-emerald-hover transition duration-250 rounded-md" @click="console.log('olá')">Enviar</button>
    </form>

  
  </main>
</template>


