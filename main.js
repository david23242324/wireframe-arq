// Añadir Productos 
document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Producto añadido al carrito');
  });
});

// Sección De Búsqueda Con Transición
const searchBtn = document.querySelector('.icon-btn[title="Buscar"]');
const searchBar = document.querySelector('.search-bar');
const searchInput = searchBar.querySelector('input');

// Mostrar Barra Al Hacer Click En La Lupa
searchBtn.addEventListener('click', (e) => {
  e.stopPropagation(); 
  searchBar.classList.add('visible');
  searchInput.focus();
});

// Ocultar Barra Al Hacer Click Fuera
document.addEventListener('click', (e) => {
  if (!searchBar.contains(e.target) && !searchBtn.contains(e.target)) {
    searchBar.classList.remove('visible');
  }
});

// Buscar Al Presionar Enter
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const query = searchInput.value.trim();
    if (query !== '') {
      console.log('Buscando:', query);
      searchInput.value = ''; 
      searchBar.classList.remove('visible'); 
    }
  }
});

// Sección De Perfil 
const profileBtn = document.querySelector('.icon-btn[title="Perfil"]');
if (profileBtn) {
  profileBtn.addEventListener('click', () => {
    window.location.href = 'account.html';
  });
}

// Sección De Carrito 
const cartBtn = document.querySelector('.icon-btn[title="Carrito"]');
const cartPanel = document.querySelector('.cart-panel');
const closeCart = document.querySelector('.close-cart');

if (cartBtn && cartPanel && closeCart) {
  cartBtn.addEventListener('click', () => {
    cartPanel.classList.add('open');
  });

  closeCart.addEventListener('click', () => {
    cartPanel.classList.remove('open');
  });
}

// Función Para Agregar Productos Al Carrito 
function addToCart(productName) {
  const item = document.createElement('li');
  item.textContent = productName;
  document.querySelector('.cart-items').appendChild(item);
}

// Sección Funcion De Acordeon Secciones

document.querySelectorAll('.nav-toggle').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const submenu = btn.nextElementSibling;
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(menu => {
      if (menu !== submenu) menu.style.display = 'none';
    });
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
  });
});

// Cerrar submenús al hacer clic fuera
document.addEventListener('click', () => {
  document.querySelectorAll('.submenu').forEach(menu => {
    menu.style.display = 'none';
  });
});