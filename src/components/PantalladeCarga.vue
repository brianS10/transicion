<template>
  <div class="loading-screen" role="status" aria-live="polite" aria-label="Cargando aplicación">
    <!-- Fondo corporativo mejorado -->
    <div class="corporate-backdrop">
      <div class="backdrop-grid"></div>
      <div class="gradient-overlay"></div>
      <div class="radial-glow"></div>
    </div>
    
    <!-- Partículas flotantes -->
    <div class="particles-layer">
      <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
    </div>
    
    <!-- Contenido principal -->
    <div class="content-wrapper">
      <div class="logo-section">
        <div class="logo-glow-effect"></div>
        <LogoSismico :animation-type="logoAnimation" />
      </div>
      
      <!-- Indicador de carga profesional mejorado -->
      <div class="loading-indicator">
        <div class="loading-text-top">
          <span class="loading-label">{{ loadingState.message }}</span>
        </div>
        
        <div class="progress-container">
          <div class="progress-track">
            <div class="progress-shimmer"></div>
            <div class="progress-active" :style="{ width: loadingState.progress + '%' }">
              <div class="progress-glow"></div>
            </div>
          </div>
          <div class="progress-percentage">{{ Math.round(loadingState.progress) }}%</div>
        </div>
        
        <div class="loading-status">
          <span class="status-text">{{ loadingState.currentTask }}</span>
        </div>
        
        <div class="loading-dots">
          <span class="dot"></span>
          <span class="dot"></span>
          <span class="dot"></span>
        </div>
      </div>
    </div>
    
    <!-- Elementos decorativos corporativos mejorados -->
    <div class="corporate-elements">
      <div class="element element-1">
        <div class="element-inner"></div>
      </div>
      <div class="element element-2">
        <div class="element-inner"></div>
      </div>
      <div class="element element-3">
        <div class="element-inner"></div>
      </div>
      <div class="corner-accent corner-top-left"></div>
      <div class="corner-accent corner-bottom-right"></div>
    </div>
    
    <!-- Líneas decorativas -->
    <div class="decorative-lines">
      <div class="line line-1"></div>
      <div class="line line-2"></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted, reactive } from 'vue';
import LogoSismico from './LogoSismico.vue';

const loadingRoot = ref(null);

const props = defineProps({
  loadingDuration: {
    type: Number,
    default: 3000
  },
  logoAnimation: {
    type: Number,
    default: 1, // aqui 
    validator: (value) => value >= 1 && value <= 10
  }
});

const emit = defineEmits(['loaded']);

const loadingState = reactive({
  progress: 0,
  message: 'Loading Experience',
  currentTask: 'Initializing...'
});

const loadingTasks = [
  { progress: 15, message: 'Cargando Experiencia', task: 'Cargando recursos...' },
  { progress: 30, message: 'Cargando Experiencia', task: 'Preparando componentes...' },
  { progress: 45, message: 'Configurando', task: 'Configurando módulos...' },
  { progress: 60, message: 'Configurando', task: 'Cargando recursos...' },
  { progress: 75, message: 'Casi Listo', task: 'Inicializando interfaz...' },
  { progress: 90, message: 'Casi Listo', task: 'Finalizando configuración...' },
  { progress: 100, message: 'Listo', task: '¡Completado!' }
];

let currentTaskIndex = 0;

function updateLoadingState() {
  if (currentTaskIndex < loadingTasks.length) {
    const task = loadingTasks[currentTaskIndex];
    const previousProgress = loadingState.progress;
    const targetProgress = task.progress;
    const duration = 400; // Duración de la transición suave
    const steps = 20;
    const increment = (targetProgress - previousProgress) / steps;
    
    let step = 0;
    const progressInterval = setInterval(() => {
      if (step < steps) {
        loadingState.progress = previousProgress + (increment * step);
        step++;
      } else {
        loadingState.progress = targetProgress;
        loadingState.message = task.message;
        loadingState.currentTask = task.task;
        clearInterval(progressInterval);
        
        currentTaskIndex++;
        
        if (currentTaskIndex < loadingTasks.length) {
          // Tiempo variable entre tareas para simular carga real
          const delay = Math.random() * 300 + 200;
          setTimeout(updateLoadingState, delay);
        } else {
          // Carga completada
          setTimeout(() => {
            emit('loaded');
          }, 500);
        }
      }
    }, duration / steps);
  }
}

