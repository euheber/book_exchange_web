<template>
   
        <div :class="[isActive ? activeClass :  notActiveClass]">
               <div v-if="isActive">
                <label for="bookName">Nome do livro</label>
                <inputComponent class="border w-full" id="bookName" v-model="bookInfo.name"/>

                <label for="isbn" class="block mt-5">ISBN</label>
                <inputComponent class="border block w-full" id="isbn" v-model="bookInfo.isbn"/>

                <label for="publisher" class="block mt-5">Editora</label>
                <inputComponent class="border block w-full " id="publisher" v-model="bookInfo.publisher"/>

                <button class="mx-auto font-exo text-lg bg-emerald hover:bg-emerald-hover transition duration-250 p-2 w-48 rounded-md mt-10 block" @click="changeCardStyle">Adicionar</button>
               </div>

               <div v-if="!isActive" class="flex flex-col justify-evenly h-full bg-grey p-2 rounded-md">

                  <h1 class="font-exo text-5xl flex-0">{{ bookInfo.name }}</h1>
                  <p class="font-exo text-sm font-medium flex-1"> {{ bookInfo.isbn }}</p>
                  <p class="font-exo text-3xl text-end"> {{ bookInfo.publisher }}</p>
               </div>
        </div>
        
</template>

<script setup>
import inputComponent from '@/components/layout/input.vue';
import { reactive, ref } from 'vue';

const bookInfo = reactive({
    name: "",
    isbn: "",
    publisher: ""
})
const activeClass = 'border w-[300px] h-[400px] rounded-md p-2 place-content-center transition-all duration-500'
const notActiveClass = 'rounded p-2  w-[300px] h-[300px] transition-all duration-500'
const changeCardStyle = () => { 
  booksList.push(bookInfo)
  isActive.value = !isActive.value
}

const booksList = reactive([])
let isActive = ref(true)

</script>


<style>
 

</style>

