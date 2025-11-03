<template>
  <div class="loading-screen">
    <div class="animated-background"></div>
    
    <!-- Solo ondas sutiles que no compitan con el logo -->
    <div class="ripple-container">
      <div class="ripple" :style="getRippleStyle(1)"></div>
      <div class="ripple ripple-2" :style="getRippleStyle(2)"></div>
    </div>
    
    <div class="content-container">
      <!-- LOGO GIGANTE - Elemento principal -->
      <div class="logo-main">
        <div class="logo-glow-effect"></div>
        <div class="logo-wrapper">
          <LogoSismico />
        </div>
      </div>

      <!-- Indicador mínimo y discreto -->
      <div class="minimal-indicator">
        <div class="spinner-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import LogoSismico from './LogoSismico.vue';

const props = defineProps({
  loadingDuration: {
    type: Number,
    default: 3000
  }
});

const getRippleStyle = (rippleNumber) => {
  const durationInSeconds = props.loadingDuration / 1000;
  const rippleDuration = 1.5;
  const startTime = durationInSeconds - rippleDuration;
  const delay = startTime + ((rippleNumber - 1) * 0.3);
  
  return {
    animationDelay: `${delay}s`,
    animationDuration: `${rippleDuration}s`
  };
};
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #0f1419;
  z-index: 1000;
}

.animated-background {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, 
    #1a2332 0%, 
    #12181f 50%, 
    #0a0e12 100%
  );
  animation: breathe 8s ease-in-out infinite;
}

@keyframes breathe {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

.content-container {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  width: 100%;
  height: 100%;
  padding: 2rem;
}

/* LOGO GIGANTE - Elemento principal */
.logo-main {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95vw;
  max-width: 1200px;
  height: 85vh;
  max-height: 900px;
}

/* Efecto de resplandor detrás del logo */
.logo-glow-effect {
  position: absolute;
  inset: -150px;
  background: radial-gradient(circle, 
    rgba(220, 38, 38, 0.35) 0%,
    rgba(26, 35, 50, 0.2) 40%,
    transparent 70%
  );
  filter: blur(80px);
  animation: glowPulse 4s ease-in-out infinite;
  z-index: -1;
}

@keyframes glowPulse {
  0%, 100% { 
    transform: scale(1);
    opacity: 0.6;
  }
  50% { 
    transform: scale(1.15);
    opacity: 1;
  }
}

.logo-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, 
    rgba(255, 255, 255, 0.08) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  backdrop-filter: blur(20px);
  padding: 5rem;
  border-radius: 50px;
  border: 3px solid rgba(220, 38, 38, 0.25);
  box-shadow: 
    0 60px 200px rgba(0, 0, 0, 0.7),
    0 0 120px rgba(220, 38, 38, 0.2),
    inset 0 0 120px rgba(255, 255, 255, 0.04);
  animation: logoFloat 5s ease-in-out infinite;
  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes logoFloat {
  0%, 100% { 
    transform: translateY(0) scale(1);
  }
  50% { 
    transform: translateY(-25px) scale(1.03);
  }
}

/* Indicador mínimo y casi invisible */
.minimal-indicator {
  position: absolute;
  bottom: 5vh;
  display: flex;
  justify-content: center;
}

.spinner-dots {
  display: flex;
  gap: 12px;
  opacity: 0.3;
}

.spinner-dots span {
  width: 8px;
  height: 8px;
  background: rgba(220, 38, 38, 0.6);
  border-radius: 50%;
  animation: dotPulse 1.6s ease-in-out infinite;
}

.spinner-dots span:nth-child(2) {
  animation-delay: 0.2s;
  background: rgba(255, 255, 255, 0.4);
}

.spinner-dots span:nth-child(3) {
  animation-delay: 0.4s;
  background: rgba(26, 35, 50, 0.6);
}

@keyframes dotPulse {
  0%, 100% { 
    transform: scale(0.8);
    opacity: 0.3;
  }
  50% { 
    transform: scale(1.2);
    opacity: 1;
  }
}

/* Ondas muy sutiles */
.ripple-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
  opacity: 0.15;
}

.ripple {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  border: 2px solid rgba(220, 38, 38, 0.3);
  border-radius: 50%;
  animation: rippleExpand ease-out forwards;
  opacity: 0;
}

.ripple-2 {
  border-color: rgba(26, 35, 50, 0.3);
}

@keyframes rippleExpand {
  0% {
    width: 200px;
    height: 200px;
    opacity: 1;
  }
  100% {
    width: 4000px;
    height: 4000px;
    opacity: 0;
  }
}

