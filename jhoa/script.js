document.addEventListener('DOMContentLoaded', function() {
  // Obtener el formulario de inicio de sesión por su ID
  const loginForm = document.getElementById('login-form');

  // Agregar un evento de escucha para el envío del formulario
  loginForm.addEventListener('submit', function(event) {
    // Prevenir el comportamiento predeterminado del formulario de enviar la solicitud
    event.preventDefault();
    
    // Obtener los valores del correo electrónico y la contraseña del formulario
    const email = loginForm.querySelector('[name="email"]').value;
    const password = loginForm.querySelector('[name="password"]').value;

    // Verificar si las credenciales son correctas
    if (email === 'jhonatangiraldofajardo@gmail.com' && password === '1080428833') {
      // Si las credenciales son correctas, imprimir un mensaje de inicio de sesión exitoso
      console.log('Inicio de sesión exitoso');
      // Redirigir al usuario al panel de administración si las credenciales son correctas
      window.location.href = 'admin-panel.html';
    } else {
      // Si las credenciales son incorrectas, imprimir un mensaje de error
      console.log('Correo electrónico o contraseña incorrectos');
    }
  });
});
