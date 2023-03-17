import "../css/styles.css";

console.log('Hola desde webpack')

// import "./validateToken.js";
// import "./logout.js";
// import "./login.js";
// import "./register.js";
import index from "./index.js";
import nosotros from "./nosotros.js";
// import "./contacto.js";
// import "./producto.js";

const url = window.location.origin;
const urlActual = document.URL;
if (urlActual == `${url}/` || `${url}/index.html`) {
   index();
}
// if (urlActual == `${url}/nosotros.html`){
//    nosotros();
// }