import "../css/styles.css";
import "../img/1.png";
import "../img/2.png";
import "../img/3.png";
import "../img/4.png";
import "../img/5.png";
import "../img/6.png";
import "../img/7.png";
import "../img/8.png";
import "../img/9.png";
import "../img/10.png";
import "../img/11.png";
import "../img/12.png";
import "../img/13.png";
import "../img/14.png";
import "../img/icono1.png";
import "../img/icono2.png";
import "../img/icono3.png";
import "../img/icono4.png";
import "../img/nosotros.jpg";
import "../img/favicon.ico";
console.log('JS desde webpack')

const url = window.location.origin;
const urlActual = document.URL;
const params = new URLSearchParams(window.location.search);
const productId = params.get('id');

const navToggle = () => {
   const navbar = document.querySelector('.navbar')
   const toggle = document.querySelector('.btn.btn-nav')
   toggle.addEventListener('click', () => {
      navbar.classList.toggle('open')
   })
}

const scroll = () => {
   const scrollHeader = document.getElementById('scrollView');
   
   scrollHeader.addEventListener('click', e => {
      e.preventDefault();
      const seccion = document.querySelector(scrollHeader.attributes.href.value);
      seccion.scrollIntoView({
         behavior: 'smooth'
      });
   });
}

import validateToken from "./validateToken.js";
import logout from "./logout.js";

import login from "./login.js";
if (urlActual == `${url}/`) {
   console.log('Entra en Raiz')
   validateToken();
   index();
}
if (urlActual == `${url}/login.html`) {
   console.log('Entra en login')
   login();
}
import register from "./register.js";
if (urlActual == `${url}/register.html`) {
   console.log('Entra en register')
   register();
}
import index from "./index.js";
if (urlActual == `${url}/index.html`) {
   console.log('Entra en index')
   validateToken();
   index();
   navToggle();
   scroll()
   logout();
}
import nosotros from "./nosotros.js";
if (urlActual == `${url}/nosotros.html`) {
   console.log('Entra en nosotros')
   validateToken();
   nosotros();
   navToggle();
   scroll();
   logout();
}
import contacto from "./contacto.js";
if (urlActual == `${url}/contacto.html`) {
   console.log('Entra en contacto')
   validateToken();
   contacto();
   navToggle();
   scroll();
   logout();
}
import producto from "./producto.js";
if (urlActual == `${url}/producto.html?id=${productId}`) {
   console.log('Entra en producto')
   validateToken();
   producto();
   navToggle();
   scroll();
   logout();
}