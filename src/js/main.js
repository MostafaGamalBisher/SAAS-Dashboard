// ============================================================
// MAIN ENTRY POINT
// Import modules here and initialize the application.
// ============================================================
import '../scss/main.scss';
import ApexCharts from 'apexcharts';

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

const displayOrders = (ordersData) => {
  ordersData.forEach((order) => {
    const row = document.createElement('tr');

    row.innerHTML = `
              <td class="recent-orders__td">${order.tracking}</td>
              <td class="recent-orders__td">
              <a href="#" class="recent-orders__product">
              <img src="${order.img}" alt="${order.productName}"  class="recent-orders__product-img" />
              <span class="recent-orders__product-name">${order.productName}</span>
              </a>
              </td>
              <td class="recent-orders__td">${order.price}</td>
              <td class="recent-orders__td"><span class='recent-orders__badge'>${order.totalOrder}</span></td>
              <td class="recent-orders__td">${order.totalAmount}</td>
    `;

    ordersTable.appendChild(row);
  });
};

displayOrders(orders);

//---------------top selling------------
const topProducts = [
  {
    img: './src/assets/img/icons/dashboard-icons/top-products/nike-shoes-balck-pattern.png',
    name: 'NIKE Shoes Black Pattern',
    stars: 4,
    price: '$87',
  },
  {
    img: './src/assets/img/icons/dashboard-icons/top-products/iphone-12.png',
    name: 'iPhone 12',
    stars: 4,
    price: '$987',
  },
];

const renderStars = (count) => {
  let stars = '';

  for (let i = 1; i <= 5; i++) {
    if (i <= count) {
      stars += `<span class="star--filled">★</span>`;
    } else {
      stars += `<span class="star">★</span>`;
    }
  }
  return stars;
};

const topSellingProducts = document.querySelector('.top-selling__products');

const displayTopSelling = (productData) => {
  productData.forEach((product) => {
    const card = document.createElement('a');
    card.className = 'top-selling__product';
    card.href = '#';

    card.innerHTML = `
    
    <div class="top-selling__image-wrapper">
    <img src="${product.img}" alt="${product.name}" class="top-selling__image" />
    </div>
    <div class="top-selling__content">
    <span class="top-selling__product-name">${product.name}</span>
    <div class="top-selling__product-stars">${renderStars(product.stars)}</div>
    <span class="top-selling__product-price">${product.price}</span>
    </div>
    
    `;

    topSellingProducts.appendChild(card);
  });
};

displayTopSelling(topProducts);

//-----------charts--------------

//------------reports Chart---------

const reportsOptions = {
  chart: {
    type: 'area',
    height: 300,
    toolbar: { show: false },
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 1,
      colorStops: [
        [
          { offset: 0, color: 'rgba(91, 196, 255, 1)', opacity: 0.1 },
          { offset: 100, color: 'rgba(255, 91, 239, 1)', opacity: 0.03 },
        ],
        [
          { offset: 0, color: 'rgba(255, 91, 239, 1)', opacity: 0.1 },
          { offset: 100, color: 'rgba(91, 196, 255, 1)', opacity: 0 },
        ],
      ],

      opacityFrom: 0.3,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  series: [
    {
      name: 'Sales',
      data: [45, 60, 45, 50, 65, 47, 55, 60, 65, 70],
    },
    {
      name: 'Revenue',
      data: [30, 40, 55, 35, 45, 65, 40, 55, 45, 80],
    },
  ],
  xaxis: {
    crosshairs: {
      stroke: {
        color: 'rgba(3, 2, 41, 0.2)',
        width: 1,
        dashArray: 4,
      },
    },
    labels: {
      style: {
        fontSize: '12px',
        fontFamily: 'Nunito, sans-serif',
        fontWeight: 400,
        colors: 'rgba(3, 2, 41, 0.4)',
      },
    },
    categories: [
      '10am',
      '11am',
      '12am',
      '01am',
      '02am',
      '03am',
      '04am',
      '05am',
      '06am',
      '07am',
    ],
  },
  yaxis: {
    labels: {
      style: {
        fontSize: '12px',
        fontFamily: 'Nunito, sans-serif',
        fontWeight: 400,
        colors: 'rgba(3, 2, 41, 0.4)',
      },
    },
    min: 0,
    max: 100,
    tickAmount: 5,
  },

  grid: {
    xaxis: { lines: { show: false } },
    yaxis: { lines: { show: true } },
    borderColor: 'rgba(3, 2, 41, 0.05)',
  },
  legend: { show: false },
  markers: {
    size: 4,
    colors: ['#ffffff'],
    strokeColors: ['rgba(174, 143, 247, 1)'],
    strokeWidth: 2.2,
  },
  dataLabels: { enabled: false },
  tooltip: {
    theme: 'dark',
    x: { show: false },
  },
  colors: ['rgba(91, 196, 255, 1)', 'rgba(255, 91, 239, 1)'],
};

const reportsChart = new ApexCharts(
  document.querySelector('#reportsChart'),
  reportsOptions
);

reportsChart.render();

//------------donut Chart---------

const analyticsOptions = {
  chart: {
    type: 'donut',
    height: 216,
  },
  series: [60, 20, 20],
  labels: ['Sale', 'Distribute', 'Return'],
  colors: [
    'rgba(91, 147, 255, 1)',
    'rgba(255, 214, 107, 1)',
    'rgba(255, 143, 107, 1)',
  ],
  plotOptions: {
    pie: {
      donut: {
        size: '75%',
        labels: {
          show: true,
          value: {
            show: true,
            fontSize: '30px',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 800,
            color: 'rgba(3, 2, 41, 1)',
          },
          total: {
            show: true,
            label: 'Transactions',
            fontSize: '16px',
            fontFamily: 'Nunito, sans-serif',
            fontWeight: 400,
            color: 'rgba(3, 2, 41, 0.5)',
            formatter: (w) => {
              const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
              const first = w.globals.seriesTotals[0];
              return Math.round((first / total) * 100) + '%';
            },
          },
        },
      },
    },
  },
  dataLabels: { enabled: false },
  legend: { show: false },
  stroke: { width: 1 },
};

const analyticsChart = new ApexCharts(
  document.querySelector('#analytics'),
  analyticsOptions
);
analyticsChart.render();
