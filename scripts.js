/* Textos how */
const iconos = document.querySelectorAll('.icono-how');
const textos = document.querySelectorAll('.texto-how');
const progreso = document.querySelector('.progress-bar');
const barra = document.querySelector('.barra-how');

for (let i = 0; i < iconos.length; i++) {
    iconos[i].addEventListener('click', function() {
        // Ocultamos todos los textos
        for (let j = 0; j < textos.length; j++) {
            textos[j].style.display = 'none';
        }
        // Mostramos el texto correspondiente
        textos[i].style.display = 'block';

        const tamanioBarra = {
            0: '25%',
            1: '50%',
            2: '75%',
            3: '100%'
        }

        progreso.style.width = tamanioBarra[i];
    });
}


// Listas de procesos core
const contenedorCards = document.querySelector(".cards-contenedor");

contenedorCards.addEventListener("click", function(event) {
    if (event.target.closest(".core .cards-contenedor > div")) {
        let elemento;
      if (event.target.tagName === "DIV") {
        elemento = event.target;
      }
      else {
        elemento = event.target.parentNode;
      }

      elemento.classList.toggle("select");

    }
});

// Listas de procesos general
let div = [];
div = document.querySelectorAll(".general .contenedor-cards > div");

let portada = [];
portada = document.querySelectorAll(".general .portada");

let contenido = [];
contenido = document.querySelectorAll(".general .contenido");

for (let i = 0; i < div.length; i++) {
  div[i].addEventListener("mouseenter", (function(index) {
    return function() {
      portada[index].style.opacity = "0";
      portada[index].style.zIndex = "1";
      contenido[index].style.opacity = "1";
    }
  })(i))

  div[i].addEventListener("mouseleave", (function(index) {
    return function() {
      portada[index].style.opacity = "1";
      portada[index].style.zIndex = "3";
      contenido[index].style.opacity = "0";
    }
  })(i))
}


/* Animaciones scroll */
// const viewportWidth = window.innerWidth;

// const swiperWrapper = document.querySelector('.swiper-wrapper');
// const swiperContainer = document.querySelector('.swiper');

// swiperWrapper.style.width = `${viewportWidth - 60}px`;
// swiperContainer.style.overflow = 'hidden';
