// Actualización en tiempo real del valor de nicotina
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("nicotina");
    const output = document.getElementById("valor-nicotina");
  
    // Inicializa el valor mostrado
    output.textContent = `${slider.value} mg`;
  
    // Cambia el valor a medida que se mueve la barra
    slider.addEventListener("input", function () {
        output.textContent = `${slider.value} mg`;
    });
  });

// Comprobar si el usuario está logeado (guardado en localStorage)
function estaLogeado() {
  return localStorage.getItem("usuarioLogeado") === "true";
}

// Mostrar modal de login si no está logeado
function verificarLogin() {
  if (!estaLogeado()) {
    document.getElementById("login-modal").style.display = "flex";
  } else {
    // Acción si ya está logeado
    window.location.href = "miCuenta.html";
  }
}

// Cerrar modal de login
function cerrarModal() {
  document.getElementById("login-modal").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const userImg = document.getElementById("user-icon-img");
  const avatar = localStorage.getItem("avatarUsuario");
  if (userImg && avatar) {
    userImg.src = avatar;
  }
});