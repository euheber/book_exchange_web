<script setup>
import { RouterLink } from 'vue-router';
import arrowLeft from '@/components/icons/arrow-left.vue';
import inputComponent from '@/components/layout/input.vue';


import {  reactive } from 'vue';

const bookInfo = reactive({ 
    bookName: "",
    isbn: "",
    publisher: ""
})


const myFunction = (e) => { 
    e.preventDefault()
    console.log('olá, mundo')
}
</script>


<template>
    <main class="overflow-auto flex">
        <div class="max-w-96 p-2">
            <RouterLink class="flex items-center gap-1 hover:text-emerald-hover transition duration-250" to="/"><arrowLeft /> Voltar</RouterLink>

            <h1 class="font-exo text-3xl mt-10">Heber, preencha os campos com os dados dos livros que você está enviando</h1>
            <img src="/check_box.gif" alt="" class="mt-10">
        </div>

        
        <form action="" class=" max-w-[560px] p-2" @submit.prevent>
    
            <div class="border w-[300px] h-[400px] rounded-md p-2 place-content-center">
                <label for="bookName">Nome do livro</label>
                <inputComponent class="border w-full" id="bookName"/>

                <label for="isbn" class="block mt-5">ISBN</label>
                <inputComponent class="border block w-full" id="isbn"/>

                <label for="publisher" class="block mt-5">Editora</label>
                <inputComponent class="border block w-full" id="publisher"/>


                <button class="mx-auto font-exo text-lg bg-emerald hover:bg-emerald-hover transition duration-250 p-2 w-48 rounded-md mt-10 block">Adicionar</button>
            </div>
        
        </form>
        
    </main>
</template>