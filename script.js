//Mostrar mensaje de bienvenida
const welcomeButton = document.getElementById('welcomeButton');
welcomeButton.addEventListener('click', () => {
  alert('¡Bienvenido a mi página!');
});

// Validación de formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  if (name === '' || email === '') {
    alert('Por favor, completa todos los campos.');
    event.preventDefault(); // Evitar el envío del formulario
  } else {
    alert('¡Formulario enviado correctamente!');
  }
});
