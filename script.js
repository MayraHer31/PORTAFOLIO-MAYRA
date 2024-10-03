// Mostrar/ocultar menú de navegación
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  }
  
  // Alternar entre modo oscuro y claro
  function toggleTheme() {
    document.body.classList.toggle('dark-mode');
  }
  
  // Validación del formulario de contacto
  document.querySelector('form').addEventListener('submit', function(e) {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    
    if (nombre === '' || email === '') {
      e.preventDefault();
      alert('Por favor, completa todos los campos.');
    } else if (!validateEmail(email)) {
      e.preventDefault();
      alert('Por favor, ingresa un correo electrónico válido.');
    }
  });
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  // Efecto en proyectos
  const projectCards = document.querySelectorAll('.proyecto');
  
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('expanded');
    });
  });
  