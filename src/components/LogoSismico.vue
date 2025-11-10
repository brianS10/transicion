<template>
  <div class="logo-container" ref="container">
    <!-- Fondo corporativo elegante -->
    <div class="corporate-bg">
      <div class="ambient-glow"></div>
      
      <!-- ANIMACIÓN 1: Anillos de energía -->
      <div v-if="currentAnimation === 1" class="anim-1">
        <div class="energy-ring ring-1"></div>
        <div class="energy-ring ring-2"></div>
        <div class="energy-ring ring-3"></div>
      </div>
      
      <!-- ANIMACIÓN 2: Líneas de escaneo -->
      <div v-if="currentAnimation === 2" class="anim-2">
        <div class="scan-lines"></div>
        <div class="hologram-grid"></div>
      </div>
      
      <!-- ANIMACIÓN 3: Portal dimensional -->
      <div v-if="currentAnimation === 3" class="anim-3">
        <div class="portal-bg"></div>
        <div class="vortex-ring vortex-1"></div>
        <div class="vortex-ring vortex-2"></div>
        <div class="vortex-ring vortex-3"></div>
        <div class="vortex-ring vortex-4"></div>
      </div>
      
      <!-- ANIMACIÓN 4: Matrix Glitch -->
      <div v-if="currentAnimation === 4" class="anim-4">
        <div class="matrix-rain">
          <div v-for="i in 15" :key="i" class="matrix-column" :style="getMatrixColumnStyle(i)"></div>
        </div>
        <div class="glitch-overlay"></div>
      </div>
      
      <!-- ANIMACIÓN 5: Cristales flotantes -->
      <div v-if="currentAnimation === 5" class="anim-5">
        <div class="crystal-field">
          <div v-for="i in 25" :key="i" class="crystal" :style="getCrystalStyle(i)"></div>
        </div>
        <div class="aurora-effect"></div>
      </div>
      
      <!-- ANIMACIÓN 6: Ondas cuánticas -->
      <div v-if="currentAnimation === 6" class="anim-6">
        <div class="quantum-field">
          <div v-for="i in 20" :key="i" class="quantum-wave" :style="getQuantumStyle(i)"></div>
        </div>
      </div>
      
      <!-- ANIMACIÓN 7: Partículas nebulosa -->
      <div v-if="currentAnimation === 7" class="anim-7">
        <div class="nebula-particles">
          <div v-for="i in 30" :key="i" class="nebula-particle" :style="getNebulaStyle(i)"></div>
        </div>
        <div class="nebula-glow"></div>
      </div>
      
      <!-- ANIMACIÓN 8: Geometría sagrada -->
      <div v-if="currentAnimation === 8" class="anim-8">
        <div class="sacred-geometry">
          <div v-for="i in 6" :key="i" class="geometry-layer" :style="getGeometryStyle(i)"></div>
        </div>
      </div>
      
      <!-- ANIMACIÓN 9: Hexágonos tech -->
      <div v-if="currentAnimation === 9" class="anim-9">
        <div class="hexagon-grid">
          <div v-for="i in 12" :key="i" class="hexagon" :style="getHexagonStyle(i)"></div>
        </div>
      </div>
      
      <!-- ANIMACIÓN 10: Plasma energético -->
      <div v-if="currentAnimation === 10" class="anim-10">
        <div class="plasma-field">
          <div v-for="i in 8" :key="i" class="plasma-blob" :style="getPlasmaStyle(i)"></div>
        </div>
      </div>
    </div>
    
    <!-- Logo principal -->
    <div class="logo-main">
      <div class="logo-wrapper">
        
        <!-- Efectos específicos por animación -->
        <div v-if="currentAnimation === 1" class="logo-effects-1">
          <div class="logo-burst"></div>
          <div class="logo-shine"></div>
        </div>
        
        <div v-if="currentAnimation === 2" class="logo-effects-2">
          <div class="pixel-grid"></div>
          <div class="scan-wave wave-1"></div>
          <div class="scan-wave wave-2"></div>
        </div>
        
        <div v-if="currentAnimation === 3" class="logo-effects-3">
          <div class="portal-core"></div>
          <div class="energy-spiral"></div>
        </div>
        
        <div v-if="currentAnimation === 4" class="logo-effects-4">
          <div class="cube-container">
            <div class="cube">
              <div class="cube-face front"></div>
              <div class="cube-face back"></div>
              <div class="cube-face left"></div>
              <div class="cube-face right"></div>
              <div class="cube-face top"></div>
              <div class="cube-face bottom"></div>
            </div>
          </div>
        </div>
        
        <div v-if="currentAnimation === 5" class="logo-effects-5">
          <div class="energy-mandala">
            <div v-for="i in 8" :key="i" class="mandala-segment" :style="getMandalaStyle(i)"></div>
          </div>
          <div class="rune-circle">
            <div v-for="i in 12" :key="i" class="rune" :style="getRuneStyle(i)">
              <div class="rune-symbol"></div>
            </div>
          </div>
        </div>
        
        <div v-if="currentAnimation === 6" class="logo-effects-6">
          <div class="quantum-rings">
            <div v-for="i in 4" :key="i" class="q-ring" :style="{ animationDelay: `${i * 0.2}s` }"></div>
          </div>
        </div>
        
        <div v-if="currentAnimation === 7" class="logo-effects-7">
          <div class="star-burst">
            <div v-for="i in 8" :key="i" class="star-ray" :style="{ transform: `rotate(${i * 45}deg)` }"></div>
          </div>
        </div>
        
        <div v-if="currentAnimation === 8" class="logo-effects-8">
          <div class="mandala-flower">
            <div v-for="i in 12" :key="i" class="petal" :style="{ transform: `rotate(${i * 30}deg)` }"></div>
          </div>
        </div>
        
        <div v-if="currentAnimation === 9" class="logo-effects-9">
          <div class="tech-frame">
            <div class="tech-corner tl"></div>
            <div class="tech-corner tr"></div>
            <div class="tech-corner bl"></div>
            <div class="tech-corner br"></div>
          </div>
        </div>
        
        <div v-if="currentAnimation === 10" class="logo-effects-10">
          <div class="energy-pulses">
            <div v-for="i in 3" :key="i" class="pulse-ring" :style="{ animationDelay: `${i * 0.4}s` }"></div>
          </div>
        </div>
        
        <img 
          :src="logoImageSrc" 
          :alt="altText" 
          :class="['logo-image', `anim-${currentAnimation}`]"
          @load="onImageLoad"
          @error="onImageError"
        />
        
        <!-- Partículas adicionales -->
        <div v-if="[1, 5, 7].includes(currentAnimation)" class="floating-elements">
          <div class="orb orb-1"></div>
          <div class="orb orb-2"></div>
          <div class="orb orb-3"></div>
          <div class="orb orb-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from 'vue';

