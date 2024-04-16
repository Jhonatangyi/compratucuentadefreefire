// admin.js

document.addEventListener('DOMContentLoaded', function() {
    // Obtener el botón de redireccionamiento por su ID
    const adminButton = document.getElementById('admin-button');
    
    // Agregar un event listener para el evento 'click' en el botón
    adminButton.addEventListener('click', function() {
        // Redireccionar a la página de administración cuando se hace clic en el botón
        window.location.href = 'admin-panel.html';
    });
});
