//import  views from '../views/home.html';
//import img_sobre_mi from "../assets/Developer activity-bro.svg";
//import logo_hmtl from "../assets/skills logos/html.png";
//import logo_css from "../assets/skills logos/css-5.svg";
//import logo_javascript from "../assets/skills logos/logo-javascript.svg";
//import logo_bootstrap from "../assets/skills logos/bootstrap-4.svg";
//import logo_webpack from "../assets/skills logos/webpack-icon.svg";
//import logo_figma from "../assets/skills logos/figma-1.svg";
//import logo_mysql from "../assets/skills logos/MySQL.png";
//import logo_nodejs from "../assets/skills logos/nodejs-1.svg";
//import logo_git from "../assets/skills logos/git-icon.svg";
//import logo_react from "../assets/skills logos/react-2.svg"

export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "view-sobre-mi";
  divElement.innerHTML = `
     <article class="content-presentation">
         <div class="content-presentation-text">
             <h3 class="presentation-text-title">¿QUIÉN SOY?</h3>
             <p class="presentationn-text-content">Soy José Montenegro un fronted developer, estudiante <br> de informática y autodidacta, apasionado por la tecnología <br>y
                 la educación.</p>
             <h3 class="presentation-text-title">INTERESES</h3>
             <p class="presentationn-text-content">Soy amante de la programación, actualmente me encuentro<br> enfocado en las tecnologías web principalmente <br>en JavaScript, y la creación de aplicaciones web con React.</p>
             <h3 class="presentation-text-title">OBJETIVOS</h3>
             <p class="presentationn-text-content">Me encuentro en busca de retos profesionales que me ayuden <br> a adquirir experiencia en proyecto, como también aprender<br> constantemente nuevas tecnologías y formas de mejorar mis <br>habilidades.</p>
         </div>
         <div class="content-presentation-img">
             <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852822/portafolio/version%201.0/assets/Developer_activity-bro_khqnq0.svg" alt=""class="presentation-img">
         </div>
     </article>
     <article class="content-skills">
         <h2 class="content-skills-tittle">CONOCIMIENTO</h2>
         <div class="container-skills-card">
             <div class="container-skills-flex">
             
             <div class="skills-element">
                 <figure>

                     <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852824/portafolio/version%201.0/assets/html_rjv64l.png" alt="logo html">
                     <div class="cloak">
                         <h3>HTML5</h3>
                      
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852822/portafolio/version%201.0/assets/css-5_ddx6qq.svg" alt="logo css3">
                     <div class="cloak">
                         <h3>CSS3</h3>
                       
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852825/portafolio/version%201.0/assets/logo-javascript_giqnbx.svg" alt="logo javascript">
                     <div class="cloak">
                         <h3>JAVASCRIPT</h3>
                        
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
 
                 <figure>
                 <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620966625/portafolio/version%201.0/assets/react-2_eed3as.svg" alt="logo react">
                    
                    <div class="cloak">
                         <h3>REACT</h3>
                 
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852821/portafolio/version%201.0/assets/bootstrap-4_epdcj8.svg" alt="logo bootstrap">
                     <div class="cloak">
                         <h3>BOOTSTRAP</h3>
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852821/portafolio/version%201.0/assets/figma-1_etrjc9.svg" alt="logo figma">
                     <div class="cloak">
                         <h3>FIGMA</h3>
                       
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852826/portafolio/version%201.0/assets/MySQL_xqmhrr.png" alt="logo mysql">
                     <div class="cloak">
                         <h3>MySQL</h3>
                       
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852827/portafolio/version%201.0/assets/nodejs-1_dstxls.svg" alt="logo  nodejs">
                     <div class="cloak">
                         <h3>NODEJS</h3>
                       
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                 <figure>

                     <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852824/portafolio/version%201.0/assets/git-icon_yhq3ly.svg" alt="logo git">
                     <div class="cloak">
                         <h3>GIT</h3>
                         </div>
                 </figure>

             </div>
             <div class="skills-element">
                
                    <figure>

                 <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852827/portafolio/version%201.0/assets/webpack-icon_wi8zcy.svg" alt="logo webpack">
                 <div class="cloak">
                     <h3>WEBPACK</h3>
                  
                     </div>
                 </figure>

             </div>

         </div>
     </div>
     </article>`;

  return divElement;
};