const props = defineProps({
  animationType: {
    type: Number,
    default: 1,
    validator: (value) => value >= 1 && value <= 10
  }
});

const container = ref(null);
const altText = 'Logo Bearing Pads';
const logoImageSrc = ref('');
const currentAnimation = ref(props.animationType);

// Funciones para estilos dinámicos
function getMatrixColumnStyle(n) {
  const left = (n / 15) * 100;
  const duration = 1 + Math.random() * 2;
  const delay = Math.random() * 0.5;
  return {
    left: `${left}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  };
}

function getCrystalStyle(n) {
  const size = 8 + Math.random() * 20;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = 3 + Math.random() * 4;
  const delay = Math.random() * 2;
  const rotation = Math.random() * 360;
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size * 1.5}px`,
    '--rotation': `${rotation}deg`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`
  };
}

function getMandalaStyle(n) {
  const angle = (n / 8) * 360;
  return {
    transform: `rotate(${angle}deg)`,
    animationDelay: `${n * 0.1}s`
  };
}

function getRuneStyle(n) {
  const angle = (n / 12) * 360;
  return {
    '--rune-angle': `${angle}deg`,
    animationDelay: `${n * 0.08}s`
  };
}

// Nuevas funciones para animaciones 6-10
function getQuantumStyle(n) {
  const size = 30 + Math.random() * 60;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = 2 + Math.random() * 3;
  return {
    left: `${x}%`,
    top: `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDuration: `${duration}s`,
    animationDelay: `${Math.random() * 2}s`
  };
}

function getNebulaStyle(n) {
  const angle = (n / 30) * 360;
  const distance = 50 + Math.random() * 150;
  const size = 20 + Math.random() * 40;
  return {
    '--angle': `${angle}deg`,
    '--distance': `${distance}px`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${n * 0.05}s`
  };
}

function getGeometryStyle(n) {
  const size = 100 + (n * 50);
  const rotation = n * 60;
  return {
    width: `${size}px`,
    height: `${size}px`,
    transform: `rotate(${rotation}deg)`,
    animationDelay: `${n * 0.15}s`
  };
}

function getHexagonStyle(n) {
  const angle = (n / 12) * 360;
  const radius = 150;
  const x = Math.cos(angle * Math.PI / 180) * radius;
  const y = Math.sin(angle * Math.PI / 180) * radius;
  return {
    transform: `translate(${x}px, ${y}px)`,
    animationDelay: `${n * 0.1}s`
  };
}

function getPlasmaStyle(n) {
  const angle = (n / 8) * 360;
  const distance = 100 + Math.random() * 50;
  const size = 60 + Math.random() * 80;
  return {
    '--plasma-angle': `${angle}deg`,
    '--plasma-distance': `${distance}px`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${n * 0.2}s`
  };
}

async function loadLogoImage() {
  try {
    const logoModule = await import('@/assets/Logo Bearing Pads.png');
    logoImageSrc.value = logoModule.default;
  } catch (error) {
    console.warn('Usando placeholder temporal...');
    logoImageSrc.value = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmZmZmO3N0b3Atb3BhY2l0eToxIiAvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZmFmYztzdG9wLW9wYWNpdHk6MSIgLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ0cmFuc3BhcmVudCIvPjx0ZXh0IHg9IjUwJSIgeT0iNDAlIiBmb250LWZhbWlseT0iSW1wYWN0LCBBcmlhbCBCbGFjaywgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIzNiIgZmlsbD0idXJsKCNnKSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iIGxldHRlci1zcGFjaW5nPSI0cHgiPkJFQVJJTkcgUEFEUzwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjcwJSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOTk5OTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgbGV0dGVyLXNwYWNpbmc9IjJweCI+SU5OT1ZBVElPTiBCWSBFVkVSRVNUPC90ZXh0Pjwvc3ZnPg==';
  }
}

onMounted(async () => {
  await loadLogoImage();
});

function onImageLoad() {
  console.log('Logo cargado exitosamente');
}

function onImageError(event) {
  console.error('Error al cargar la imagen del logo');
}
</script>

<style scoped>
.logo-container {
  width: 100%;
  height: 100%;
  min-height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
}

/* ==================== FONDO BASE ==================== */
.corporate-bg {
  position: absolute;
  inset: -50%;
  pointer-events: none;
}

.ambient-glow {
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 60%);
  animation: ambientPulse 4s ease-in-out infinite;
}

@keyframes ambientPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}

/* ==================== LOGO WRAPPER ==================== */
.logo-main {
  position: relative;
  z-index: 10;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.logo-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: min(90vw, 700px);
  max-height: min(80vh, 600px);
}

/* ==================== ANIMACIONES BASE DEL LOGO ==================== */
.logo-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  position: relative;
  z-index: 3;
  opacity: 0;
  transform-origin: center center;
}

/* ==================== ANIMACIÓN 1: 3D ESPECTACULAR ==================== */
.anim-1 .energy-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid;
  opacity: 0;
}

.anim-1 .ring-1 {
  width: min(40vw, 300px);
  height: min(40vw, 300px);
  border-color: rgba(59, 130, 246, 0.6);
  animation: ringExpand 2s ease-out forwards;
}

.anim-1 .ring-2 {
  width: min(60vw, 450px);
  height: min(60vw, 450px);
  border-color: rgba(168, 85, 247, 0.5);
  animation: ringExpand 2s ease-out 0.15s forwards;
}

.anim-1 .ring-3 {
  width: min(80vw, 600px);
  height: min(80vw, 600px);
  border-color: rgba(236, 72, 153, 0.4);
  animation: ringExpand 2s ease-out 0.3s forwards;
}

@keyframes ringExpand {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.3);
    filter: blur(10px);
  }
  40% {
    opacity: 1;
    filter: blur(5px);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.5);
    filter: blur(20px);
  }
}

.logo-effects-1 .logo-burst {
  position: absolute;
  width: min(150%, 90vw);
  height: min(150%, 90vw);
  background: radial-gradient(circle, 
    rgba(59, 130, 246, 0.4) 0%, 
    rgba(168, 85, 247, 0.3) 30%, 
    transparent 70%);
  border-radius: 50%;
  animation: logoBurst 2.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
  filter: blur(20px);
}

@keyframes logoBurst {
  0% {
    opacity: 0;
    transform: scale(0.2) rotate(0deg);
  }
  30% {
    opacity: 1;
    transform: scale(1.5) rotate(90deg);
  }
  60% {
    opacity: 0.6;
    transform: scale(1.2) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(2) rotate(360deg);
  }
}

