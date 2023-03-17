const nosotros = () => {
   const url = window.location.origin;
   const navNosotros = document.getElementById('nosotros')
   let slidePos = 1

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
               return location.href = `${url}/login.html`;
            }
         })
      
      // slides = document.getElementsByClassName("card-info")
      showSlides(slidePos)
      document.getElementById('btn-left').addEventListener('click', () => {
         showSlides(slidePos += -1)
      })
      document.getElementById('btn-rigth').addEventListener('click', () => {
         showSlides(slidePos += 1)
      })

   })
   let slides = document.getElementsByClassName("card-info")

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