const PRODUCTS = [
  { name: "Gold Hoodie", price: 5499, img: "assets/hoodie1.jpg" },
  { name: "Black Hoodie", price: 5699, img: "assets/hoodie2.jpg" },
  { name: "Street Tee", price: 2999, img: "assets/tshirt.jpg" }
];

const grid = document.getElementById('productGrid');

PRODUCTS.forEach(p => {
  const card = document.createElement('div');
  card.className = 'item';
  card.innerHTML = `
    <img src="${p.img}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>Rs ${p.price}</p>
    <a class="btn" href="https://wa.me/923001234567?text=I'm%20interested%20in%20the%20${encodeURIComponent(p.name)}">Order via WhatsApp</a>
  `;
  grid.appendChild(card);
});

document.getElementById('year').textContent = new Date().getFullYear();