.logo-effects-1 .logo-shine {
  position: absolute;
  top: -50%;
  left: -150%;
  width: 80px;
  height: 300%;
  background: linear-gradient(90deg, 
    transparent 0%,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(255, 255, 255, 0.8) 50%,
    rgba(255, 255, 255, 0.1) 60%,
    transparent 100%);
  transform: skewX(-20deg);
  animation: logoShine 3s ease-out 1.5s forwards;
  opacity: 0;
  filter: blur(2px);
}

@keyframes logoShine {
  0% {
    opacity: 0;
    left: -150%;
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    left: 150%;
  }
}

.logo-image.anim-1 {
  animation: logoSpectacularEntrance 3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.6)) drop-shadow(0 0 60px rgba(168, 85, 247, 0.4));
}

@keyframes logoSpectacularEntrance {
  0% {
    opacity: 0;
    transform: scale(0.3) translateY(100px) rotateX(90deg);
    filter: 
      drop-shadow(0 0 30px rgba(59, 130, 246, 0))
      blur(30px)
      brightness(3);
  }
  30% {
    opacity: 0.5;
    transform: scale(0.7) translateY(20px) rotateX(45deg);
    filter: 
      drop-shadow(0 0 50px rgba(59, 130, 246, 0.8))
      blur(10px)
      brightness(2);
  }
  60% {
    opacity: 0.9;
    transform: scale(1.08) translateY(-10px) rotateX(-5deg);
    filter: 
      drop-shadow(0 0 40px rgba(59, 130, 246, 0.7))
      blur(2px)
      brightness(1.3);
  }
  80% {
    transform: scale(0.98) translateY(5px) rotateX(2deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotateX(0deg);
    filter: 
      drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))
      drop-shadow(0 0 60px rgba(168, 85, 247, 0.4))
      blur(0)
      brightness(1.1);
  }
}

/* ==================== ANIMACIÓN 2: MATERIALIZACIÓN DIGITAL ==================== */
.anim-2 .scan-lines {
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(59, 130, 246, 0.03) 2px,
    rgba(59, 130, 246, 0.03) 4px
  );
  animation: scanMove 8s linear infinite;
}

@keyframes scanMove {
  0% { transform: translateY(0); }
  100% { transform: translateY(20px); }
}

.anim-2 .hologram-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0;
  animation: gridFadeIn 2s ease-out 0.5s forwards;
}

@keyframes gridFadeIn {
  to { opacity: 1; }
}

.logo-effects-2 .pixel-grid {
  position: absolute;
  inset: -10%;
  background-image: 
    linear-gradient(rgba(59, 130, 246, 0.4) 1px, transparent 1px),
    linear-gradient(90deg, rgba(59, 130, 246, 0.4) 1px, transparent 1px);
  background-size: 8px 8px;
  opacity: 0;
  animation: pixelConstruct 2s ease-out forwards;
  clip-path: circle(0% at 50% 50%);
}

@keyframes pixelConstruct {
  0% {
    opacity: 0;
    clip-path: circle(0% at 50% 50%);
  }
  50% {
    opacity: 1;
    clip-path: circle(60% at 50% 50%);
  }
  100% {
    opacity: 0;
    clip-path: circle(70% at 50% 50%);
  }
}

.logo-effects-2 .scan-wave {
  position: absolute;
  left: -20%;
  width: 140%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(59, 130, 246, 0.3) 20%,
    rgba(59, 130, 246, 0.8) 50%,
    rgba(59, 130, 246, 0.3) 80%,
    transparent 100%
  );
  box-shadow: 0 0 20px rgba(59, 130, 246, 0.8);
  opacity: 0;
  filter: blur(1px);
}

.logo-effects-2 .wave-1 {
  animation: scanDown 2.5s ease-out 0.3s forwards;
}

.logo-effects-2 .wave-2 {
  animation: scanDown 2.5s ease-out 0.6s forwards;
}

@keyframes scanDown {
  0% {
    top: 0%;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

.logo-image.anim-2 {
  animation: logoMaterialize 3s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.4));
}

@keyframes logoMaterialize {
  0% {
    opacity: 0;
    transform: scale(0.5);
    filter: 
      drop-shadow(0 0 20px rgba(59, 130, 246, 0))
      blur(20px)
      brightness(3)
      contrast(0.5);
  }
  30% {
    opacity: 0.3;
    transform: scale(0.8);
    filter: 
      drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))
      blur(10px)
      brightness(2)
      contrast(0.8);
  }
  60% {
    opacity: 0.7;
    transform: scale(1.05);
    filter: 
      drop-shadow(0 0 25px rgba(59, 130, 246, 0.5))
      blur(3px)
      brightness(1.3)
      contrast(1.2);
  }
  85% {
    opacity: 0.95;
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: 
      drop-shadow(0 0 20px rgba(59, 130, 246, 0.4))
      drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))
      blur(0)
      brightness(1)
      contrast(1);
  }
}

/* ==================== ANIMACIÓN 3: PORTAL DIMENSIONAL ==================== */
.anim-3 .portal-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at center,
    rgba(59, 130, 246, 0.2) 0%,
    rgba(168, 85, 247, 0.15) 30%,
    transparent 70%
  );
  animation: portalPulse 3s ease-in-out infinite;
}

