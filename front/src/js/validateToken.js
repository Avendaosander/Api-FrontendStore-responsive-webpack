const validateToken = () => {
   if ("token" in localStorage === false) {
      window.location = './login.html'
   }
}
export default validateToken;