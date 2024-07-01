document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const divError = document.getElementById("errorMessages");
    divError.innerHTML = "";

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const dni = document.getElementById("dni").value.trim();
    const email = document.getElementById("email").value.trim();
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    const edad = document.getElementById("edad").value;
    const terminos = document.getElementById("terminos").checked;

    const fechaNacimientoDate = new Date(fechaNacimiento);
    const hoy = new Date();
    let edadCalculada = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
    const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
    if (
      mes < 0 ||
      (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())
    ) {
      edadCalculada--;
    }

    if (edadCalculada < 18) {
      mostrarError(
        "fechaNacimiento",
        "Debes ser mayor de 18 años para registrarte."
      );
      return;
    }
    if (nombre === "") {
      mostrarError("nombre", "El nombre es requerido.");
      return;
    }

    if (apellido === "") {
      mostrarError("apellido", "El apellido es requerido.");
      return;
    }

    if (dni === "") {
      mostrarError("dni", "El DNI es requerido.");
      return;
    }

    if (!validarEmail(email)) {
      mostrarError("email", "El email ingresado no es válido.");
      return;
    }

    if (edad === "") {
      mostrarError("edad", "Seleccione su edad.");
      return;
    }

    if (!terminos) {
      mostrarError("terminos", "Debes aceptar los términos y condiciones.");
      return;
    }

    window.location.href = "/login.html";
  });

  function mostrarError(campo, mensaje) {
    const divError = document.getElementById("errorMessages");
    const pError = document.createElement("p");
    pError.textContent = mensaje;
    divError.appendChild(pError);

    document.getElementById(campo).classList.add("is-invalid");
  }
  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
