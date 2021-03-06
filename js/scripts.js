const todoElDocumento = document.querySelector("*");
const capaOpaca = document.querySelector(".capa-opaca-oculta");

// Despliegue/ocultamiento menú oculto
if (document.querySelector(".menu-hamb")) {
  const btnMenuHamb = document.querySelector(".menu-hamb");
  const btnMenuHambClose = document.querySelector(".btn-cierre-menu");
  const navOptions = document.querySelector(".nav-options");
  const aOptions = document.querySelectorAll(".a-option");

  btnMenuHamb.addEventListener("click", () => {
    navOptions.classList.add("nav-options-revealed");
    capaOpaca.classList.add("capa-opaca-revealed");
    todoElDocumento.style.overflowY = "hidden";
  });
  btnMenuHambClose.addEventListener("click", () => {
    navOptions.classList.remove("nav-options-revealed");
    capaOpaca.classList.remove("capa-opaca-revealed");
    todoElDocumento.style.overflowY = "initial";
  });
  aOptions.forEach((opt) => {
    opt.addEventListener("click", () => {
      navOptions.classList.remove("nav-options-revealed");
      capaOpaca.classList.remove("capa-opaca-revealed");
      todoElDocumento.style.overflowY = "initial";
    });
  });
}

// Form oculto
if (document.querySelector(".contenedor-form")) {
  const btnLg = document.querySelector(".btn-lg");
  const form = document.querySelector(".contenedor-form");
  const cruzCierreForm = document.querySelector(".cruz-cierre-form-hidden");

  btnLg.addEventListener("click", () => {
    form.classList.add("contenedor-form-revealed");
    cruzCierreForm.classList.add("cruz-cierre-form")
    capaOpaca.classList.add("capa-opaca-revealed");
    todoElDocumento.style.overflowY = "hidden";
  });
  
  cruzCierreForm.addEventListener("click", () => {
    form.classList.remove("contenedor-form-revealed");
    cruzCierreForm.classList.remove("cruz-cierre-form")
    capaOpaca.classList.remove("capa-opaca-revealed");
    todoElDocumento.style.overflowY = "initial";
  });
}
