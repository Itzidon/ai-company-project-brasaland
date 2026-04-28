const form = document.getElementById("applicationForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Limpiar errores anteriores
  document.querySelectorAll("p[id^='error']").forEach((el) => {
    el.textContent = "";
  });

  document.getElementById("successMessage").textContent = "";

  // Eliminar errores dinámicos previos
  [
    "error-country",
    "error-city",
    "error-service",
    "error-guest",
    "error-budget",
    "error-notes"
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.remove();
  });

  // Obtener valores
  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value.trim();
  const serviceType = document.getElementById("serviceType").value;
  const eventDate = document.getElementById("eventDate").value;
  const guestCount = document.getElementById("guestCount").value;
  const estimatedBudget = document.getElementById("estimatedBudget").value;
  const notes = document.getElementById("notes").value.trim();
  const termsAccepted = document.getElementById("termsAccepted").checked;

  // Validaciones

  if (fullName.length < 3) {
    document.getElementById("error-fullName").textContent =
      "El nombre debe tener al menos 3 caracteres.";
    valid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById("error-email").textContent =
      "Introduce un correo electrónico válido.";
    valid = false;
  }

  if (phone.length < 8) {
    document.getElementById("error-phone").textContent =
      "Introduce un teléfono válido (mínimo 8 dígitos).";
    valid = false;
  }

  if (!country) {
    const error = document.createElement("p");
    error.id = "error-country";
    error.className = "text-red-500 text-sm";
    error.textContent = "Selecciona un país.";
    document.getElementById("country").after(error);
    valid = false;
  }

  if (city.length < 2) {
    const error = document.createElement("p");
    error.id = "error-city";
    error.className = "text-red-500 text-sm";
    error.textContent = "Introduce una ciudad válida.";
    document.getElementById("city").after(error);
    valid = false;
  }

  if (!serviceType) {
    const error = document.createElement("p");
    error.id = "error-service";
    error.className = "text-red-500 text-sm";
    error.textContent = "Selecciona un tipo de servicio.";
    document.getElementById("serviceType").after(error);
    valid = false;
  }

  if (!eventDate) {
    document.getElementById("error-date").textContent =
      "Selecciona una fecha.";
    valid = false;
  } else {
    const today = new Date().toISOString().split("T")[0];
    if (eventDate < today) {
      document.getElementById("error-date").textContent =
        "La fecha no puede ser pasada.";
      valid = false;
    }
  }

  if (!guestCount || Number(guestCount) < 1) {
    const error = document.createElement("p");
    error.id = "error-guest";
    error.className = "text-red-500 text-sm";
    error.textContent = "Debe haber al menos 1 persona.";
    document.getElementById("guestCount").after(error);
    valid = false;
  }

  if (estimatedBudget && Number(estimatedBudget) < 0) {
    const error = document.createElement("p");
    error.id = "error-budget";
    error.className = "text-red-500 text-sm";
    error.textContent = "El presupuesto no puede ser negativo.";
    document.getElementById("estimatedBudget").after(error);
    valid = false;
  }

  if (notes.length > 500) {
    const error = document.createElement("p");
    error.id = "error-notes";
    error.className = "text-red-500 text-sm";
    error.textContent = "Máximo 500 caracteres.";
    document.getElementById("notes").after(error);
    valid = false;
  }

  if (!termsAccepted) {
    document.getElementById("error-terms").textContent =
      "Debes aceptar los términos y condiciones.";
    valid = false;
  }

  // Si todo está correcto
  if (valid) {
    document.getElementById("successMessage").textContent =
      "Solicitud enviada correctamente ✅";
    form.reset();
  }
});
