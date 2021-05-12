
//import  views from '../views/home.html';
import img_home from "../assets/img_content_home.png";
import modelJamz from "../assets/models/JamzDeveloper.glb"

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
         <model-viewer class="model-3d" src="${modelJamz}" shadow-softness="0.1" camera-controls shadow-intensity="1.5" autoplay
         animation-name="armature">
         <div class="progress-bar hide" slot="progress-bar">
           <div class="update-bar"></div>
         </div>
     
     
       </model-viewer>
         </div>
     </div>
     <div class="container-button-resume">
         <button class="resumen"><h3>DESCARGAR HOJA DE VIDA</h3></button>
         
     </div>
 </article>`

     return divElement;
 };