# SAAS Dashboard

A responsive SAAS dashboard UI built with vanilla JavaScript, SCSS, and ApexCharts. This project was developed as part of the Al-Mdrasa Frontend Diploma (Batch 5).

## Live Demo

[View Live](https://mostafagamalbisher.github.io/SAAS-Dashboard/)

## Screenshots

![Dashboard Preview](<./src/assets/img/icons/header-icons/Illustration%20(2).svg>)

## Features

- Collapsible sidebar with smooth transitions
- Dynamic navigation with active state management
- Responsive layout with mobile support
- Interactive line chart (Reports) built with ApexCharts
- Interactive donut chart (Analytics) built with ApexCharts
- Recent Orders table rendered dynamically from a data array
- Top Selling Products rendered dynamically with star ratings
- Stats cards with live data simulation
- Reusable component architecture

## Tech Stack

- HTML5 — semantic markup
- SCSS — BEM naming convention, CSS custom properties, modular file structure
- Vanilla JavaScript — ES Modules, DOM manipulation, dynamic rendering
- ApexCharts — interactive charts
- Vite — build tool and dev server

## Project Structure

```
SAAS-Dashboard/
├── index.html
├── vite.config.js
├── src/
│   ├── js/
│   │   └── main.js
│   ├── scss/
│   │   ├── main.scss
│   │   ├── _variables.scss
│   │   ├── _reset.scss
│   │   ├── _global.scss
│   │   ├── _aside.scss
│   │   ├── _dashboard.scss
│   │   └── _responsive.scss
│   └── assets/
│       └── img/
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## What I Learned

- BEM methodology applied consistently across a multi-component project
- CSS custom properties as a design token system
- Dynamic DOM rendering from data arrays — simulating API-driven UI
- ApexCharts configuration and customization
- Vite as a modern build tool replacing Parcel
- Debugging Windows-specific Node.js tooling issues
- Responsive design for dashboard layouts

## Author

Mostafa Gamal Bisher
[GitHub](https://github.com/MostafaGamalBisher) | [LinkedIn](https://linkedin.com/in/mostafagamalbisher/)