@keyframes portalPulse {
  0%, 100% { 
    opacity: 0.3;
    transform: scale(1);
  }
  50% { 
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.anim-3 .vortex-ring {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 2px solid;
  transform-origin: center center;
  opacity: 0;
}

.anim-3 .vortex-1 {
  width: min(20vw, 150px);
  height: min(20vw, 150px);
  margin: calc(-1 * min(10vw, 75px));
  border-color: rgba(59, 130, 246, 0.8);
  animation: vortexSpin 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.anim-3 .vortex-2 {
  width: min(40vw, 300px);
  height: min(40vw, 300px);
  margin: calc(-1 * min(20vw, 150px));
  border-color: rgba(168, 85, 247, 0.6);
  animation: vortexSpin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
}

.anim-3 .vortex-3 {
  width: min(60vw, 450px);
  height: min(60vw, 450px);
  margin: calc(-1 * min(30vw, 225px));
  border-color: rgba(236, 72, 153, 0.5);
  animation: vortexSpin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards;
}

.anim-3 .vortex-4 {
  width: min(80vw, 600px);
  height: min(80vw, 600px);
  margin: calc(-1 * min(40vw, 300px));
  border-color: rgba(59, 130, 246, 0.4);
  animation: vortexSpin 2.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s forwards;
}

@keyframes vortexSpin {
  0% {
    opacity: 0;
    transform: scale(3) rotate(180deg);
    border-width: 8px;
  }
  30% {
    opacity: 1;
    border-width: 4px;
  }
  60% {
    opacity: 0.8;
    transform: scale(0.3) rotate(-360deg);
    border-width: 1px;
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(-540deg);
    border-width: 0px;
  }
}

.logo-effects-3 .portal-core {
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(59, 130, 246, 0.6) 0%,
    rgba(168, 85, 247, 0.4) 20%,
    rgba(236, 72, 153, 0.3) 40%,
    transparent 60%
  );
  border-radius: 50%;
  animation: portalImplode 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  opacity: 0;
  filter: blur(30px);
}

@keyframes portalImplode {
  0% {
    opacity: 0;
    transform: scale(5) rotate(0deg);
  }
  40% {
    opacity: 1;
    transform: scale(0.2) rotate(360deg);
  }
  60% {
    opacity: 1;
    transform: scale(0.1) rotate(540deg);
  }
  100% {
    opacity: 0;
    transform: scale(1.5) rotate(720deg);
  }
}

.logo-effects-3 .energy-spiral {
  position: absolute;
  inset: -50%;
  background: conic-gradient(
    from 0deg,
    transparent 0deg,
    rgba(59, 130, 246, 0.4) 90deg,
    transparent 180deg,
    rgba(168, 85, 247, 0.4) 270deg,
    transparent 360deg
  );
  animation: spiralRotate 2s linear forwards;
  opacity: 0;
  filter: blur(15px);
}

@keyframes spiralRotate {
  0% {
    opacity: 0;
    transform: rotate(0deg) scale(3);
  }
  30% {
    opacity: 1;
  }
  70% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: rotate(720deg) scale(0.5);
  }
}

.logo-image.anim-3 {
  animation: logoPortalEntry 3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.6));
}

@keyframes logoPortalEntry {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
    filter: 
      drop-shadow(0 0 50px rgba(59, 130, 246, 0))
      blur(30px)
      brightness(5)
      hue-rotate(180deg);
  }
  30% {
    opacity: 0.5;
    transform: scale(0.3) rotate(180deg);
    filter: 
      drop-shadow(0 0 60px rgba(59, 130, 246, 1))
      blur(15px)
      brightness(3)
      hue-rotate(90deg);
  }
  60% {
    opacity: 0.9;
    transform: scale(1.1) rotate(350deg);
    filter: 
      drop-shadow(0 0 40px rgba(59, 130, 246, 0.8))
      blur(3px)
      brightness(1.5)
      hue-rotate(20deg);
  }
  85% {
    transform: scale(0.95) rotate(365deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(360deg);
    filter: 
      drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))
      drop-shadow(0 0 60px rgba(168, 85, 247, 0.4))
      blur(0)
      brightness(1)
      hue-rotate(0deg);
  }
}

/* ==================== CONTINÚA EN SIGUIENTE BLOQUE... ==================== */

/* ==================== ANIMACIÓN 4: MATRIX GLITCH ==================== */
.anim-4 .matrix-rain {
  position: absolute;
  inset: 0;
  overflow: hidden;
  opacity: 0.5;
}

.anim-4 .matrix-column {
  position: absolute;
  top: -100%;
  width: 2px;
  height: 100px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(59, 130, 246, 0.8) 50%,
    transparent 100%
  );
  animation: matrixFall 2s linear infinite;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
}

@keyframes matrixFall {
  0% {
    top: -100%;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: 100%;
    opacity: 0;
  }
}

.anim-4 .glitch-overlay {
  position: absolute;
  inset: 0;
  background: 
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(59, 130, 246, 0.02) 2px,
      rgba(59, 130, 246, 0.02) 4px
    );
  animation: glitchScan 0.3s steps(1) infinite;
}

@keyframes glitchScan {
  0%, 100% { transform: translateX(0); }
  33% { transform: translateX(-2px); }
  66% { transform: translateX(2px); }
}

.logo-effects-4 .cube-container {
  position: absolute;
  width: 200px;
  height: 200px;
  perspective: 1000px;
  animation: cubeAppear 2s ease-out forwards;
  opacity: 0;
}

@keyframes cubeAppear {
  0% {
    opacity: 0;
    transform: scale(0) rotate(0deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.3) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(0) rotate(360deg);
  }
}

.logo-effects-4 .cube {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: cubeRotate 2s linear;
}

@keyframes cubeRotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.logo-effects-4 .cube-face {
  position: absolute;
  width: 200px;
  height: 200px;
  border: 2px solid rgba(59, 130, 246, 0.5);
  background: radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent);
}

.logo-effects-4 .front  { transform: translateZ(100px); }
.logo-effects-4 .back   { transform: translateZ(-100px) rotateY(180deg); }
.logo-effects-4 .left   { transform: translateX(-100px) rotateY(-90deg); }
.logo-effects-4 .right  { transform: translateX(100px) rotateY(90deg); }
.logo-effects-4 .top    { transform: translateY(-100px) rotateX(90deg); }
.logo-effects-4 .bottom { transform: translateY(100px) rotateX(-90deg); }

.logo-image.anim-4 {
  animation: logoGlitchEntry 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
}

@keyframes logoGlitchEntry {
  0% {
    opacity: 0;
    transform: scale(0.3) skewX(20deg);
    filter: 
      drop-shadow(0 0 50px rgba(59, 130, 246, 0))
      blur(20px)
      contrast(5);
  }
  15% {
    opacity: 0.7;
    transform: scale(0.9) skewX(-10deg);
    filter: 
      drop-shadow(0 0 40px rgba(59, 130, 246, 1))
      blur(5px)
      contrast(3);
  }
  20% {
    transform: scale(0.95) skewX(5deg);
  }
  25% {
    transform: scale(0.92) skewX(-3deg);
  }
  30% {
    transform: scale(0.97) skewX(2deg);
  }
  35% {
    transform: scale(0.94) skewX(-1deg);
  }
  50% {
    opacity: 1;
    transform: scale(1.05) skewX(0deg);
    filter: 
      drop-shadow(0 0 30px rgba(59, 130, 246, 0.7))
      blur(2px)
      contrast(1.5);
  }
  70% {
    transform: scale(0.98) skewX(0deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) skewX(0deg);
    filter: 
      drop-shadow(0 0 20px rgba(59, 130, 246, 0.5))
      drop-shadow(0 0 40px rgba(168, 85, 247, 0.3))
      blur(0)
      contrast(1);
  }
}

