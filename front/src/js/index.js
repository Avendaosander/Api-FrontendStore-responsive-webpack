const index = () => {
   const url = window.location.origin;
   const navTienda = document.getElementById('tienda')
   let slidePos = 1
   let slides = document.getElementsByClassName("producto")

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
               return location.href = `${url}/login.html`;
            } else{
               const main = document.querySelector('.carrusel')
               const leftArrow = document.createRange().createContextualFragment(/*html*/
                  `<button id="btn-left" class="btn-slide left"><i class="bi bi-chevron-left"></i></button>`
               )
               const rightArrow = document.createRange().createContextualFragment(/*html*/
                  `<button id="btn-rigth" class="btn-slide"><i class="bi bi-chevron-right"></i></button>`
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
               document.getElementById('btn-left').addEventListener('click', () => {
                  showSlides(slidePos += -1)
               })
               document.getElementById('btn-rigth').addEventListener('click', () => {
                  showSlides(slidePos += 1)
               })
            }
         })
         showSlides(slidePos)
   })
   
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