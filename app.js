// WhatsApp de Costa Rica en formato internacional para wa.me
const whatsappNumber = "50689327806";
const facebookPage = "https://www.facebook.com/encuentrabienestarsantaana/";

const books = [
  {
    number: "Libro 1",
    title: "Donde Todo Comienza",
    status: "Disponible",
    badge: "Incluido en promo 2x1",
    theme: "Raíces · origen · historia familiar",
    image: "assets/libro1.png",
    description: "El inicio del camino. Este libro te invita a mirar tus raíces, reconocer tu historia y comenzar a sanar desde el origen, elevando tus alas sin negar de dónde vienes.",
    price: "₡10.000",
    action: "Comprar Libro 1",
    message: "Hola Rosa, quiero comprar el Libro 1: Donde Todo Comienza."
  },
  {
    number: "Libro 2",
    title: "Aprender a Sostenerte",
    status: "Disponible",
    badge: "Incluido en promo 2x1",
    theme: "Fuerza interna · amor propio · apoyo interno",
    image: "assets/libro2.png",
    description: "Un proceso para volver a ti, sostener tus emociones y encontrar fuerza interna. Ideal para aprender a acompañarte con más amor, presencia y límites sanos.",
    price: "₡10.000",
    action: "Comprar Libro 2",
    message: "Hola Rosa, quiero comprar el Libro 2: Aprender a Sostenerte."
  },
  {
    number: "Libro 3",
    title: "Soltar lo que Cargas",
    status: "Sale la próxima semana",
    badge: "Próximamente",
    theme: "Soltar · liberar culpas · cargas del pasado",
    image: "assets/libro3.png",
    description: "Una guía para liberar culpas y cargas del pasado, devolver lo que no te corresponde y abrir espacio a una vida más liviana, en paz y con nuevas posibilidades.",
    price: "Próxima semana",
    action: "Reservar / avisarme",
    message: "Hola Rosa, quiero que me avises cuando esté disponible el Libro 3: Soltar lo que Cargas."
  }
];

function whatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

const grid = document.getElementById("booksGrid");

grid.innerHTML = books.map((book) => `
  <article class="book-card ${book.number === 'Libro 3' ? 'coming-soon' : ''}">
    <div class="book-image-wrap">
      <span class="book-badge">${book.badge}</span>
      <img src="${book.image}" alt="Portada de ${book.number}: ${book.title}" />
    </div>
    <div class="book-content">
      <span class="book-status">${book.status}</span>
      <span class="book-theme">${book.theme}</span>
      <h3>${book.number}: ${book.title}</h3>
      <p>${book.description}</p>
      <div class="prices single">
        <div><small>${book.number === 'Libro 3' ? 'Estado' : 'Precio individual'}</small><strong>${book.price}</strong></div>
      </div>
      <a class="btn primary small" target="_blank" rel="noopener" href="${whatsappLink(book.message)}">${book.action}</a>
    </div>
  </article>
`).join("");

document.getElementById("promoWhatsapp").href = whatsappLink("Hola Rosa, quiero aprovechar la promo 2x1 de esta semana: Libro 1 Donde Todo Comienza + Libro 2 Aprender a Sostenerte.");
document.getElementById("mainWhatsapp").href = whatsappLink("Hola Rosa, quiero información sobre la serie 365 Días de Sanación Sistémica.");

document.querySelectorAll(".facebookLink").forEach(link => { link.href = facebookPage; });
