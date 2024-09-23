<script setup>
import { RouterLink } from 'vue-router';
import arrowLeft from '@/components/icons/arrow-left.vue';
import inputComponent from '@/components/layout/input.vue';
import books from '@/components/layout/books.vue';

import {  reactive } from 'vue';

const userInfo = reactive({ 
    email: "",
    name: "",
})
</script>


<template>
    <main class="overflow-auto">
        <RouterLink class="flex items-center gap-1 hover:text-emerald-hover transition duration-250" to="/"><arrowLeft /> Voltar</RouterLink>

        <h1 class="font-exo text-lg mt-10">Preencha os campos</h1>
        <p>Enviaremos no seu email os próximos passos</p>
        
    </main>
</template>