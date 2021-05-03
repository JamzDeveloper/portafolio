//import  views from '../views/home.html';
import img_sobre_mi from "../assets/Developer activity-bro.svg";
import logo_hmtl from "../assets/skills logos/html.png";
import logo_css from "../assets/skills logos/css-5.svg";
import logo_javascript from "../assets/skills logos/logo-javascript.svg";
import logo_bootstrap from "../assets/skills logos/bootstrap-4.svg";
import logo_webpack from "../assets/skills logos/webpack-icon.svg";
import logo_figma from "../assets/skills logos/figma-1.svg";
import logo_mysql from "../assets/skills logos/MySQL.png";
import logo_nodejs from "../assets/skills logos/nodejs-1.svg";
import logo_git from "../assets/skills logos/git-icon.svg";


 export default ()=>{
     const divElement = document.createElement('div');
     divElement.classList ="view-sobre-mi";
     divElement.innerHTML =`
     <article class="content-presentation">
         <div class="content-presentation-text">
             <h3 class="presentation-text-title">¿QUIÉN SOY?</h3>
             <p class="presentationn-text-content">Soy Jose Montenegro un fronted developer, estudiante <br> de informatica y autodidacta, apacionado por la tecnologia <br>y
                 la educación..</p>
             <h3 class="presentation-text-title">INTERESES</h3>
             <p class="presentationn-text-content">Soy amante de la programacion, actualmente me encuentro<br> enfocado en las tecnologias web principalmente <br>en javascript, y la creacion de aplicaciones web con react.</p>
             <h3 class="presentation-text-title">OBJETIVOS</h3>
             <p class="presentationn-text-content">Me encuentro en busca de retos profesionales que me ayuden <br> a adquirir experiencia en proyecto, como tambien aprender<br> constantemete nuevas tecnologias y formas de mejorar mis <br>habilidades.</p>

         </div>
         <div class="content-presentation-img">
             <img src="${img_sobre_mi}" alt=""class="presentation-img">
         </div>
     </article>
     <article class="content-skills">
         <h2 class="content-skills-tittle">CONOCIMIENTO</h2>
         <div class="container-skills-card">
             <div class="container-skills-flex">
             
             <div class="skills-element">
                 <figure>

                     <img src="${logo_hmtl}" alt="">
                     <div class="cloak">
                         <h3>HTML5</h3>
                      
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="${logo_css}" alt="">
                     <div class="cloak">
                         <h3>CSS3</h3>
                       
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="${logo_javascript}" alt="">
                     <div class="cloak">
                         <h3>JAVASCRIPT</h3>
                        
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="${logo_webpack}" alt="">
                     <div class="cloak">
                         <h3>WEBPACK</h3>
                      
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="${logo_bootstrap}" alt="">
                     <div class="cloak">
                         <h3>BOOTSTRAP</h3>
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="${logo_figma}" alt="">
                     <div class="cloak">
                         <h3>FIGMA</h3>
                       
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="${logo_mysql}" alt="">
                     <div class="cloak">
                         <h3>MySQL</h3>
                       
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="${logo_nodejs}" alt="">
                     <div class="cloak">
                         <h3>NODEJS</h3>
                       
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="${logo_git}" alt="">
                     <div class="cloak">
                         <h3>GIT</h3>
                         </div>
                 </figure>

             </div>

         </div>
     </div>
     </article>`

     return divElement;
 };