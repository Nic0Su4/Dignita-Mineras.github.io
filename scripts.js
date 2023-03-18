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

