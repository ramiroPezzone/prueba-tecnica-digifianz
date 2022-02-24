const todoElDocumento = document.querySelector('*');
const capaOpaca = document.querySelector('.capa-opaca-oculta');

// Despliegue menú oculto
if (document.querySelector('.menu-hamb')) {
    const btnMenuHamb = document.querySelector('.menu-hamb');
    const btnMenuHambClose = document.querySelector('.btn-cierre-menu');
    const navOptions = document.querySelector('.nav-options');

    btnMenuHamb.addEventListener('click', () => {
        navOptions.classList.add('nav-options-revealed');
        capaOpaca.classList.add('capa-opaca-revealed')
        todoElDocumento.style.overflowY = 'hidden';
    })
    btnMenuHambClose.addEventListener('click', () => {
        navOptions.classList.remove('nav-options-revealed')
        capaOpaca.classList.remove('capa-opaca-revealed')
        todoElDocumento.style.overflowY = 'initial'
    })
}

// Form oculto
if (document.querySelector('.contenedor-form-hidden')) {
    const btnLg = document.querySelector('.btn-lg');
    const formOculto = document.querySelector('.contenedor-form-hidden');
    const cruzCierreForm = document.querySelector('.cruz-cierre-form');
    
    btnLg.addEventListener('click', () => {
        formOculto.classList.add('contenedor-form-revealed')
        capaOpaca.classList.add('capa-opaca-revealed')
        todoElDocumento.style.overflowY = 'hidden';
    })
    
    cruzCierreForm.addEventListener('click', () => {
        formOculto.classList.remove('contenedor-form-revealed')
        capaOpaca.classList.remove('capa-opaca-revealed')
        todoElDocumento.style.overflowY = 'initial'
    })

}