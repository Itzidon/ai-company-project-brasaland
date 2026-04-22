const form = document.getElementById("applicationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // limpiar errores
  document.querySelectorAll("p[id^='error']").forEach(el => el.textContent = "");
  document.getElementById("successMessage").textContent = "";

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const date = document.getElementById("eventDate").value;
  const terms = document.getElementById("termsAccepted").checked;

  // Nombre
  if (name.length < 3) {
    document.getElementById("error-fullName").textContent = "Nombre mínimo 3 caracteres";
    valid = false;
  }

  // Email
  if (!email.includes("@")) {
    document.getElementById("error-email").textContent = "Email inválido";
    valid = false;
  }

  // Teléfono
  if (phone.length < 8) {
    document.getElementById("error-phone").textContent = "Teléfono inválido";
    valid = false;
  }

  // Fecha
  const today = new Date().toISOString().split("T")[0];
  if (date < today) {
    document.getElementById("error-date").textContent = "Fecha no válida";
    valid = false;
  }

  // Términos
  if (!terms) {
    document.getElementById("error-terms").textContent = "Debes aceptar los términos";
    valid = false;
  }

  if (valid) {
    document.getElementById("successMessage").textContent = "Solicitud enviada correctamente ✅";
  }
});