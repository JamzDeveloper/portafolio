
//import  views from '../views/home.html';
import img_home from "../assets/img_content_home.png";
 export default ()=>{
     const divElement = document.createElement('div');
     divElement.classList ="view-home";
     divElement.innerHTML =` <article class="home">
     <div class="container-dat-home">
         <div class="container-description">
             <p>Hola soy, <span>José Montenegro</span></p>
             <h3 class="frontend-developer">Frontend Developer</h3>
             <p class="content">Soy apacionado con la tecnologia y con la educacion lo 
                 <br>que ocaciona a que constantemente siga aprendiendo,
                 <br>estoy continuamente en busca de nuevos retos.</p>
 
             <button class="container-button-proyect">
             <a href="#/portafolio">  <h3>VER MIS PROYECTOS</h3></a>
             </button>
         </div>
         <div class="container-img-home">
             <img src="${img_home}" alt="" class="img-home">
         </div>
     </div>
     <div class="container-button-resume">
         <button class="resumen"><h3>DESCARGAR HOJA DE VIDA</h3></button>
         
     </div>
 </article>`

     return divElement;
 };