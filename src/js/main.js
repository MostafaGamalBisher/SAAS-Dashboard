// ============================================================
// MAIN ENTRY POINT
// Import modules here and initialize the application.
// ============================================================
import '../scss/main.scss';

const navBarElements = document.querySelectorAll('.nav-bar__item');

navBarElements.forEach((item) => {
  item.addEventListener('click', (e) => {
    const targetedElement = e.currentTarget;

    navBarElements.forEach((el) =>
      el.classList.remove('nav-bar__item--active')
    );

    targetedElement.classList.add('nav-bar__item--active');
  });
});

const asideToggle = document.querySelector('.aside__toggle');
const aside = document.querySelector('.aside');
const logo = document.querySelector('.logo');
const navLabel = document.querySelectorAll('.nav-bar__label');
const navBadge = document.querySelector('.nav-bar__badge');
const illustration = document.querySelector('.illustration');
const avatar = document.querySelector('.aside__bottom');
const avatarTitle = document.querySelector('.avatar__title');

asideToggle.addEventListener('click', () => {
  aside.classList.toggle('collapsed');
  logo.classList.toggle('logo-modifier');
  navLabel.forEach((el) => el.classList.toggle('label-modifier'));
  navBadge?.classList.toggle('label-modifier');
  illustration.classList.toggle('label-modifier');
  avatar.classList.toggle('aside-bottom__modifier');
  avatarTitle.classList.toggle('label-modifier');
});

//---------------Recent Orders-------------

const orders = [
  {
    tracking: '#876364',
    img: './src/assets/img/icons/dashboard-icons/recent-order/product-img/Camera-Lens.png',
    productName: 'Camera Lens',
    price: '$178',
    totalOrder: 325,
    totalAmount: '$1,46,660',
  },
  {
    tracking: '#876368',
    img: './src/assets/img/icons/dashboard-icons/recent-order/product-img/Black-Sleep-Dress.png',
    productName: 'Black Sleep Dress',
    price: '$14',
    totalOrder: 53,
    totalAmount: '$46,660',
  },
  {
    tracking: '#876412',
    img: './src/assets/img/icons/dashboard-icons/recent-order/product-img/Argan-Oil.png',
    productName: 'Argan Oil',
    price: '$21',
    totalOrder: 78,
    totalAmount: '$3,46,676',
  },
  {
    tracking: '#876621',
    img: './src/assets/img/icons/dashboard-icons/recent-order/product-img/EAU-DE-Parfum.png',
    productName: 'EAU DE Parfum',
    price: '$32',
    totalOrder: 98,
    totalAmount: '$3,46,981',
  },
];

const ordersTable = document.getElementById('ordersTableBody');

function displayOrders(ordersData) {
  ordersData.forEach((order) => {
    const row = document.createElement('tr');

    row.innerHTML = `
              <td class="recent-orders__td">${order.tracking}</td>
              <td class="recent-orders__td">
              <div class="recent-orders__product">
              <img src="${order.img}" alt="${order.productName}"  class="recent-orders__product-img" />
              ${order.productName}
               </div>
              </td>
              <td class="recent-orders__td">${order.price}</td>
              <td class="recent-orders__td"><span class='recent-orders__badge'>${order.totalOrder}</span></td>
              <td class="recent-orders__td">${order.totalAmount}</td>
    `;
    ordersTable.appendChild(row);
  });
}

displayOrders(orders);
