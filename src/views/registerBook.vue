<script setup>
import { RouterLink } from 'vue-router';
import arrowLeft from '@/components/icons/arrow-left.vue';
import bookComponent from '@/components/layout/addBook.vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()


let components = ref([])
let bookList = ref([])

const addComponent = (e) => { 
    e.preventDefault()
    components.value.push(bookComponent)
}

const addBookData = (book) => { 

    const {id} = book
    const findBook = bookList.value.find(item => item.id === id);

    if(!findBook) { 
       bookList.value.push(book)
       return
    } 
    
    findBook.name = book.name
    findBook.publisher = book.publisher
    findBook.isbn = book.isbn
}


</script>

<template>
    <main class="overflow-auto flex">
        <div class="max-w-96 p-2 border-r">
            <RouterLink class="flex items-center gap-1 hover:text-emerald-hover transition duration-250" to="/"><arrowLeft /> Voltar</RouterLink>

            <h1 class="font-exo text-3xl mt-10"> {{ route.params.username }}, preencha os campos com os dados dos livros que você está enviando</h1>
            <img src="/check_box.gif" alt="" class="mt-10">
            
            <button class=" p-2 rounded-md bg-grey w-80 mx-auto h-[160px] block" @click="addComponent">Adicionar livro</button>
            <button class=" p-2 rounded-md bg-emerald w-80 mx-auto h-[160px] block mt-10" >Enviar livros</button>
        </div>

 

        <form  class="flex flex-wrap gap-2 h-screen content-start overflow-y-auto max-w-[1100px]  p-4" @submit.prevent>
            <bookComponent v-for=" ( , index) in components" :key="index" :inputId="index" @sendData="addBookData"/>
        </form>

    </main>

    
</template>

<style>

/* .parent {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 6px;
grid-row-gap: 13px;

} */

</style>

<!-- -->