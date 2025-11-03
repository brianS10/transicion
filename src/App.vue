<script setup>
import { ref, onMounted } from 'vue';
import PantalladeCarga from './components/PantalladeCarga.vue';

const isLoading = ref(true);
const loadingTime = 3500;

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, loadingTime);
});
</script>

<template>
  <Transition name="loading-fade">
    <PantalladeCarga v-if="isLoading" :loadingDuration="loadingTime" />
  </Transition>

  <Transition name="content-appear">
    <div v-if="!isLoading" class="main-page">
      <div class="content-wrapper">
        <h1>Pagina principal</h1>
        <p>hola</p>
      </div>
    </div>
  </Transition>
</template>

<style>
body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.main-page {
  min-height: 100vh;
  background: linear-gradient(to bottom, #ffffff 0%, #f8f9fa 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-wrapper {
  text-align: center;
  padding: 2rem;
}

.main-page h1 {
  font-size: 3rem;
  color: #1a2332;
  font-weight: 700;
  margin: 0 0 1rem 0;
  letter-spacing: -0.5px;
}

/* color negro en p */
.main-page p {
  color: #000000;
}

/* Transición mejorada y más dramática */
.loading-fade-leave-active {
  transition: all 2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform-origin: center center;
}

.loading-fade-leave-to {
  opacity: 0;
  transform: scale(0.7) rotate(5deg);
  filter: blur(50px) brightness(1.5);
}

.content-appear-enter-active {
  transition: all 1.8s cubic-bezier(0.19, 1, 0.22, 1);
  transition-delay: 0.4s;
  transform-origin: center center;
}

.content-appear-enter-from {
  opacity: 0;
  transform: scale(1.4) translateY(-50px);
  filter: blur(30px) brightness(0.5);
}

.content-appear-enter-to {
  opacity: 1;
  transform: scale(1) translateY(0);
  filter: blur(0) brightness(1);
}

@media (max-width: 768px) {
  .main-page h1 {
    font-size: 2rem;
  }
}
</style>