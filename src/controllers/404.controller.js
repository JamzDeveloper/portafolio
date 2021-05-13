//import img_404 from "../assets/error404.svg";
export default () => {
  const divElement = document.createElement("div");
  divElement.classList = "view-404";
  divElement.innerHTML = ` <section class="container404">
     <img src="https://res.cloudinary.com/duhbmesjr/image/upload/v1620852822/portafolio/version%201.0/assets/error404_gbia0s.svg" alt="">
 </section> `;

  return divElement;
};
