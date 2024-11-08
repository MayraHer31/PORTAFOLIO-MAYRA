const toggle = document.getElementById('toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

// Evento para cambiar de modo cuando se activa el interruptor
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        // Cambiar al modo nocturno
        body.classList.add('night-mode');
        body.classList.remove('light-mode');
        themeIcon.src = 'img/darkmode.png'; // Cambia a la imagen de luna
    } else {
        // Cambiar al modo claro
        body.classList.add('light-mode');
        body.classList.remove('night-mode');
        themeIcon.src = 'img/lightmode.png'; // Cambia a la imagen de sol
    }
});


// Mostrar el botón cuando el usuario se desplaza hacia abajo 20px desde la parte superior de la página
window.onscroll = function() {
    mostrarBoton();
  };
  
  function mostrarBoton() {
    var boton = document.getElementById("btnVolverArriba");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      boton.style.display = "block";
    } else {
      boton.style.display = "none";
    }
  }
  
  // Función para volver al principio de la página
  function volverArriba() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  