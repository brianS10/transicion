<template>
  <div class="sismico-container">
    <img src="@/assets/Logo Bearing Pads.png" alt="Logo Bearing Pads" class="logo-animado" />
  </div>
</template>

<script setup>
// ...existing code...
</script>

<style scoped>
.sismico-container {
  /* Hacemos que el contenedor ocupe el espacio disponible */
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.logo-animado {
  /* Hacemos que la imagen sea responsive al contenedor */
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  
  /* ========================================
     ELIGE TU ANIMACIÓN AQUÍ
     ========================================
     Descomenta SOLO UNA de las siguientes líneas
     para activar la animación que quieras.
     
     Pasos para cambiar de animación:
     1. Comenta la animación actual agregando // al inicio
     2. Descomenta la animación que quieras quitando //
     3. Guarda el archivo (Ctrl+S)
     4. La animación cambiará automáticamente
  */
  
  /* ANIMACIÓN 1: Revelado de Izquierda a Derecha (ACTIVA) */
  animation: revealLogo 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  clip-path: inset(0 100% 0 0);
  
  /*ANIMACIÓN 2: Zoom In con Rotación */
  /*animation: zoomRotate 2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; */
  
  /* ANIMACIÓN 3: Explosión desde el Centro */
  /*animation: explodeFromCenter 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; */
  /*clip-path: circle(0% at 50% 50%); */
  
  /* ANIMACIÓN 4: Flip 3D Horizontal */
  /*animation: flip3D 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; */
  
  /* ANIMACIÓN 5: Slide desde Abajo con Rebote */
  /*animation: slideUpBounce 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; */
  
  /* ANIMACIÓN 6: Desenfoque hacia Enfoque */
  /*animation: blurToFocus 2.5s ease-out forwards; */
  
  /* ANIMACIÓN 7: Efecto Glitch/Matrix */
  /*animation: glitchReveal 2s steps(10) forwards; */
  
  /* ANIMACIÓN 8: Escala con Pulso */
  /*animation: pulsateScale 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards; */
  
  /* ANIMACIÓN 9: Fade desde 4 Esquinas */
  /*animation: cornerFade 2s ease-out forwards; 
  clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%); */
  
  /* ANIMACIÓN 10: Slide Diagonal con Sombra */
  /*animation: diagonalSlide 2.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; */
  
  /* ANIMACIÓN 11: Ondas de Tinta */
  /*animation: inkSpread 3s ease-out forwards; 
  clip-path: ellipse(0% 0% at 50% 50%); */
  
  /* Sombras (se ajustan con algunas animaciones) */
  filter: drop-shadow(0 0 40px rgba(220, 38, 38, 0.5))
          drop-shadow(0 0 80px rgba(220, 38, 38, 0.3))
          drop-shadow(0 10px 60px rgba(0, 0, 0, 0.4));
}

/* ========================================
   DEFINICIONES DE ANIMACIONES
   ======================================== */

/* 1. REVELADO DE IZQUIERDA A DERECHA */
@keyframes revealLogo {
  0% {
    clip-path: inset(0 100% 0 0);
    filter: drop-shadow(0 0 0 rgba(220, 38, 38, 0))
            drop-shadow(0 0 0 rgba(220, 38, 38, 0))
            drop-shadow(0 0 0 rgba(0, 0, 0, 0));
  }
  100% {
    clip-path: inset(0 0 0 0);
    filter: drop-shadow(0 0 40px rgba(220, 38, 38, 0.5))
            drop-shadow(0 0 80px rgba(220, 38, 38, 0.3))
            drop-shadow(0 10px 60px rgba(0, 0, 0, 0.4));
  }
}

/* 2. ZOOM IN CON ROTACIÓN */
@keyframes zoomRotate {
  0% {
    opacity: 0;
    transform: scale(0) rotate(-180deg);
    filter: drop-shadow(0 0 100px rgba(220, 38, 38, 1));
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
    filter: drop-shadow(0 0 40px rgba(220, 38, 38, 0.5));
  }
}

/* 3. EXPLOSIÓN DESDE EL CENTRO */
@keyframes explodeFromCenter {
  0% {
    clip-path: circle(0% at 50% 50%);
    transform: scale(2);
    filter: brightness(3) blur(20px) drop-shadow(0 0 100px rgba(220, 38, 38, 1));
  }
  100% {
    clip-path: circle(100% at 50% 50%);
    transform: scale(1);
    filter: brightness(1) blur(0) drop-shadow(0 0 40px rgba(220, 38, 38, 0.5));
  }
}

/* 4. FLIP 3D HORIZONTAL */
@keyframes flip3D {
  0% {
    opacity: 0;
    transform: perspective(1000px) rotateY(-90deg);
    filter: blur(10px) drop-shadow(0 0 50px rgba(220, 38, 38, 0.8));
  }
  100% {
    opacity: 1;
    transform: perspective(1000px) rotateY(0deg);
    filter: blur(0) drop-shadow(0 0 40px rgba(220, 38, 38, 0.5));
  }
}

/* 5. SLIDE DESDE ABAJO CON REBOTE */
@keyframes slideUpBounce {
  0% {
    opacity: 0;
    transform: translateY(100vh) scale(0.3);
    filter: drop-shadow(0 0 0 rgba(220, 38, 38, 0));
  }
  60% {
    transform: translateY(-30px) scale(1.1);
  }
  80% {
    transform: translateY(10px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: drop-shadow(0 0 40px rgba(220, 38, 38, 0.5));
  }
}

/* 6. DESENFOQUE HACIA ENFOQUE */
@keyframes blurToFocus {
  0% {
    opacity: 0;
    filter: blur(50px) brightness(0) drop-shadow(0 0 0 rgba(220, 38, 38, 0));
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    filter: blur(0) brightness(1) drop-shadow(0 0 40px rgba(220, 38, 38, 0.5));
    transform: scale(1);
  }
}

/* 7. EFECTO GLITCH/MATRIX */
@keyframes glitchReveal {
  0% {
    clip-path: polygon(0 0, 100% 0, 100% 10%, 0 10%);
    transform: translateX(-20px);
    filter: hue-rotate(90deg) drop-shadow(0 0 20px rgba(220, 38, 38, 1));
  }
  20% {
    clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
    transform: translateX(20px);
  }
  40% {
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 70%);
    transform: translateX(-10px);
  }
  60% {
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0 90%);
    transform: translateX(10px);
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    transform: translateX(0);
    filter: hue-rotate(0deg) drop-shadow(0 0 40px rgba(220, 38, 38, 0.5));
  }
}

