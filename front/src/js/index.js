const index = () => {
   const url = window.location.origin;
   const urlActual = document.URL;
   const navTienda = document.getElementById('tienda')
   const navbar = document.querySelector('.navbar')
   const toggle = document.querySelector('.btn.btn-nav')
   let slidePos = 1
   let slides = document.getElementsByClassName("producto")

   toggle.addEventListener('click', () => {
      navbar.classList.toggle('open')
   })

   console.log('JS desde el front');

   navTienda.classList.toggle('active')
   document.addEventListener('DOMContentLoaded', async e => {
      await fetch('http://localhost:3000', { 
         method: 'GET',
         headers: { 
            "Content-Type": "application/json"
         } 
      })
         .then(res => res.json())
         .then(response => {
            // console.log(response)
            if (response.authLogin == false) {
               // console.log('No login');
               return location.href = `${url}/front/login.html`;
            } else{
               const main = document.querySelector('.carrusel')
               const leftArrow = document.createRange().createContextualFragment(/*html*/
                  `<button onclick="slider(-1)" class="btn-slide left"><i class="bi bi-chevron-left"></i></button>`
               )
               const rightArrow = document.createRange().createContextualFragment(/*html*/
                  `<button onclick="slider(1)" class="btn-slide"><i class="bi bi-chevron-right"></i></button>`
               )
               main.append(leftArrow);
               response.forEach(franela => {
                  // const main = document.querySelector('.grid')
                  const producto = document.createRange().createContextualFragment(/*html*/
                     `<article class="producto anim">
                        <a href="producto.html?id=${franela._id}">
                           <figure>
                              <img class="producto_imagen" src=${franela.src} alt="Imagen camisa">
                              <figcaption class="producto_nombre">${franela.nombre}</figcaption>
                              <p class="producto_precio">$${franela.price}</p>
                           </figure>
                        </a>
                     </article>`
                  )
                  main.append(producto);
               })
               main.append(rightArrow);
               slides = document.getElementsByClassName("producto")
            }
         })
         showSlides(slidePos)

         const scrollHeader = document.getElementById('scrollView');
         scrollHeader.addEventListener('click', e => {
            e.preventDefault();
            const seccion = document.querySelector(scrollHeader.attributes.href.value);
            seccion.scrollIntoView({
               behavior: 'smooth'
            });
         });
   })

   function slider(n) {
      showSlides(slidePos += n)
   }
   const showSlides = (n) => {
      let i;
      if (n > slides.length) { slidePos = 1}
      if (n < 1) { slidePos = slides.length}
      
      for (let i = 0; i < slides.length; i++) {
         slides[i].style.display = "none"
      }
      // console.log(slides[slidePos - 1])
      slides[slidePos - 1].style.display = "block"
   }
}

export default index;