/* ==================== ANIMACIÓN 5: CRISTALIZACIÓN ==================== */
.anim-5 .crystal-field {
  position: absolute;
  inset: 0;
  overflow: hidden;
}

.anim-5 .crystal {
  position: absolute;
  background: linear-gradient(135deg, 
    rgba(59, 130, 246, 0.6) 0%,
    rgba(168, 85, 247, 0.4) 50%,
    rgba(236, 72, 153, 0.3) 100%);
  clip-path: polygon(50% 0%, 100% 35%, 80% 100%, 20% 100%, 0% 35%);
  animation: crystalFloat 4s ease-in-out infinite;
  filter: blur(1px);
  box-shadow: 
    0 0 15px rgba(59, 130, 246, 0.5),
    inset 0 0 10px rgba(255, 255, 255, 0.3);
  opacity: 0;
}

@keyframes crystalFloat {
  0%, 100% {
    opacity: 0;
    transform: rotate(var(--rotation)) translateY(0) scale(0.5);
  }
  50% {
    opacity: 0.8;
    transform: rotate(calc(var(--rotation) + 180deg)) translateY(-50px) scale(1);
  }
}

.anim-5 .aurora-effect {
  position: absolute;
  inset: 0;
  background: 
    linear-gradient(45deg, 
      transparent 0%,
      rgba(59, 130, 246, 0.05) 25%,
      rgba(168, 85, 247, 0.05) 50%,
      rgba(236, 72, 153, 0.05) 75%,
      transparent 100%);
  animation: auroraMove 8s ease-in-out infinite;
  opacity: 0.5;
}

@keyframes auroraMove {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(50%) translateY(-30px);
  }
}

.logo-effects-5 .energy-mandala {
  position: absolute;
  width: min(60vw, 450px);
  height: min(60vw, 450px);
  animation: mandalaRotate 3s linear forwards;
  opacity: 0;
}

.logo-effects-5 .rune-circle {
  position: absolute;
  width: min(80vw, 600px);
  height: min(80vw, 600px);
  animation: runeCircleAppear 2.5s ease-out 0.5s forwards;
  opacity: 0;
}

@keyframes mandalaRotate {
  0% {
    opacity: 0;
    transform: rotate(0deg) scale(0);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(360deg) scale(2);
  }
}

.logo-effects-5 .mandala-segment {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 2px;
  background: linear-gradient(
    to right,
    transparent 0%,
    rgba(59, 130, 246, 0.8) 50%,
    transparent 100%
  );
  transform-origin: 0 50%;
  animation: segmentPulse 0.5s ease-out forwards;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
  opacity: 0;
}

@keyframes segmentPulse {
  0% {
    opacity: 0;
    width: 0;
  }
  100% {
    opacity: 1;
    width: 150px;
  }
}

.logo-effects-5 .rune-circle {
  position: absolute;
  width: min(80vw, 600px);
  height: min(80vw, 600px);
  animation: runeCircleAppear 2.5s ease-out 0.5s forwards;
  opacity: 0;
}

@keyframes runeCircleAppear {
  0% {
    opacity: 0;
    transform: scale(0.3) rotate(0deg);
  }
  60% {
    opacity: 1;
    transform: scale(1.1) rotate(180deg);
  }
  100% {
    opacity: 0;
    transform: scale(1.5) rotate(360deg);
  }
}

.logo-effects-5 .rune {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  transform-origin: center center;
  animation: runeOrbit 2.5s ease-out forwards;
  opacity: 0;
}

@keyframes runeOrbit {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--rune-angle)) translateX(0);
  }
  40% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--rune-angle)) translateX(200px);
  }
}

.logo-effects-5 .rune-symbol {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: runeGlow 0.5s ease-in-out infinite alternate;
  box-shadow: 0 0 15px rgba(96, 165, 250, 0.8);
}

@keyframes runeGlow {
  to {
    filter: brightness(1.5);
    box-shadow: 0 0 25px rgba(96, 165, 250, 1);
  }
}

.logo-image.anim-5 {
  animation: logoCrystallize 3.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.6));
}

@keyframes logoCrystallize {
  0% {
    opacity: 0;
    transform: scale(0.2);
    filter: 
      drop-shadow(0 0 60px rgba(59, 130, 246, 0))
      blur(30px)
      brightness(5)
      saturate(0);
  }
  20% {
    opacity: 0.3;
    transform: scale(0.6);
    filter: 
      drop-shadow(0 0 50px rgba(59, 130, 246, 0.8))
      blur(15px)
      brightness(3)
      saturate(0.5);
  }
  40% {
    opacity: 0.7;
    transform: scale(0.95);
    filter: 
      drop-shadow(0 0 40px rgba(59, 130, 246, 0.9))
      blur(5px)
      brightness(2)
      saturate(1);
  }
  60% {
    opacity: 0.95;
    transform: scale(1.08);
    filter: 
      drop-shadow(0 0 35px rgba(59, 130, 246, 0.8))
      blur(2px)
      brightness(1.5)
      saturate(1.3);
  }
  80% {
    transform: scale(0.98);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: 
      drop-shadow(0 0 30px rgba(59, 130, 246, 0.6))
      drop-shadow(0 0 50px rgba(168, 85, 247, 0.4))
      blur(0)
      brightness(1)
      saturate(1);
  }
}

/* ==================== ANIMACIÓN 6: QUANTUM ==================== */
.anim-6 .quantum-field {
  position: absolute;
  inset: 0;
}

.anim-6 .quantum-wave {
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(59, 130, 246, 0.3);
  opacity: 0;
  animation: quantumPulse 3s ease-in-out infinite;
}

@keyframes quantumPulse {
  0%, 100% {
    opacity: 0;
    transform: scale(0.5);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.logo-effects-6 .quantum-rings {
  position: absolute;
  inset: -30%;
}

.logo-effects-6 .q-ring {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(59, 130, 246, 0.4);
  border-radius: 50%;
  animation: qRingExpand 2.5s ease-out forwards;
  opacity: 0;
}

@keyframes qRingExpand {
  0% { 
    opacity: 0; 
    transform: scale(0.3); 
    border-width: 5px;
  }
  50% { 
    opacity: 1; 
    border-width: 2px;
  }
  100% { 
    opacity: 0; 
    transform: scale(2);
    border-width: 0px;
  }
}

.logo-image.anim-6 {
  animation: logoQuantumFade 3s ease-out forwards;
  filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.7));
}

@keyframes logoQuantumFade {
  0% {
    opacity: 0;
    transform: scale(0.4);
    filter: drop-shadow(0 0 60px rgba(59, 130, 246, 0)) blur(20px);
  }
  60% {
    opacity: 1;
    transform: scale(1.03);
    filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.9)) blur(2px);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.7)) blur(0);
  }
}