/* Nueva animación: Diagonal Slide */
@keyframes diagonalSlide {
  0% {
    opacity: 0;
    transform: translate(-100%, -100%) rotate(-45deg) scale(0.3);
    filter: drop-shadow(50px 50px 30px rgba(220, 38, 38, 0));
  }
  100% {
    opacity: 1;
    transform: translate(0, 0) rotate(0deg) scale(1);
    filter: drop-shadow(0 10px 60px rgba(0, 0, 0, 0.4));
  }
}

/* Responsive COMPLETO - Logo siempre MUY grande */

/* Extra Large Desktop (1440px+) */
@media (min-width: 1440px) {
  .logo-main {
    max-width: 1400px;
    max-height: 1000px;
  }

  .logo-wrapper {
    padding: 6rem;
  }
}

/* Large Desktop (1024px - 1439px) */
@media (max-width: 1439px) and (min-width: 1024px) {
  .logo-main {
    width: 92vw;
    max-width: 1100px;
    height: 82vh;
    max-height: 800px;
  }

  .logo-wrapper {
    padding: 4.5rem;
  }

  .logo-glow-effect {
    inset: -130px;
    filter: blur(75px);
  }
}

/* Tablet Landscape (768px - 1023px) */
@media (max-width: 1023px) and (min-width: 768px) {
  .logo-main {
    width: 90vw;
    height: 78vh;
    max-height: 700px;
  }

  .logo-wrapper {
    padding: 4rem;
    border-radius: 45px;
    border-width: 2.5px;
  }

  .logo-glow-effect {
    inset: -110px;
    filter: blur(70px);
  }

  .content-container {
    gap: 5rem;
  }

  .minimal-indicator {
    bottom: 6vh;
  }

  .spinner-dots span {
    width: 7px;
    height: 7px;
  }
}

/* Tablet Portrait (600px - 767px) */
@media (max-width: 767px) and (min-width: 600px) {
  .logo-main {
    width: 88vw;
    height: 72vh;
    max-height: 600px;
  }

  .logo-wrapper {
    padding: 3.5rem;
    border-radius: 40px;
  }

  .logo-glow-effect {
    inset: -90px;
    filter: blur(65px);
  }

  .content-container {
    gap: 4rem;
    padding: 1.5rem;
  }

  .minimal-indicator {
    bottom: 5vh;
  }
}

/* Mobile Large (480px - 599px) */
@media (max-width: 599px) and (min-width: 480px) {
  .logo-main {
    width: 90vw;
    height: 68vh;
    max-height: 520px;
  }

  .logo-wrapper {
    padding: 3rem;
    border-radius: 35px;
    border-width: 2px;
  }

  .logo-glow-effect {
    inset: -75px;
    filter: blur(60px);
  }

  .content-container {
    gap: 3rem;
    padding: 1rem;
  }

  .minimal-indicator {
    bottom: 4vh;
  }

  .spinner-dots {
    gap: 10px;
  }

  .spinner-dots span {
    width: 7px;
    height: 7px;
  }
}

/* Mobile Medium (375px - 479px) */
@media (max-width: 479px) and (min-width: 375px) {
  .logo-main {
    width: 92vw;
    height: 65vh;
    max-height: 480px;
  }

  .logo-wrapper {
    padding: 2.5rem;
    border-radius: 30px;
  }

  .logo-glow-effect {
    inset: -60px;
    filter: blur(55px);
  }

  .content-container {
    gap: 2.5rem;
    padding: 1rem;
  }

  .minimal-indicator {
    bottom: 3vh;
  }

  .spinner-dots {
    gap: 8px;
  }

  .spinner-dots span {
    width: 6px;
    height: 6px;
  }

  .ripple-container {
    opacity: 0.1;
  }
}

/* Mobile Small (menos de 375px) */
@media (max-width: 374px) {
  .logo-main {
    width: 94vw;
    height: 62vh;
    max-height: 440px;
  }

  .logo-wrapper {
    padding: 2rem;
    border-radius: 25px;
  }

  .logo-glow-effect {
    inset: -50px;
    filter: blur(50px);
  }

  .content-container {
    gap: 2rem;
    padding: 0.75rem;
  }

  .minimal-indicator {
    bottom: 2.5vh;
  }

  .spinner-dots {
    gap: 7px;
  }

  .spinner-dots span {
    width: 5px;
    height: 5px;
  }

  .ripple-container {
    opacity: 0.08;
  }
}

/* Landscape mode */
@media (max-height: 600px) and (orientation: landscape) {
  .logo-main {
    height: 75vh;
    max-height: 500px;
  }

  .logo-wrapper {
    padding: 2.5rem;
  }

  .content-container {
    gap: 2rem;
  }

  .minimal-indicator {
    bottom: 2vh;
  }
}

@media (max-height: 450px) and (orientation: landscape) {
  .logo-main {
    height: 70vh;
    max-height: 400px;
  }

  .logo-wrapper {
    padding: 2rem;
  }

  .minimal-indicator {
    display: none;
  }
}
</style>