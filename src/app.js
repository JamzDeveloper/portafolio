import "./style.css";
import { router } from "./router/index.routes";
//
///*nav*/

/**resource nav */
import logo_dark from "./assets/logo.png";
import logo_white from "./assets/logo-white.png";
import luna from "./assets/luna.svg";
import sol from "./assets/sol.svg";
/*element nav*/
const img_logo = document.querySelector(".logo-img");
const img_mode = document.querySelector(".button-dark-img");
/*Menu */

const button_menu = document.querySelector(".button-menu");
const menu = document.querySelector(".container-links");

/*footer*/
/**resource footer */
import logo_instagram from "./assets/instagram.png";
import logo_github from "./assets/github.png";
import logo_linkedin from "./assets/linkedin.png";
import logo_facebook from "./assets/facebook.png";
import logo_gmail from "./assets/gmail.png";
/**element footer */
const img_instagram = document.querySelector(".footer-img-instagram");
const img_github = document.querySelector(".footer-img-github");
const img_linkedin = document.querySelector(".footer-img-linkedin");
const img_facebook = document.querySelector(".footer-img-facebook");
const img_gmail = document.querySelector(".footer-img-gmail");

let button_dark = document.querySelector(".button-dark");

/*importando img a nav*/
img_logo.src = logo_dark;
img_mode.src = luna;

/*importando img footer*/
img_instagram.src = logo_instagram;
img_github.src = logo_github;
img_linkedin.src = logo_linkedin;
img_facebook.src = logo_facebook;
img_gmail.src = logo_gmail;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("is-dark-mode");
  img_mode.src = sol;
  img_logo.src = logo_white;
}

button_dark.addEventListener("click", () => {
  if (document.body.className == "is-dark-mode") {
    document.body.classList.remove("is-dark-mode");
    document.body.classList.add("is-light-mode");
    img_mode.src = luna;
    img_logo.src = logo_dark;
  } else {
    document.body.classList.remove("is-light-mode");
    document.body.classList.add("is-dark-mode");

    img_mode.src = sol;
    img_logo.src = logo_white;
  }
});
/*Accion menu */

button_menu.addEventListener("click", () => {
  menu.classList.toggle("container-links-visible");
});
/**manejo de rutas */
router(window.location.hash);

window.addEventListener("hashchange", () => {
  menu.classList.remove("container-links-visible");

  router(window.location.hash);
});
/*
const onProgress = (event) => {
    const progressBar = document.querySelector(".progress-bar");
    const updatingBar = document.querySelector(".update-bar");
  
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  
  
  
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add("hide");
    } else {
      progressBar.classList.remove("hide");
    }
  };
  
  document.querySelector("model-viewer").addEventListener("progress", onProgress);
  */
