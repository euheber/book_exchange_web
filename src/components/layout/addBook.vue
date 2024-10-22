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

               <div v-if="!isActive" class="flex flex-col justify-evenly h-full p-2">

                  <h1 class="font-exo text-4xl">{{ bookInfo.name }}</h1>
                  <p class="font-exo text-sm font-medium "> {{ bookInfo.publisher }}</p>
                  <div :class="barColorClass"></div>
                  <p class="font-exo text-2xl text-end"> {{ bookInfo.isbn }}</p>
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

let activeClass = ref('border rounded-md w-[500px] h-[400px]  p-2 place-content-center transition-all duration-250 mr-auto')
let notActiveClass = ref('border rounded-md  w-[500px] max-h-44 mr-auto transition-all duration-250')
let barColorClass = ref("w-20 min-h-1  rounded-md bg-emerald mb-10")
let booksList = reactive([])
let isActive = ref(true)


const checkIfFieldIsEmpty = (obj) => { 
  const values = Object.values(obj)
  return values.length < 3 


}
const changeCardStyle = () => {

  if(!checkIfFieldIsEmpty(bookInfo)){ 
    console.log("preencha todos os campos")
    return
  }


  const colors = [" orange", " purple", " green", " aqua-green", " yellow", " vibrant-purple", " sky-blue", " rosy-red", " mint-green", " magenta", " intense-blue", " gold-yellow", " neon-green", " burnt-orange"]
  barColorClass.value += colors[Math.floor(Math.random() * colors.length)]


  booksList.push(bookInfo)
  isActive.value = !isActive.value
}

</script>


<style>


</style>

