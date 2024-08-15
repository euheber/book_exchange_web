<template>
   <header class="w-full">

      <nav class="max-w-6xl mx-auto py-2 px-2 flex justify-evenly items-center">
         <a href="#" class="flex items-center gap-1 text-2xl font-roboto text-emerald">Ecolib<leaf height="20" width="20" class="flex-grow"/></a>  
    
         
         <ul class=" flex gap-2">
            <li>
                  <a href="#" class="hover:text-emerald transtion duration-200 cursor-pointer font-bookletter text-md"> Ínicio</a>
            </li>
            <li>
                  <a href="#" class="hover:text-emerald transtion duration-200 cursor-pointer font-bookletter text-md"> O que é a Ecolib?</a>
            </li>

            <li>
                  <a href="#" class="cursor-pointer hover:text-emerald transtition duration-200 font-bookletter text-md">Envie seus livros</a>
            </li>
         </ul>


       
            <div class="flex items-center">
           
                  <book class="cursor-default transition duration-200" height="40" width="40" />
                  <div class="bg-emerald  rounded-lg w-11 text-center cursor-default">999</div>
               
            </div>
     
      </nav>
      
   </header>
</template>


<script setup>
import leaf from '../icons/leaf.vue';
import book from '../icons/book.vue';
// import { onMounted, ref } from 'vue';

// const formattedDate = ref('')
// const dayNames = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

// onMounted(() => {
//    const date = new Date();
//    const formatted = date.toLocaleDateString('pt-BR');
//    const dayName = dayNames[date.getDay()]

//    formattedDate.value = `${dayName} | ${formatted}`
   
// });



</script>


