<script setup>
import logo from '@/components/icons/logo.vue';
import inputComponent from '@/components/layout/input.vue';
import bookPile from '@/components/icons/book-pile.vue';
import trees from '@/components/icons/trees.vue';
import { reactive, ref } from 'vue';
import router from '@/router';


const userInfo = reactive({
  email: "",
  state: "",
  name: ""
})


let isFieldOk = ref(false)
let iSemailOk =ref(false)
let isSelectOk = ref(false)
const sendData = (e) => {
  e.preventDefault()
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const checkIfEmailIsValid = regex.test(userInfo.email);

  if(userInfo.email === '' || userInfo.name === '' || userInfo.state === ''){ 
      isFieldOk.value = !isFieldOk.value
      setTimeout(() => { isFieldOk.value = !isFieldOk}, 2000)
      return
    }

  if(!checkIfEmailIsValid){ 
    iSemailOk.value = true
    setTimeout(() => {iSemailOk.value = false}, 2000)
    return
  }

  if(userInfo.state.length > 2) { 
    isSelectOk.value = !isSelectOk
  }

  router.push("/registrar")
}

</script>

<template>
  
  <main class="bg-white overflow-auto">
    <logo class="mt-6 mx-auto"/>
    <form class="mt-10 mx-auto max-w-96 flex justify-center flex-col gap-2" >
      <inputComponent v-model:value="userInfo.name" placeholder="Nome" class="border rounded-md p-2" /> 

      <inputComponent v-model:value="userInfo.email" placeholder="Email" class="border rounded-md p-2" /> 
      <transition name="fade">
        <p v-if="iSemailOk" class="font-exo">Preencha o campo com um email válido</p>
      </transition>
      <select name="states" id="state"  class="p-2 rounded-md border" v-model="userInfo.state" placeholder="Estado">
        <option value="" disabled selected hidden class="text-grey">Estado</option>
        <option>AC</option>
        <option>AL</option>
        <option>AP</option>
        <option>AM</option>
        <option>BA</option>
        <option>CE</option>
        <option>DF</option>
        <option>ES</option>
        <option>GO</option>
        <option>MA</option>
        <option>MT</option>
        <option>MS</option>
        <option>MG</option>
        <option>PA</option>
        <option>PB</option>
        <option>PR</option>
        <option>PE</option>
        <option>PI</option>
        <option>RJ</option>
        <option>RN</option>
        <option>RS</option>
        <option>RO</option>
        <option>RR</option>
        <option>SC</option>
        <option>SP</option>
        <option>SE</option>
        <option>TO</option>
      </select>

      <transition name="fade">
        <p v-if="isFieldOk" class="font-exo">Preencha todos os campos</p>
      
      </transition>

      <button class="bg-emerald p-2 hover:bg-emerald-hover transition duration-250 rounded-md" @click="sendData">Enviar</button>
    </form>



   <section class="mt-10 mx-auto max-w-[1100px] p-2">

    <!-- <a href="https://storyset.com/nature">Nature illustrations by Storyset</a> -->
     <!-- <a href="https://www.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23974708.htm">Freepik</a> -->
     <!-- <a href="https://storyset.com/people">People illustrations by Storyset</a> -->
      <div class="flex flex-col justify-center items-center lg:flex-row">
        <trees class="max-w-[400px] mx-auto"/>

        <div>
          <p class="font-exo text-lg text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam molestias ratione minima reprehenderit minus distinctio, assumenda nisi mollitia doloribus eaque. In incidunt ullam tenetur facere et tempore nobis rerum similique.</p>

        <p class="font-exo text-9xl text-center">9999</p>
        </div>
      </div>

      <div class="flex flex-col-reverse justify-center items-center lg:flex-row">
        <div>
          <p class="font-exo text-lg text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero maxime porro ratione corrupti commodi recusandae repudiandae quaerat maiores dolorem. Eaque ipsum dolorem illo repellat aliquid sint, maxime tempora ea odio.</p>
          <p class="font-exo text-9xl text-center">9999</p>
        </div>
        <bookPile class="max-w-[400px] "/>
      </div>


    
   </section>
  </main>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}</style>