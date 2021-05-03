import Home from "../controllers/home.controller";
import Sobre_mi from "../controllers/sobre_mi.controller"; 
import Portafolio from "../controllers/portafolio.controller";
import Error404 from "../controllers/404.controller";
import Proximamente from "../controllers/proximamente.controller";
let content =document.getElementById("root");
const router = (route) => {

 content.innerHTML = '';
    
  switch(route){
        case '':{
            
            return content.appendChild(Home());
        }
        case '#/home':{
           
            return content.appendChild(Home());
        }
        case '#/sobre-mi':{

           
            return  content.appendChild(Sobre_mi());
        }
            
        case '#/portafolio':{
           
            return  content.appendChild(Portafolio());
        }
            
        case '#/aprende-conmigo':{//TODO proximamente falta terminar

            
            return content.appendChild(Proximamente());

        }
        default:
            return content.appendChild(Error404());  
    }
};
export { router };
