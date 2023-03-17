const nosotros = () => {
   const url = window.location.origin;
   const navNosotros = document.getElementById('nosotros')

   const navbar = document.querySelector('.navbar')
   const toggle = document.querySelector('.btn.btn-nav')

   toggle.addEventListener('click', () => {
      navbar.classList.toggle('open')
   })

   navNosotros.classList.toggle('active')
   document.addEventListener('DOMContentLoaded', async e => {
      await fetch(`http://localhost:3000/nosotros`, { 
         method: 'GET',
         headers: { 
            "Content-Type": "application/json"
         } 
      })
         .then(res => res.json())
         .then(response => {
            if (response.authLogin == false) {
               return location.href = `${url}/front/login.html`;
            }
         })
         
      const scrollHeader = document.getElementById('scrollView');
      scrollHeader.addEventListener('click', e => {
         e.preventDefault();
         const seccion = document.querySelector(scrollHeader.attributes.href.value);
         seccion.scrollIntoView({
            behavior: 'smooth'
         });
      });
      // slides = document.getElementsByClassName("card-info")
      showSlides(slidePos)

   })
   let slidePos = 1
   let slides = document.getElementsByClassName("card-info")

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
      slides[slidePos - 1].style.display = "flex"
   }
}

export default nosotros;