/* ==================== ANIMACIÓN 7: ONDAS CÓSMICAS MEJORADA ==================== */
.anim-7 .nebula-particles {
  position: absolute;
  inset: 0;
}

.anim-7 .nebula-particle {
  position: absolute;
  top: 50%;
  left: 50%;
  background: radial-gradient(
    circle, 
    rgba(139, 92, 246, 0.8) 0%, 
    rgba(236, 72, 153, 0.6) 50%, 
    transparent 100%
  );
  border-radius: 50%;
  opacity: 0;
  animation: cosmicWaveExpand 3s ease-out forwards;
  filter: blur(5px);
  box-shadow: 
    0 0 20px rgba(139, 92, 246, 0.6),
    0 0 40px rgba(236, 72, 153, 0.4);
}

@keyframes cosmicWaveExpand {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(0) scale(0);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(80px) scale(1.5);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(var(--distance)) scale(0.5);
  }
}

.anim-7 .nebula-glow {
  position: absolute;
  inset: -50%;
  background: 
    radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.3), transparent 50%),
    radial-gradient(circle at 60% 60%, rgba(236, 72, 153, 0.2), transparent 50%);
  animation: cosmicGlowPulse 5s ease-in-out infinite;
  filter: blur(40px);
}

@keyframes cosmicGlowPulse {
  0%, 100% { 
    opacity: 0.4; 
    transform: scale(1) rotate(0deg); 
  }
  50% { 
    opacity: 0.8; 
    transform: scale(1.3) rotate(180deg); 
  }
}

.logo-effects-7 .star-burst {
  position: absolute;
  width: 300px;
  height: 300px;
}

.logo-effects-7 .star-ray {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 3px;
  background: linear-gradient(
    to right, 
    rgba(255, 255, 255, 0.9), 
    rgba(139, 92, 246, 0.8),
    transparent
  );
  transform-origin: 0 50%;
  animation: cosmicRayBurst 2.5s ease-out forwards;
  opacity: 0;
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.8);
  filter: blur(1px);
}

@keyframes cosmicRayBurst {
  0% { 
    opacity: 0; 
    width: 0; 
    filter: blur(5px);
  }
  40% { 
    opacity: 1; 
    filter: blur(1px);
  }
  100% { 
    opacity: 0; 
    width: 200px; 
    filter: blur(3px);
  }
}

.logo-image.anim-7 {
  animation: logoCosmicRise 3.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  filter: drop-shadow(0 0 50px rgba(139, 92, 246, 0.6));
}

@keyframes logoCosmicRise {
  0% {
    opacity: 0;
    transform: scale(0.4) translateY(80px) rotate(-15deg);
    filter: 
      drop-shadow(0 0 80px rgba(139, 92, 246, 0)) 
      blur(30px)
      brightness(4)
      saturate(0);
  }
  40% {
    opacity: 0.6;
    transform: scale(0.85) translateY(20px) rotate(-5deg);
    filter: 
      drop-shadow(0 0 60px rgba(139, 92, 246, 1)) 
      blur(10px)
      brightness(2.5)
      saturate(1.5);
  }
  70% {
    opacity: 1;
    transform: scale(1.05) translateY(-15px) rotate(2deg);
    filter: 
      drop-shadow(0 0 50px rgba(139, 92, 246, 0.9)) 
      blur(3px)
      brightness(1.3)
      saturate(1.2);
  }
  85% {
    transform: scale(0.98) translateY(5px) rotate(-1deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0) rotate(0deg);
    filter: 
      drop-shadow(0 0 50px rgba(139, 92, 246, 0.6))
      drop-shadow(0 0 30px rgba(236, 72, 153, 0.4))
      blur(0)
      brightness(1)
      saturate(1);
  }
}

/* ==================== ANIMACIÓN 8: TELETRANSPORTE ELÉCTRICO ==================== */
.anim-8 .sacred-geometry {
  position: absolute;
  inset: -30%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.anim-8 .geometry-layer {
  position: absolute;
  background: transparent;
  border: none;
  opacity: 0;
  animation: electricArc 2.5s ease-out forwards;
}

@keyframes electricArc {
  0% { 
    opacity: 0;
    box-shadow: none;
  }
  20% { 
    opacity: 1;
    box-shadow: 
      0 0 30px rgba(59, 130, 246, 1),
      0 0 60px rgba(139, 92, 246, 0.8),
      inset 0 0 30px rgba(59, 130, 246, 0.5);
  }
  40% {
    box-shadow: 
      0 0 50px rgba(59, 130, 246, 0.8),
      0 0 100px rgba(236, 72, 153, 0.6);
  }
  100% { 
    opacity: 0;
    box-shadow: none;
  }
}

.logo-effects-8 .mandala-flower {
  position: absolute;
  width: 400px;
  height: 400px;
  opacity: 0;
}

.logo-effects-8 .petal {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 150px;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(59, 130, 246, 1) 30%,
    rgba(139, 92, 246, 0.8) 60%,
    transparent 100%
  );
  transform-origin: 50% 0%;
  opacity: 0;
  animation: electricBolt 2s ease-out forwards;
  filter: blur(2px);
  box-shadow: 
    0 0 20px rgba(59, 130, 246, 1),
    0 0 40px rgba(139, 92, 246, 0.6);
}

@keyframes electricBolt {
  0% { 
    opacity: 0; 
    transform: translate(-50%, 0) scaleY(0);
    filter: blur(5px);
  }
  15% { 
    opacity: 1; 
    transform: translate(-50%, 0) scaleY(0.5);
    filter: blur(3px);
  }
  30% {
    opacity: 0.8;
    transform: translate(-50%, 0) scaleY(1) scaleX(1.5);
    filter: blur(2px);
  }
  50% {
    opacity: 0.6;
    transform: translate(-50%, 0) scaleY(1.2) scaleX(0.8);
    filter: blur(1px);
  }
  100% { 
    opacity: 0; 
    transform: translate(-50%, 0) scaleY(0.5) scaleX(2);
    filter: blur(8px);
  }
}

.logo-image.anim-8 {
  animation: logoTeleport 3.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  filter: drop-shadow(0 0 35px rgba(59, 130, 246, 0.5));
}

