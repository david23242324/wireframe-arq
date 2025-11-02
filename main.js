document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Producto añadido al carrito');
  });
});

  // Sección De Busqueda
const searchBtn = document.querySelector('.icon-btn[title="Buscar"]');
const searchBar = document.querySelector('.search-bar');

searchBtn.addEventListener('click', () => {
  searchBar.classList.toggle('visible');
});


  // Sección De Perfil
  document.querySelector('.icon-btn[title="Perfil"]').addEventListener('click', () => {
  window.location.href = 'account.html';
});


  // Sección De Carrito
  const cartBtn = document.querySelector('.icon-btn[title="Carrito"]');
const cartPanel = document.querySelector('.cart-panel');
const closeCart = document.querySelector('.close-cart');

cartBtn.addEventListener('click', () => {
  cartPanel.classList.add('open');
});

closeCart.addEventListener('click', () => {
  cartPanel.classList.remove('open');
});

function addToCart(productName) {
  const item = document.createElement('li');
  item.textContent = productName;
  document.querySelector('.cart-items').appendChild(item);
}