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

// Cerrar Submenus Al Hacer ClicK Fuera
document.addEventListener('click', () => {
  document.querySelectorAll('.submenu').forEach(menu => {
    menu.style.display = 'none';
  });
});

// Sección De Nuevos Productos

const track = document.querySelector('.slider-track');
const leftArrow = document.querySelector('.slider-arrow.left');
const rightArrow = document.querySelector('.slider-arrow.right');

let scrollX = 0;
const step = 340;

leftArrow.addEventListener('click', () => {
  scrollX = Math.max(scrollX - step, 0);
  track.style.transform = `translateX(-${scrollX}px)`;
});

rightArrow.addEventListener('click', () => {
  scrollX += step;
  track.style.transform = `translateX(-${scrollX}px)`;
});

// Botón De Agregar Carrito

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    const price = button.dataset.price;
    const img = button.dataset.img;

    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
      <img src="${img}" alt="${product}" width="50" />
      <span>${product}</span> - <strong>$${price} COP</strong>
    `;
    document.querySelector('.cart-items').appendChild(cartItem);

    document.querySelector('.cart-panel').classList.add('open');
  });
});