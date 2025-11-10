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
  gap: clamp(0.5rem, 2vh, 1.2rem);
  padding: clamp(0.5rem, 2vh, 1.5rem);
}

.line-container {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
}

.seismic-line {
  width: 100%;
  max-width: min(70vw, 300px);
  height: auto;
  clip-path: inset(0 100% 0 0);
  animation: revealLeftToRight 2s ease-in-out forwards;
  filter: drop-shadow(0 0 clamp(5px, 1.2vw, 12px) rgba(220, 38, 38, 0.4));
  will-change: clip-path, transform, opacity;
}

/* Optimización GPU para el logo animado */
.animated-logo-wrapper,
.line-container,
.seismic-line,
.text-container,
.logo-text {
	will-change: clip-path, transform, opacity;
	transform: translateZ(0);
	backface-visibility: hidden;
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
  padding: 0 clamp(0.5rem, 2vw, 1rem);
}

.logo-text {
  font-size: clamp(0.6rem, 2.2vw, 1rem);
  font-weight: 700;
  letter-spacing: clamp(2px, 0.7vw, 5px);
  color: #ffffff;
  text-shadow: 0 2px clamp(6px, 1.5vw, 12px) rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

/* Responsive optimizado */
@media (min-width: 1920px) {
  .animated-logo-wrapper {
    gap: clamp(1rem, 2.5vh, 1.5rem);
  }
  
  .seismic-line {
    max-width: min(65vw, 350px);
  }
  
  .logo-text {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    letter-spacing: clamp(4px, 0.8vw, 6px);
  }
}

@media (min-width: 1025px) and (max-width: 1919px) {
  .seismic-line {
    max-width: min(68vw, 280px);
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .animated-logo-wrapper {
    gap: clamp(0.6rem, 1.8vh, 1rem);
    padding: clamp(0.5rem, 1.6vh, 0.9rem);
  }
  
  .seismic-line {
    max-width: min(80vw, 280px);
  }
  
  .logo-text {
    font-size: clamp(0.65rem, 2.1vw, 0.82rem);
    letter-spacing: clamp(2.2px, 0.55vw, 3.8px);
  }
}

@media (min-width: 641px) and (max-width: 768px) {
  .animated-logo-wrapper {
    gap: clamp(0.6rem, 1.8vh, 1rem);
    padding: clamp(0.5rem, 1.6vh, 0.9rem);
  }
  
  .seismic-line {
    max-width: min(80vw, 280px);
  }
  
  .logo-text {
    font-size: clamp(0.65rem, 2.1vw, 0.82rem);
    letter-spacing: clamp(2.2px, 0.55vw, 3.8px);
  }
}

@media (min-width: 481px) and (max-width: 640px) {
  .animated-logo-wrapper {
    gap: clamp(0.55rem, 1.6vh, 0.9rem);
    padding: clamp(0.45rem, 1.5vh, 0.8rem);
  }
  
  .seismic-line {
    max-width: min(82vw, 260px);
  }
  
  .logo-text {
    font-size: clamp(0.6rem, 2vw, 0.78rem);
    letter-spacing: clamp(2px, 0.5vw, 3.5px);
  }
}

@media (max-width: 480px) {
  .animated-logo-wrapper {
    gap: clamp(0.5rem, 1.5vh, 0.8rem);
    padding: clamp(0.4rem, 1.4vh, 0.7rem);
  }
  
  .seismic-line {
    max-width: min(85vw, 240px);
    animation-duration: 2.6s; /* más suave y menos CPU */
  }
  
  .logo-text {
    font-size: clamp(0.55rem, 1.9vw, 0.72rem);
    letter-spacing: clamp(1.8px, 0.46vw, 3.2px);
    text-shadow: 0 1px 6px rgba(0,0,0,0.35); /* menos blur para menos repaint */
  }
}

@media (max-width: 375px) {
  .animated-logo-wrapper {
    gap: clamp(0.45rem, 1.3vh, 0.7rem);
    padding: clamp(0.35rem, 1.2vh, 0.6rem);
  }
  
  .seismic-line {
    max-width: min(88vw, 220px);
  }
  
  .logo-text {
    font-size: clamp(0.52rem, 1.8vw, 0.68rem);
    letter-spacing: clamp(1.6px, 0.42vw, 3px);
  }
}

/* Landscape móviles */
@media (max-height: 600px) and (orientation: landscape) {
  .animated-logo-wrapper {
    gap: clamp(0.4rem, 1.3vh, 0.7rem);
    padding: clamp(0.3rem, 1.1vh, 0.6rem);
  }
  
  .seismic-line {
    max-width: min(60vw, 260px);
  }
  
  .logo-text {
    font-size: clamp(0.55rem, 1.8vw, 0.75rem);
    letter-spacing: clamp(1.7px, 0.45vw, 3px);
  }
}

/* Tablets landscape */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .seismic-line {
    max-width: min(55vw, 240px);
  }
}

/* Pantallas muy grandes */
@media (min-width: 1920px) {
  .seismic-line {
    max-width: 240px;
  }
  
  .logo-text {
    font-size: 0.85rem;
    letter-spacing: 4px;
  }
  
  .animated-logo-wrapper {
    gap: 1rem;
  }
}

/* Pantallas muy pequeñas */
@media (max-width: 320px) {
  .animated-logo-wrapper {
    gap: 0.3rem;
    padding: 0.3rem;
  }
  
  .seismic-line {
    max-width: 100px;
  }
  
  .logo-text {
    font-size: 0.4rem;
    letter-spacing: 0.8px;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .seismic-line, .text-container {
		animation: none !important;
		transition: none !important;
	}
}
</style>
