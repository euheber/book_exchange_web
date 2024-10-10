<template>
   
        <div :class="[isActive ? activeClass :  notActiveClass]">
                <label for="bookName">Nome do livro</label>
                <inputComponent class="border w-full" id="bookName"/>

                <label for="isbn" class="block mt-5">ISBN</label>
                <inputComponent class="border block w-full" id="isbn"/>

                <label for="publisher" class="block mt-5">Editora</label>
                <inputComponent class="border block w-full " id="publisher"/>

                <button class="mx-auto font-exo text-lg bg-emerald hover:bg-emerald-hover transition duration-250 p-2 w-48 rounded-md mt-10 block" @click="changeCardStyle">Adicionar</button>
        </div>
    
</template>

<script setup>
import inputComponent from '@/components/layout/input.vue';
import { reactive, ref } from 'vue';

const activeClass = 'border w-[300px] h-[400px] rounded-md p-2 place-content-center transition-all duration-500'
const notActiveClass = 'p-2 border w-[300px] h-[300px] transition-all duration-500'
const changeCardStyle = () => isActive.value = !isActive.value



let isActive = ref(true)

const bookInfo = reactive({
    name: "",
    isbn: "",
    publisher: ""
})


</script>


<style>
  .card {
      transition: width 2s, height 2s;
    }

</style>

