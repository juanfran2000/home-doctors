import ScrollReveal from "scrollreveal";

// Configura ScrollReveal
const sr = ScrollReveal({
  origin: "bottom", // Dirección desde donde aparece el elemento
  distance: "30px", // Distancia del desplazamiento
  duration: 2000, // Duración de la animación en milisegundos
  delay: 100, // Retraso de la animación
  reset: false, // Si deseas que la animación se repita al hacer scroll hacia arriba
});

export default sr;
