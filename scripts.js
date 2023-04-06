// Te ayudamos
const contenedor = document.querySelector(".empezar-terminar .contenido > div");

const progreso = document.querySelector(".empezar-terminar .progreso");

let iconos = [];
iconos = document.querySelectorAll(".empezar-terminar .iconos > div img");

let barra = [];
barra = document.querySelectorAll(".empezar-terminar .barra-res > div > div");

let barraContenedor = [];
barraContenedor = document.querySelectorAll(".empezar-terminar .barra-res > div");

function icono(x) {
  contenedor.style.transform = `translate(${x}%)`;

  progreso.style.width = `${Math.abs(x)+25}%`;

  

  for (i=0; i<iconos.length; i++) {
    if (i == Math.abs(x)/25) {
      iconos[i].style.filter = "grayscale(0%)";
    } else {
      iconos[i].style.filter = "grayscale(100%)";
    }
  }

  for (i=0; i<barra.length; i++) {
    if (i == Math.abs(x)/25) {
      barra[i].style.backgroundColor = "var(--colorPrimario)";
    } else {
      barra[i].style.backgroundColor = "var(--colorSecunadrio)";
    }
  }

  for (i=0; i<barraContenedor.length; i++) {
    if (i == Math.abs(x)/25) {
      barraContenedor[i].style.backgroundColor = "var(--colorPrimario)";
      barraContenedor[i].style.borderRadius = "0 20px 20px 0";

      for (j=1; j<barraContenedor.length; j++) {
        if (j == i) {
          barraContenedor[j].style.backgroundColor = "var(--colorPrimario)";
          barraContenedor[j-1].style.backgroundColor = "var(--colorPrimario)";
          barraContenedor[j-1].style.borderRadius = "20px 0 0 20px";
          barra[j-1].style.borderLeft = "none";
        }
      }

    } else {
      barraContenedor[i].style.backgroundColor = "var(--colorSecunadrio)";
      barraContenedor[i].style.borderRadius = "0 0 0 0";
    }
  }
}
// Listas de procesos core
const contenedorCards = document.querySelector(".cards-contenedor");

contenedorCards.addEventListener("click", function (event) {
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

// *efecto de hover
let div = [];
div = document.querySelectorAll(".general .contendor-cards > div");

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

// *Evento de despliegle
let subMenu = [];
subMenu = document.querySelectorAll(".general .sub-menu");

let item = [];
item = document.querySelectorAll(".general .item");

for (let i = 0; i < subMenu.length; i++) {
  subMenu[i].addEventListener("click", (function(index) {
    return function() {
      subMenu[i].parentNode.classList.toggle("active");
      
    }
  })(i))
}

// *Evento de seleccionar los procesos
let despegable = [];
despegable = document.querySelectorAll(".general .despegable");

for (i=0; i< despegable.length; i++) {
  despegable[i].addEventListener("click", function(event) {
    if (event.target.closest(".general .despegable .circulo")) {
        let elemento;
      if (event.target.tagName === "DIV") {
        elemento = event.target;
      }
      else {
        elemento = event.target.parentNode;
      }

      elemento.classList.toggle("select");

    }
  })
}

// Formulario

// Añadir la funcion a todos los botones con la clase .select
let items1 = [];
items1 = document.querySelectorAll(".core .cards-contenedor");

for (var i = 0; i < items1.length; i++) {
  items1[i].addEventListener("click", function() {
    enviar();
  });
}

let items2 = [];
items2 = document.querySelectorAll(".general .circulo");

for (var i = 0; i < items2.length; i++) {
  items2[i].addEventListener("click", function() {
    enviar();
  });
}

//
function enviar() {
  setTimeout(function() {

    let select = [];
    select = document.querySelectorAll(".select");

    procesos = document.querySelector(".formulario .procesos");

    let elemento = "";
    let texto;
    let etiqueta="";

    for (i=0; i<select.length; i++) {
      if(select[i].classList.contains("circulo")) {
        texto = select[i].parentNode.parentNode.children[1].innerText;
        etiqueta = select[i].parentNode.parentNode.children[2].innerHTML;
      }

      else{
        texto = select[i].children[1].innerText;
      }

      elemento += `
          <div>
            <p>${texto}</p>
            <div class="contenedor-etiquetas">
              ${etiqueta}
            </div>
          </div>
        `;
    }
    
    procesos.innerHTML = elemento;

  }, 100);
}