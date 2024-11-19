document
  .getElementById("registroForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validación de nombre
    if (nombre === "") {
      valid = false;
      document.getElementById("nombreError").innerText =
        "El nombre es obligatorio.";
    } else {
      document.getElementById("nombreError").innerText = "";
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      valid = false;
      document.getElementById("emailError").innerText =
        "El correo no es válido.";
    } else {
      document.getElementById("emailError").innerText = "";
    }

    // Validación de contraseña
    if (password.length < 6) {
      valid = false;
      document.getElementById("passwordError").innerText =
        "La contraseña debe tener al menos 6 caracteres.";
    } else {
      document.getElementById("passwordError").innerText = "";
    }

    if (valid) {
      alert("Registro exitoso");
      this.reset();
    }
  });
