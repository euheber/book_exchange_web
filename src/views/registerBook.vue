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

        
        <form action="" class="max-w-[1024px] p-2 flex flex-wrap border" @submit.prevent>
    
        <addBook v-for="books in bookList" :key="books.isbn" />
            
        
      
        <button class=" border p-2 h-16 w-[300px] rounded-md bg-emerald" @click="addComponent">
            adicionar
        </button>
        </form>
        
    </main>
</template>