@keyframes logoTeleport {
  0% {
    opacity: 0;
    transform: scale(2) translateY(-100px);
    filter: 
      drop-shadow(0 0 80px rgba(59, 130, 246, 1)) 
      blur(40px)
      brightness(10)
      contrast(0);
  }
  15% {
    opacity: 0.3;
    transform: scale(1.5) translateY(-50px);
    filter: 
      drop-shadow(0 0 60px rgba(59, 130, 246, 1)) 
      blur(25px)
      brightness(6)
      contrast(0.3);
  }
  30% {
    opacity: 0.6;
    transform: scale(1.2) translateY(-20px);
    filter: 
      drop-shadow(0 0 50px rgba(59, 130, 246, 0.9)) 
      blur(15px)
      brightness(3)
      contrast(0.8);
  }
  50% {
    opacity: 0.9;
    transform: scale(0.9) translateY(10px);
    filter: 
      drop-shadow(0 0 40px rgba(59, 130, 246, 0.8)) 
      blur(5px)
      brightness(1.8)
      contrast(1.5);
  }
  70% {
    opacity: 1;
    transform: scale(1.05) translateY(-5px);
    filter: 
      drop-shadow(0 0 35px rgba(59, 130, 246, 0.7)) 
      blur(2px)
      brightness(1.3)
      contrast(1.2);
  }
  85% {
    transform: scale(0.98) translateY(2px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: 
      drop-shadow(0 0 35px rgba(59, 130, 246, 0.5))
      drop-shadow(0 0 20px rgba(139, 92, 246, 0.4))
      blur(0)
      brightness(1)
      contrast(1);
  }
}

/* ==================== ANIMACIÓN 9: ONDAS DE SONIDO / SONAR ==================== */
.anim-9 .hexagon-grid {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.anim-9 .hexagon {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid rgba(59, 130, 246, 0.6);
  opacity: 0;
  animation: sonarPulse 3s ease-out forwards;
  box-shadow: 
    0 0 20px rgba(59, 130, 246, 0.6),
    inset 0 0 20px rgba(59, 130, 246, 0.3);
}

@keyframes sonarPulse {
  0% { 
    opacity: 0; 
    transform: scale(0.3);
    border-width: 6px;
    filter: blur(5px);
  }
  20% { 
    opacity: 1; 
    border-width: 4px;
    filter: blur(3px);
  }
  40% {
    opacity: 0.8;
    transform: scale(1);
    border-width: 3px;
    filter: blur(2px);
  }
  70% {
    opacity: 0.4;
    transform: scale(2);
    border-width: 1px;
    filter: blur(4px);
  }
  100% { 
    opacity: 0; 
    transform: scale(3.5);
    border-width: 0px;
    filter: blur(10px);
  }
}

.logo-effects-9 .tech-frame {
  position: absolute;
  inset: -20%;
  opacity: 0;
}

.logo-effects-9 .tech-corner {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid rgba(59, 130, 246, 0.5);
  opacity: 0;
  animation: soundWaveExpand 2.5s ease-out forwards;
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
}

@keyframes soundWaveExpand {
  0% {
    opacity: 0;
    transform: scale(0.5);
    border-width: 4px;
  }
  30% {
    opacity: 0.8;
    border-width: 2px;
  }
  70% {
    opacity: 0.4;
    transform: scale(2);
    border-width: 1px;
  }
  100% {
    opacity: 0;
    transform: scale(3);
    border-width: 0px;
  }
}

.logo-effects-9 .tl { 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  animation-delay: 0.5s;
}

.logo-effects-9 .tr { 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  animation-delay: 0.8s;
}

.logo-effects-9 .bl { 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  animation-delay: 1.1s;
}

.logo-effects-9 .br { 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  animation-delay: 1.4s;
}

.logo-image.anim-9 {
  animation: logoSonarReveal 3.5s cubic-bezier(0.34, 1, 0.64, 1) forwards;
  filter: drop-shadow(0 0 25px rgba(59, 130, 246, 0.6));
}

@keyframes logoSonarReveal {
  0% {
    opacity: 0;
    transform: scale(0.1);
    filter: 
      drop-shadow(0 0 100px rgba(59, 130, 246, 0)) 
      blur(50px)
      brightness(8)
      saturate(0);
  }
  20% {
    opacity: 0.2;
    transform: scale(0.4);
    filter: 
      drop-shadow(0 0 80px rgba(59, 130, 246, 0.6)) 
      blur(30px)
      brightness(5)
      saturate(0.3);
  }
  40% {
    opacity: 0.5;
    transform: scale(0.7);
    filter: 
      drop-shadow(0 0 60px rgba(59, 130, 246, 0.8)) 
      blur(15px)
      brightness(3)
      saturate(0.7);
  }
  60% {
    opacity: 0.8;
    transform: scale(1.1);
    filter: 
      drop-shadow(0 0 40px rgba(59, 130, 246, 0.9)) 
      blur(5px)
      brightness(1.8)
      saturate(1.2);
  }
  80% {
    opacity: 1;
    transform: scale(0.95);
    filter: 
      drop-shadow(0 0 30px rgba(59, 130, 246, 0.8)) 
      blur(2px)
      brightness(1.3)
      saturate(1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: 
      drop-shadow(0 0 25px rgba(59, 130, 246, 0.6))
      drop-shadow(0 0 15px rgba(139, 92, 246, 0.4))
      blur(0)
      brightness(1)
      saturate(1);
  }
}

/* ==================== RESPONSIVE PARA ANIMACIONES 8 Y 9 ==================== */
@media (max-width: 1024px) {
  .logo-effects-8 .mandala-flower { width: 350px; height: 350px; }
  .logo-effects-8 .petal { height: 130px; width: 3px; }
  .anim-9 .hexagon { width: 180px; height: 180px; }
  .logo-effects-9 .tech-corner { width: 110px; height: 110px; }
}

@media (max-width: 768px) {
  .logo-effects-8 .mandala-flower { width: 300px; height: 300px; }
  .logo-effects-8 .petal { height: 110px; width: 3px; }
  .anim-9 .hexagon { width: 160px; height: 160px; border-width: 2px; }
  .logo-effects-9 .tech-corner { width: 100px; height: 100px; }
}

@media (max-width: 480px) {
  .logo-effects-8 .mandala-flower { width: 250px; height: 250px; }
  .logo-effects-8 .petal { height: 90px; width: 2px; }
  .anim-9 .hexagon { width: 140px; height: 140px; }
  .logo-effects-9 .tech-corner { width: 90px; height: 90px; }
}

@media (max-width: 375px) {
  .logo-effects-8 .mandala-flower { width: 220px; height: 220px; }
  .logo-effects-8 .petal { height: 75px; }
  .anim-9 .hexagon { width: 120px; height: 120px; }
  .logo-effects-9 .tech-corner { width: 80px; height: 80px; }
}

@media (min-width: 1920px) {
  .logo-effects-8 .mandala-flower { width: 450px; height: 450px; }
  .logo-effects-8 .petal { height: 180px; width: 5px; }
  .anim-9 .hexagon { width: 240px; height: 240px; border-width: 4px; }
  .logo-effects-9 .tech-corner { width: 140px; height: 140px; }
}

@media (max-height: 600px) and (orientation: landscape) {
  .logo-effects-8 .mandala-flower { width: 280px; height: 280px; }
  .logo-effects-8 .petal { height: 100px; }
  .anim-9 .hexagon { width: 150px; height: 150px; }
}

/* ==================== REDUCED MOTION ==================== */
@media (prefers-reduced-motion: reduce) {
  .logo-image.anim-8,
  .logo-image.anim-9 {
    animation: logoSimpleFade 1.5s ease forwards !important;
  }
  
  .anim-8 .geometry-layer,
  .logo-effects-8 .petal,
  .anim-9 .hexagon,
  .logo-effects-9 .tech-corner {
    animation: none !important;
    display: none;
  }
 }


@keyframes logoSimpleFade {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ==================== ANIMACIÓN 10: EXPLOSIÓN DE ENERGÍA REDISEÑADA ==================== */
.anim-10 .plasma-field {
  position: absolute;
  inset: -20%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.anim-10 .plasma-blob {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  opacity: 0;
  animation: energyBurst 2.5s ease-out forwards;
  background: radial-gradient(
    circle, 
    rgba(236, 72, 153, 0.8) 0%,
    rgba(139, 92, 246, 0.6) 40%,
    rgba(59, 130, 246, 0.4) 70%,
    transparent 100%
  );
  filter: blur(15px);
  box-shadow: 
    0 0 40px rgba(236, 72, 153, 0.8),
    0 0 80px rgba(139, 92, 246, 0.5),
    inset 0 0 40px rgba(255, 255, 255, 0.3);
}

@keyframes energyBurst {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--plasma-angle)) translateX(0) scale(0);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--plasma-angle)) translateX(calc(var(--plasma-distance) * 0.5)) scale(1.5);
  }
  70% {
    opacity: 0.6;
    transform: translate(-50%, -50%) rotate(var(--plasma-angle)) translateX(var(--plasma-distance)) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(var(--plasma-angle)) translateX(calc(var(--plasma-distance) * 1.3)) scale(0.3);
  }
}