onMounted(() => {
  if (loadingRoot.value) {
    loadingRoot.value.focus();
  }
  
  // Iniciar el proceso de carga
  setTimeout(() => {
    updateLoadingState();
  }, 500);
});

function getParticleStyle(n) {
  const size = Math.random() * 3 + 1;
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${8 + Math.random() * 6}s`,
    opacity: Math.random() * 0.5 + 0.2
  };
}
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
  z-index: 1000;
  background: 
    radial-gradient(ellipse at top, #1a2332 0%, #0a0e1a 50%),
    radial-gradient(ellipse at bottom, #0f1823 0%, #0a0e1a 70%);
  animation: screenFadeIn 0.8s ease-out;
}

@keyframes screenFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.corporate-backdrop {
  position: absolute;
  inset: 0;
}

.backdrop-grid {
  position: absolute;
  inset: 0;
  background-image: 
    repeating-linear-gradient(0deg, rgba(59, 130, 246, 0.02) 0px, transparent 1px, transparent 60px),
    repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.02) 0px, transparent 1px, transparent 60px);
  animation: gridPulse 5s ease-in-out infinite;
  opacity: 0.4;
}

@keyframes gridPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.7; }
}

.gradient-overlay {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%);
  mix-blend-mode: screen;
}

.radial-glow {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(ellipse at 20% 30%, rgba(59, 130, 246, 0.06) 0%, transparent 40%),
    radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.06) 0%, transparent 40%);
  animation: glowPulse 8s ease-in-out infinite;
}

@keyframes glowPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Partículas más sutiles */
.particles-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  opacity: 0.6;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.8), transparent 70%);
  border-radius: 50%;
  animation: particleFloat 12s ease-in-out infinite;
  will-change: transform, opacity;
  filter: blur(0.6px);
}

@keyframes particleFloat {
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
  }
  25% {
    transform: translateY(-20px) translateX(10px) scale(1.2);
  }
  50% {
    transform: translateY(-40px) translateX(-10px) scale(0.8);
  }
  75% {
    transform: translateY(-20px) translateX(5px) scale(1.1);
  }
}

.content-wrapper {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5rem, 5vh, 4rem);
  width: 100%;
  height: 100%;
  max-width: 100%;
  padding: clamp(1rem, 3vh, 3rem) clamp(1rem, 3vw, 2rem);
}

.logo-section {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: min(90vw, 800px);
  animation: logoSectionAppear 1.5s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes logoSectionAppear {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.logo-glow-effect {
  position: absolute;
  width: min(90vw, 900px);
  height: min(90vw, 900px);
  background: 
    radial-gradient(circle, rgba(59, 130, 246, 0.12) 0%, transparent 60%),
    radial-gradient(circle, rgba(168, 85, 247, 0.08) 20%, transparent 70%);
  animation: logoGlowPulse 4s ease-in-out infinite;
  pointer-events: none;
  filter: blur(40px);
  will-change: auto;
}

@keyframes logoGlowPulse {
  0%, 100% {
    transform: scale(0.9) rotate(0deg);
    opacity: 0.4;
  }
  50% {
    transform: scale(1.1) rotate(10deg);
    opacity: 0.7;
  }
}

/* Indicador de carga rediseñado */
.loading-indicator {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(0.8rem, 1.5vh, 1.5rem);
  animation: indicatorSlideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s backwards;
  padding: clamp(1.2rem, 3vh, 2.8rem) clamp(1.5rem, 4vw, 3.5rem);
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(20px);
  border-radius: clamp(18px, 2.5vw, 32px);
  border: 1px solid rgba(59, 130, 246, 0.1);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
  width: min(92%, 500px);
  max-width: 500px;
}

@keyframes indicatorSlideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.loading-text-top {
  text-align: center;
}

.loading-label {
  color: rgba(255, 255, 255, 0.95);
  font-size: clamp(0.7rem, 2vw, 0.9rem);
  font-weight: 600;
  letter-spacing: clamp(3px, 0.6vw, 5px);
  text-transform: uppercase;
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #ec4899, #60a5fa);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradientFlow 6s ease infinite;
}

@keyframes gradientFlow {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.progress-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
}

.progress-track {
  position: relative;
  width: 100%;
  max-width: 100%;
  height: clamp(5px, 0.8vh, 7px);
  background: rgba(15, 23, 42, 0.8);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 
    inset 0 2px 4px rgba(0, 0, 0, 0.4),
    0 0 30px rgba(59, 130, 246, 0.15);
  border: 1px solid rgba(59, 130, 246, 0.2);
  contain: paint;
}

.progress-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  animation: shimmer 2s ease-in-out infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 200%; }
}

.progress-active {
  position: relative;
  height: 100%;
  background: linear-gradient(90deg, 
    #3b82f6 0%, 
    #8b5cf6 25%, 
    #ec4899 50%, 
    #8b5cf6 75%, 
    #3b82f6 100%);
  background-size: 200% 100%;
  border-radius: 10px;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: progressShimmer 2s linear infinite;
  box-shadow: 
    0 0 25px rgba(59, 130, 246, 0.7),
    0 0 50px rgba(139, 92, 246, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
  transform-origin: left center;
  will-change: width, transform;
}

/* Si quieres máxima fluidez en barra, usar scaleX (opcional later): */
.progress-active[data-use-transform='true'] {
	width: 100%;
	transform: scaleX(var(--progress-scale, 0));
	transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes progressShimmer {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}

.progress-glow {
  position: absolute;
  top: -3px;
  right: -5px;
  width: 40px;
  height: 12px;
  background: radial-gradient(ellipse, rgba(255, 255, 255, 0.9), transparent 70%);
  filter: blur(6px);
  animation: glowPulseStatic 1.5s ease-in-out infinite;
}

@keyframes glowPulseStatic {
  0%, 100% { 
    opacity: 0.6; 
    transform: scale(1);
  }
  50% { 
    opacity: 1; 
    transform: scale(1.2);
  }
}

.progress-percentage {
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(0.65rem, 1.5vw, 0.8rem);
  font-weight: 600;
  letter-spacing: 1px;
  font-variant-numeric: tabular-nums;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.loading-status {
  width: 100%;
  text-align: center;
  min-height: 1.2rem;
}

.status-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: clamp(0.6rem, 1.4vw, 0.75rem);
  font-weight: 500;
  letter-spacing: 0.5px;
  text-transform: none;
  animation: fadeInOut 0.5s ease-in-out;
}

@keyframes fadeInOut {
  0% { opacity: 0; transform: translateY(5px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* Elementos decorativos más sutiles */
.element {
  position: absolute;
  border: 1px solid rgba(59, 130, 246, 0.15);
  border-radius: clamp(8px, 1.5vw, 12px);
  backdrop-filter: blur(5px);
  background: rgba(59, 130, 246, 0.02);
}

.element-inner {
  position: absolute;
  inset: clamp(3px, 0.6vw, 5px);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: clamp(6px, 1.2vw, 10px);
  background: radial-gradient(circle at 30% 30%, rgba(168, 85, 247, 0.05), transparent);
}

.element-1 {
  top: 12%;
  left: 6%;
  width: clamp(60px, 10vw, 100px);
  height: clamp(60px, 10vw, 100px);
  animation: elementFloat1 10s ease-in-out infinite;
}

.element-2 {
  top: 18%;
  right: 10%;
  width: clamp(45px, 8vw, 70px);
  height: clamp(45px, 8vw, 70px);
  animation: elementFloat2 12s ease-in-out infinite;
}

.element-3 {
  bottom: 18%;
  left: 8%;
  width: clamp(80px, 12vw, 120px);
  height: clamp(35px, 5vw, 50px);
  animation: elementFloat3 14s ease-in-out infinite;
}

@keyframes elementFloat1 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translate(-10px, -20px) rotate(5deg);
    opacity: 0.6;
  }
}

@keyframes elementFloat2 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translate(15px, -15px) rotate(-5deg);
    opacity: 0.6;
  }
}

@keyframes elementFloat3 {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg);
    opacity: 0.3;
  }
  50% {
    transform: translate(-12px, 18px) rotate(3deg);
    opacity: 0.6;
  }
}

.corner-accent {
  position: absolute;
  width: clamp(40px, 7vw, 80px);
  height: clamp(40px, 7vw, 80px);
  border: clamp(1.5px, 0.3vw, 2.5px) solid rgba(59, 130, 246, 0.25);
  background: radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.05), transparent);
}

.corner-top-left {
  top: clamp(20px, 4vw, 40px);
  left: clamp(20px, 4vw, 40px);
  border-right: none;
  border-bottom: none;
  animation: cornerPulse 3s ease-in-out infinite;
}

.corner-bottom-right {
  bottom: clamp(20px, 4vw, 40px);
  right: clamp(20px, 4vw, 40px);
  border-left: none;
  border-top: none;
  animation: cornerPulse 3s ease-in-out infinite 1.5s;
}

@keyframes cornerPulse {
  0%, 100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

.decorative-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
}

.line {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.5), transparent);
  opacity: 0;
  animation: lineReveal 2s ease-out forwards;
}

.line-1 {
  top: 25%;
  left: 0;
  width: clamp(30%, 40%, 45%);
  height: 1px;
  animation-delay: 1.5s;
}

.line-2 {
  bottom: 30%;
  right: 0;
  width: clamp(25%, 35%, 40%);
  height: 1px;
  animation-delay: 2s;
}

@keyframes lineReveal {
  to {
    opacity: 0.6;
  }
}

/* ==================== RESPONSIVE OPTIMIZADO ==================== */

/* Desktop muy grande */
@media (min-width: 1920px) {
  .content-wrapper {
    gap: clamp(3rem, 6vh, 5rem);
    padding: clamp(2rem, 4vh, 4rem) clamp(2rem, 4vw, 3rem);
  }
  
  .logo-section {
    max-width: min(85vw, 900px);
  }
  
  .logo-glow-effect {
    width: min(85vw, 1000px);
    height: min(85vw, 1000px);
    filter: blur(45px);
  }
  
  .loading-indicator {
    width: min(88%, 550px);
    max-width: 550px;
    gap: 1.8rem;
    padding: 3rem 4rem;
  }
  
  .progress-track {
    height: 7px;
  }
  
  .loading-label {
    font-size: clamp(0.85rem, 1.8vw, 1.1rem);
    letter-spacing: clamp(4px, 0.8vw, 6px);
  }
}

/* Desktop normal */
@media (min-width: 1025px) and (max-width: 1919px) {
  .content-wrapper {
    gap: clamp(2rem, 5vh, 3.5rem);
  }
  
  .logo-section {
    max-width: min(88vw, 750px);
  }
  
  .loading-indicator {
    width: min(90%, 480px);
  }
}

/* Tablets horizontal */
@media (min-width: 769px) and (max-width: 1024px) {
  .content-wrapper {
    gap: clamp(1.8rem, 4vh, 2.8rem);
    padding: clamp(1.5rem, 2.5vh, 2.5rem) clamp(1.5rem, 3vw, 2rem);
  }
  
  .logo-section {
    max-width: min(85vw, 650px);
  }
  
  .logo-glow-effect {
    width: min(85vw, 750px);
    height: min(85vw, 750px);
    filter: blur(38px);
  }
  
  .loading-indicator {
    width: min(85%, 450px);
    padding: clamp(1.5rem, 2.5vh, 2.2rem) clamp(2rem, 3.5vw, 3rem);
    gap: clamp(1rem, 1.5vh, 1.3rem);
  }
  
  .element-1,
  .element-2,
  .element-3 {
    opacity: 0.4;
  }
}

/* Móviles grandes y tablets verticales */
@media (min-width: 641px) and (max-width: 768px) {
  .content-wrapper {
    gap: clamp(1.2rem, 3vh, 2rem);
    padding: clamp(1rem, 1.8vh, 1.6rem);
  }
  
  .logo-section {
    max-width: min(95vw, 600px);
    min-height: min(50vh, 400px);
  }
  
  .logo-glow-effect {
    width: min(100vw, 750px);
    height: min(100vw, 750px);
    filter: blur(35px);
  }
  
  .loading-indicator {
    width: min(92%, 440px);
    padding: clamp(1.2rem, 2vh, 1.6rem) clamp(1.6rem, 2.8vw, 2.2rem);
    gap: clamp(0.85rem, 1.2vh, 1rem);
  }
  
  .progress-track {
    height: clamp(4px, 0.7vh, 5px);
  }
  
  .element-1,
  .element-2,
  .element-3 {
    opacity: 0.35;
  }
  
  .backdrop-grid {
    opacity: 0.35;
  }
}

/* Móviles medianos */
@media (min-width: 481px) and (max-width: 640px) {
  .content-wrapper {
    gap: clamp(1rem, 2.5vh, 1.8rem);
    padding: clamp(0.8rem, 1.5vh, 1.2rem);
  }
  
  .logo-section {
    max-width: min(96vw, 550px);
    min-height: min(48vh, 380px);
  }
  
  .logo-glow-effect {
    width: min(105vw, 680px);
    height: min(105vw, 680px);
    filter: blur(32px);
  }
  
  .loading-indicator {
    width: min(94%, 400px);
    padding: clamp(1rem, 1.8vh, 1.4rem) clamp(1.4rem, 2.6vw, 2rem);
    gap: clamp(0.75rem, 1.1vh, 0.95rem);
    border-radius: clamp(16px, 2.2vw, 20px);
  }
  
  .progress-track {
    height: clamp(4px, 0.65vh, 5px);
  }
  
  .element-1,
  .element-2,
  .element-3 {
    opacity: 0.25;
  }
  
  .decorative-lines {
    opacity: 0.8;
  }
}

/* Móviles pequeños */
@media (max-width: 480px) {
  .content-wrapper {
    gap: clamp(0.9rem, 2.2vh, 1.5rem);
    padding: clamp(0.7rem, 1.3vh, 1rem);
  }
  
  .logo-section {
    max-width: min(98vw, 500px);
    min-height: min(45vh, 350px);
    width: 100%;
  }
  
  .logo-glow-effect {
    width: min(110vw, 620px);
    height: min(110vw, 620px);
    filter: blur(28px);
  }
  
  .loading-indicator {
    width: min(95%, 360px);
    padding: clamp(0.95rem, 1.6vh, 1.25rem) clamp(1.25rem, 2.4vw, 1.7rem);
    gap: clamp(0.7rem, 1vh, 0.9rem);
    border-radius: clamp(15px, 2vw, 18px);
  }
  
  .progress-track {
    height: clamp(3px, 0.6vh, 4px);
  }
  
  .loading-label {
    font-size: clamp(0.62rem, 1.7vw, 0.75rem);
    letter-spacing: clamp(2px, 0.45vw, 3.5px);
  }
  
  .status-text {
    font-size: clamp(0.53rem, 1.25vw, 0.65rem);
  }
  
  .progress-percentage {
    font-size: clamp(0.58rem, 1.35vw, 0.7rem);
  }
  
  .element-1,
  .element-2,
  .element-3 {
    display: none;
  }
  
  .decorative-lines {
    opacity: 0.6;
  }
  
  .backdrop-grid {
    opacity: 0.3;
  }
}

/* Móviles muy pequeños */
@media (max-width: 375px) {
  .content-wrapper {
    gap: clamp(0.8rem, 2vh, 1.3rem);
    padding: clamp(0.6rem, 1.2vh, 0.9rem);
  }
  
  .logo-section {
    max-width: 100vw;
    min-height: min(42vh, 320px);
    width: 100%;
  }
  
  .logo-glow-effect {
    width: min(115vw, 580px);
    height: min(115vw, 580px);
    filter: blur(25px);
  }
  
  .loading-indicator {
    width: min(96%, 340px);
    padding: clamp(0.85rem, 1.4vh, 1.1rem) clamp(1.15rem, 2.2vw, 1.5rem);
    gap: clamp(0.65rem, 0.95vh, 0.85rem);
  }
  
  .progress-track {
    height: 4px;
  }
  
  .loading-label {
    font-size: clamp(0.58rem, 1.6vw, 0.7rem);
    letter-spacing: clamp(1.8px, 0.4vw, 3px);
  }
  
  .decorative-lines {
    opacity: 0.5;
  }
}

/* Landscape móviles */
@media (max-height: 600px) and (orientation: landscape) and (max-width: 896px) {
  .content-wrapper {
    gap: clamp(0.6rem, 2vh, 1.2rem);
    padding: clamp(0.5rem, 1.2vh, 0.8rem);
  }
  
  .logo-section {
    max-width: min(65vw, 450px);
    min-height: min(60vh, 400px);
  }
  
  .logo-glow-effect {
    width: min(75vw, 550px);
    height: min(75vw, 550px);
    filter: blur(25px);
  }
  
  .loading-indicator {
    width: min(75%, 400px);
    padding: clamp(0.6rem, 1.4vh, 0.9rem) clamp(1rem, 2.2vw, 1.4rem);
    gap: clamp(0.45rem, 0.9vh, 0.65rem);
  }
  
  .progress-track {
    height: 4px;
  }
}

/* Tablets landscape */
@media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  .content-wrapper {
    gap: clamp(1.5rem, 3.5vh, 2.3rem);
  }
  
  .logo-section {
    max-width: min(65vw, 600px);
  }
  
  .loading-indicator {
    width: min(75%, 440px);
    padding: clamp(1.3rem, 2.5vh, 1.8rem) clamp(1.8rem, 3vw, 2.5rem);
    gap: clamp(0.9rem, 1.4vh, 1.2rem);
  }
}

/* Pantallas muy altas */
@media (min-height: 900px) and (max-width: 768px) {
  .content-wrapper {
    gap: clamp(2.5rem, 5.5vh, 4rem);
  }
  
  .loading-indicator {
    padding: clamp(1.8rem, 3vh, 2.5rem) clamp(2rem, 3.5vw, 3rem);
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .progress-active,
  .loading-label,
  .dot,
  .element,
  .particle,
  .logo-glow-effect,
  .corner-accent,
  .backdrop-grid,
  .radial-glow {
    animation: none !important;
  }
  
  .progress-active {
    background: #3b82f6;
  }
  
  .loading-label {
    -webkit-text-fill-color: #3b82f6;
  }
  
  .dot {
    opacity: 1;
  }
  
  .element,
  .corner-accent {
    opacity: 0.5;
  }
  
  .status-text {
    animation: none;
  }
}

/* Optimización general para animaciones (GPU) */
.particles-layer,
.logo-glow-effect,
.progress-active,
.progress-shimmer,
.progress-glow,
.element,
.corner-accent,
.particle,
.dot,
.logo-section,
.loading-indicator {
	/* Acelerar compositing y aislar repaints */
	will-change: transform, opacity, width;
	transform: translateZ(0);
	backface-visibility: hidden;
}

/* Mejorar rendimiento de partículas: usar transform en keyframes (ya lo hace) + will-change */
.particle {
	/* limitar pintura en dispositivos de bajo rendimiento */
	will-change: transform, opacity;
	/* reducir coste visual */
	filter: blur(0.6px);
}

/* Suavizar progress: preferir transform cuando sea posible */
.progress-track { 
	/* ...existing code... */
	contain: paint; /* aislar repintados */
}
.progress-active {
	/* ...existing code... */
	transform-origin: left center;
	/* forzar la GPU al cambiar width */
	will-change: width, transform;
}

/* Si quieres máxima fluidez en barra, usar scaleX (opcional later): */
.progress-active[data-use-transform='true'] {
	width: 100%;
	transform: scaleX(var(--progress-scale, 0));
	transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Reducir efectos en móviles para evitar trabas */
@media (max-width: 480px) {
	.particles-layer { opacity: 0.45; }
	.particle { animation-duration: 14s; animation-iteration-count: infinite; }
	.progress-shimmer { animation: none; } /* shimmer quita trabajo */
	.logo-glow-effect { filter: blur(20px); will-change: auto; }
	.element, .corner-accent { opacity: 0.35; will-change: auto; }
}

/* Además, opcional: limitar número de partículas en móviles vía CSS (ocultar algunos) */
@media (max-width: 480px) {
	.particles-layer > .particle:nth-child(n+9) { display: none; } /* conservar 8 partículas */
}

/* Optimización: evitar layout thrash en updateLoadingState al hacer many setInterval updates.
   (No cambia JS aquí, pero sugeriré usar menos steps o requestAnimationFrame si sigue trabando). */
</style>