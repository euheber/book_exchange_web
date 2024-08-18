<template>
   <header class=" rounded-l-md w-[300px] p-2 bg-emerald">

      <nav>
    
         <h1 class="font-bold font-exo uppercase">O que é a ecolib?</h1>
            <p class="font-exo text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis sunt hic, officiis aspernatur, voluptas culpa voluptatibus maxime ipsa suscipit quaerat quos tempore, sequi libero quod consequuntur deserunt natus numquam sed.
            </p>

         <h1 class="font-exo mt-4 uppercase font-bold">Como funciona?</h1>
            <p class="font-exo text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sequi, beatae sapiente maiores error animi consectetur excepturi quidem. Perferendis ipsa officia consequatur eaque debitis voluptatibus earum ab deserunt. Nam, sit.
            </p>
     

            <div class="mt-16 flex items-center gap-2">
               <div class="flex items-center">
                  <book height="40" width="40"/>
                  <p class="font-exo bg-white p-1 text-sm rounded-md">9999</p>
               </div>

               <div class="flex items-center gap-2">
                  <tree height="40" width="40"/>
                  <p class="font-exo bg-white p-1 text-sm rounded-md">9999</p>
               </div>
            </div>
      </nav>
      
   </header>
</template>


<script setup>
import tree from '../icons/tree.vue';
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


