<template>
   
        <div :class="[isActive ? activeClass :  notActiveClass]" class="relative">
               <div v-if="isActive">
                <label :for="'name-' + props.inputId">Nome do livro</label>
                <inputComponent class="border w-full" :id="'name-' + props.inputId" v-model="bookInfo.name"/>
                
                <label :for="'isbn-' + props.inputId" class="block mt-5">ISBN</label>
                <inputComponent class="border block w-full" :id="'isbn-' + props.inputId" v-model="bookInfo.isbn"/>

                <label :for="'publisher-' + props.inputId" class="block mt-5">Editora</label>
                <inputComponent class="border block w-full " :id="'publisher-' + props.inputId" v-model="bookInfo.publisher"/>
                
                <p>{{ props.inputId }}</p>
                <button class="mx-auto font-exo text-lg bg-emerald hover:bg-emerald-hover transition duration-250 p-2 w-48 rounded-md mt-10 block" @click="changeCardStyle">Adicionar</button>
               </div>

               <div v-if="!isActive" class="flex flex-col justify-evenly h-full p-2">

                  <h1 class="font-exo text-2xl h-">{{ bookInfo.name }}</h1>
                  <p class="font-exo text-sm font-medium "> {{ bookInfo.publisher }}</p>
                  <div :class="barColorClass"></div>
                  <p class="font-exo text-2xl text-end mt-auto"> {{ bookInfo.isbn }}</p>
            
               </div>

               
              <Transition name="fade">
                <p class="p-4 bg-emerald absolute w-full bottom-0 right-0 rounded-b-md text-center" v-if="fieldWarn">Preencha todos os campos</p>
              </Transition>
        </div>
        
</template>

<script setup>
import inputComponent from '@/components/layout/input.vue';
import { defineEmits, defineProps } from 'vue';
import { reactive, ref } from 'vue';

const bookInfo = reactive({})
const emit = defineEmits(['sendData'])
let activeClass = ref('border rounded-md w-[500px] h-[400px]  p-2 place-content-center transition-all duration-250 mr-auto')
let notActiveClass = ref('border rounded-md w-[500px] min-h-44 max-h-44 transition-all duration-250 overflow-y-auto')
let barColorClass = ref("w-20 min-h-1  rounded-md bg-emerald mb-10")
let isActive = ref(true)
let fieldWarn = ref(false)
const props = defineProps(['inputId'])



const checkIfFieldIsEmpty = (obj) => { 
  const values = Object.values(obj)
  
  return values.length < 3

}

const changeCardStyle = () => {
  
  if(checkIfFieldIsEmpty(bookInfo)){ 
    fieldWarn.value = true
    setTimeout(() => { fieldWarn.value = false }, 3000)
    return
  }


  const colors = [" orange", " purple", " green", " aqua-green", " yellow", " vibrant-purple", " sky-blue", " rosy-red", " mint-green", " magenta", " intense-blue", " gold-yellow", " neon-green", " burnt-orange"]
  barColorClass.value += colors[Math.floor(Math.random() * colors.length)]

  emit('sendData', bookInfo)
  isActive.value = !isActive.value
}

</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>