/* 8. ESCALA CON PULSO */
@keyframes pulsateScale {
  0% {
    opacity: 0;
    transform: scale(0.1);
    filter: drop-shadow(0 0 100px rgba(220, 38, 38, 1));
  }
  50% {
    transform: scale(1.15);
  }
  70% {
    transform: scale(0.95);
  }
  85% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    filter: drop-shadow(0 0 40px rgba(220, 38, 38, 0.5));
  }
}

/* 9. FADE DESDE 4 ESQUINAS */
@keyframes cornerFade {
  0% {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
    opacity: 0;
    filter: drop-shadow(0 0 0 rgba(220, 38, 38, 0));
  }
  100% {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    opacity: 1;
    filter: drop-shadow(0 0 40px rgba(220, 38, 38, 0.5));
  }
}

/* 10. SLIDE DIAGONAL CON SOMBRA */
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

/* 11. ONDAS DE TINTA */
@keyframes inkSpread {
  0% {
    clip-path: ellipse(0% 0% at 50% 50%);
    filter: blur(20px) contrast(2) drop-shadow(0 0 50px rgba(220, 38, 38, 1));
  }
  50% {
    clip-path: ellipse(60% 60% at 50% 50%);
    filter: blur(10px) contrast(1.5) drop-shadow(0 0 40px rgba(220, 38, 38, 0.7));
  }
  100% {
    clip-path: ellipse(100% 100% at 50% 50%);
    filter: blur(0) contrast(1) drop-shadow(0 0 40px rgba(220, 38, 38, 0.5));
  }
}

/* Responsive - Logo adaptativo */
@media (max-width: 1023px) and (min-width: 768px) {
  .logo-animado {
    filter: drop-shadow(0 0 35px rgba(220, 38, 38, 0.5))
            drop-shadow(0 0 70px rgba(220, 38, 38, 0.3))
            drop-shadow(0 8px 50px rgba(0, 0, 0, 0.4));
  }
}

@media (max-width: 767px) and (min-width: 480px) {
  .logo-animado {
    filter: drop-shadow(0 0 30px rgba(220, 38, 38, 0.5))
            drop-shadow(0 0 60px rgba(220, 38, 38, 0.3))
            drop-shadow(0 6px 40px rgba(0, 0, 0, 0.4));
  }
}

@media (max-width: 479px) {
  .logo-animado {
    filter: drop-shadow(0 0 25px rgba(220, 38, 38, 0.5))
            drop-shadow(0 0 50px rgba(220, 38, 38, 0.3))
            drop-shadow(0 5px 35px rgba(0, 0, 0, 0.4));
  }
}

@media (max-width: 374px) {
  .logo-animado {
    filter: drop-shadow(0 0 20px rgba(220, 38, 38, 0.5))
            drop-shadow(0 0 40px rgba(220, 38, 38, 0.3))
            drop-shadow(0 4px 30px rgba(0, 0, 0, 0.4));
  }
}
</style>