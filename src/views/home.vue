<script setup>
import logo from '@/components/icons/logo.vue';

import inputComponent from '@/components/layout/input.vue';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

// import { RouterLink } from 'vue-router';
const router = useRouter()
const userInfo = reactive({
  email: "",
  state: "",
  name: ""
})

let formOk = ref(true)

const sendData = (e) => {  
    e.preventDefault()


    formOk.value = !formOk
}

</script>

<template>
  
  <main class="bg-white overflow-auto">
    <logo class="mt-6 mx-auto"/>
    <form class="mt-10 mx-auto max-w-96 flex justify-center flex-col gap-2" v-if="formOk">
      <inputComponent v-model:value="userInfo.name" placeholder="Nome" class="border rounded-md p-2" /> 

      <inputComponent v-model:value="userInfo.email" placeholder="Email" class="border rounded-md p-2" /> 

      <inputComponent v-model:value="userInfo.state" placeholder="Estado" class="border rounded-md p-2" /> 
      <button class="bg-emerald p-2 hover:bg-emerald-hover transition duration-250 rounded-md" @click="sendData">Enviar</button>
    </form>
    <div v-if="!formOk">
      <h1 class="font-exo">Check your email for more information!</h1>
    </div>
  
  </main>
</template>


