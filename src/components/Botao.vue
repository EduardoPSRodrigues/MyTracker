<template>
    <button class="m-3 button" @click="clicado" :disabled="desabilitado">
        <span class="icon">
            <i :class="icone"></i>
        </span>
        <span>{{ texto }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BotaoComponent",
    emits: ['clicado'],
    props: {
        desabilitado: {
            type: Boolean
        },
        icone: {
            type: String,
            required: true
        },
        texto: {
            type: String,
            required: true
        },
    },
    methods: {
        clicado(): void {
            this.$emit('clicado')
        }
    }
});
</script>