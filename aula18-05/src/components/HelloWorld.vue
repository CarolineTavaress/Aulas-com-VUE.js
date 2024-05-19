<script setup>
defineProps({
  type: String,
  required: true
})
</script>

<template>
  <p class="texto">{{msg}}</p>
</template>

<style scoped>
.texto{
  color:#FF4500;
  font-style:italic;
}
</style>
