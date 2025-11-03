<template>
  <div class="animated-logo-wrapper">
    <div class="line-container">
      <img src="/assets/Linea sismica.png" alt="Línea Sísmica" class="seismic-line" />
    </div>
    <div class="text-container">
      <span class="logo-text">BEARING PADS</span>
    </div>
  </div>
</template>

<script setup>
// Sin lógica adicional
</script>

<style scoped>
.animated-logo-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}

.line-container {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.seismic-line {
  width: 100%;
  max-width: 200px;
  height: auto;
  /* Empieza cortada desde la derecha (invisible) */
  clip-path: inset(0 100% 0 0);
  /* Animación de revelado de izquierda a derecha */
  animation: revealLeftToRight 2s ease-in-out forwards;
  filter: drop-shadow(0 0 8px rgba(220, 38, 38, 0.3));
}

@keyframes revealLeftToRight {
  to {
    clip-path: inset(0 0 0 0);
  }
}

.text-container {
  width: 100%;
  text-align: center;
  opacity: 0;
  animation: fadeIn 0.8s ease-out 2s forwards;
}

.logo-text {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 3px;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .seismic-line {
    max-width: 160px;
  }
  
  .logo-text {
    font-size: 0.65rem;
    letter-spacing: 2px;
  }
}

@media (max-width: 480px) {
  .seismic-line {
    max-width: 140px;
  }
  
  .logo-text {
    font-size: 0.6rem;
    letter-spacing: 1.5px;
  }
}
</style>
