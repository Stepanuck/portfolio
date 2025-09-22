//año dinamico en el footer
document.getElementById("year").textContent = new Date().getFullYear();
///scroll suave al hacer clic en el menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const destino = document.querySelector(this.getAttribute("href"));
    if (destino) {
      destino.scrollIntoView({ behavior: "smooth" });
    }
  });
});
//validacion del form
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();

  if (!nombre || !email) {
    alert("Por favor, completá nombre y email.");
    return;
  }
  alert("¡Gracias por tu mensaje, " + nombre + "!");
  form.reset();
});

//efecto para el scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("reveal-show");
    }
  })
}, {threshold: 0.1});

document.querySelectorAll(".contenido-section").forEach(sec=>{
  sec.classList.add("reveal");
  observer.observe(sec);
});