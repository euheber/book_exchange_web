<script setup>
import { RouterLink } from 'vue-router';
import arrowLeft from '@/components/icons/arrow-left.vue';
import addBook from '@/components/layout/addBook.vue';

import { ref, reactive } from 'vue';

const bookInfo = reactive({ 
    bookName: "",
    isbn: "",
    publisher: ""
})


const bookList = reactive([])

const addComponent = (e) => { 
    e.preventDefault()

    bookList.push(addBook)
   
}
</script>

<template>
    <main class="overflow-auto flex">
        <div class="max-w-96 p-2 border-r">
            <RouterLink class="flex items-center gap-1 hover:text-emerald-hover transition duration-250" to="/"><arrowLeft /> Voltar</RouterLink>

            <h1 class="font-exo text-3xl mt-10"> ${userName}, preencha os campos com os dados dos livros que você está enviando</h1>
            <img src="/check_box.gif" alt="" class="mt-10">

            <button class=" p-2 rounded-md bg-grey w-80 mx-auto h-[160px] block" @click="addComponent">Adicionar livro</button>
        </div>

 

        <form  class="flex flex-wrap gap-2 h-screen align content-start overflow-y-auto max-w-[1100px] border p-4 justify-center" @submit.prevent>
       
                <addBook v-for="books in bookList" :key="books.isbn"/>
       
       
        </form>

    </main>

    
</template>

<style>

    .parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 6px;
grid-row-gap: 13px;

}
</style>

<!-- -->