.logo-effects-10 .energy-pulses {
  position: absolute;
  inset: -50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-effects-10 .pulse-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 4px solid rgba(236, 72, 153, 0.6);
  opacity: 0;
  animation: explosionRing 2.5s ease-out forwards;
  box-shadow: 
    0 0 30px rgba(236, 72, 153, 0.8),
    inset 0 0 30px rgba(236, 72, 153, 0.4);
}

@keyframes explosionRing {
  0% { 
    opacity: 0; 
    transform: scale(0.2);
    border-width: 8px;
    filter: blur(10px);
  }
  30% { 
    opacity: 1; 
    border-width: 5px;
    filter: blur(5px);
  }
  70% {
    opacity: 0.5;
    border-width: 2px;
    filter: blur(3px);
  }
  100% { 
    opacity: 0; 
    transform: scale(2.5);
    border-width: 0px;
    filter: blur(15px);
  }
}

.logo-image.anim-10 {
  animation: logoEnergyExplosion 3.5s cubic-bezier(0.34, 1, 0.64, 1) forwards;
  filter: drop-shadow(0 0 45px rgba(236, 72, 153, 0.6));
}

@keyframes logoEnergyExplosion {
  0% {
    opacity: 0;
    transform: scale(0.1);
    filter: 
      drop-shadow(0 0 100px rgba(236, 72, 153, 0)) 
      blur(50px)
      brightness(10)
      saturate(0)
      hue-rotate(180deg);
  }
  15% {
    opacity: 0.3;
    transform: scale(0.4);
    filter: 
      drop-shadow(0 0 80px rgba(236, 72, 153, 0.8)) 
      blur(35px)
      brightness(6)
      saturate(0.4)
      hue-rotate(120deg);
  }
  35% {
    opacity: 0.6;
    transform: scale(0.8);
    filter: 
      drop-shadow(0 0 60px rgba(236, 72, 153, 1)) 
      blur(20px)
      brightness(3)
      saturate(1)
      hue-rotate(60deg);
  }
  55% {
    opacity: 0.9;
    transform: scale(1.15);
    filter: 
      drop-shadow(0 0 50px rgba(236, 72, 153, 0.9)) 
      blur(8px)
      brightness(1.8)
      saturate(1.5)
      hue-rotate(30deg);
  }
  75% {
    opacity: 1;
    transform: scale(0.95);
    filter: 
      drop-shadow(0 0 45px rgba(236, 72, 153, 0.8)) 
      blur(3px)
      brightness(1.3)
      saturate(1.2)
      hue-rotate(10deg);
  }
  90% {
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: 
      drop-shadow(0 0 45px rgba(236, 72, 153, 0.6))
      drop-shadow(0 0 25px rgba(139, 92, 246, 0.4))
      blur(0)
      brightness(1)
      saturate(1)
      hue-rotate(0deg);
  }
}

/* ==================== RESPONSIVE PARA ANIMACIÓN 10 ==================== */
@media (max-width: 1024px) {
  .anim-10 .plasma-blob {
    filter: blur(12px);
  }
}

@media (max-width: 768px) {
  .anim-10 .plasma-blob {
    filter: blur(10px);
  }
  
  .logo-effects-10 .pulse-ring {
    border-width: 3px;
  }
}

@media (max-width: 480px) {
  .anim-10 .plasma-blob {
    filter: blur(8px);
  }
  
  .logo-effects-10 .pulse-ring {
    border-width: 2px;
  }
}

@media (max-width: 375px) {
  .anim-10 .plasma-blob {
    display: none;
  }
}

@media (min-width: 1920px) {
  .anim-10 .plasma-blob {
    filter: blur(20px);
  }
  
  .logo-effects-10 .pulse-ring {
    border-width: 5px;
  }
}

@media (max-height: 600px) and (orientation: landscape) {
  .anim-10 .plasma-field {
    inset: -15%;
  }
}

/* ==================== REDUCED MOTION ==================== */
@media (prefers-reduced-motion: reduce) {
  .logo-image.anim-10 {
    animation: logoSimpleFade 1.5s ease forwards !important;
  }
  
  .anim-10 .plasma-blob,
  .logo-effects-10 .pulse-ring {
    animation: none !important;
    display: none;
  }
}

@keyframes logoSimpleFade {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>