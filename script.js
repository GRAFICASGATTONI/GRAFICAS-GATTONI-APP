let total = 0;

function calcular() {
  const precio = document.getElementById("servicio").value;
  const metros = document.getElementById("metros").value;

  total = precio * metros;

  document.getElementById("resultado").innerText =
    "Total: $" + total.toLocaleString();
}

function enviarWhatsApp() {
  if (total === 0) {
    alert("Primero calcula el precio");
    return;
  }

  const mensaje = "Hola, quiero cotizar un trabajo. Total: $" + total;
  const numero = "569XXXXXXXX";

  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
}
