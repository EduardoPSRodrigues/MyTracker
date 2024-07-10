<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <!-- O slot é um recurso do Vue que permite que o conteúdo 
         seja passado para um componente filho. -->
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "BoxComponent",
    data() {
        return {
            estilos: {
                background: "#FAF0CA",
            },
        };
    },
});
</script>
