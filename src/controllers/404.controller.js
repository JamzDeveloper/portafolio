
import img_404 from "../assets/error404.svg";
 export default ()=>{
     const divElement = document.createElement('div');
     divElement.classList ="view-404";
     divElement.innerHTML =` <section class="container404">
     <img src="${img_404}" alt="">
 </section> `

     return divElement;
 };