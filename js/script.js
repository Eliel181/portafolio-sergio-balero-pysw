









const loader = $('.loading'); /*Selecciona cualquier elemento con la clase loading, probablemente nuestro indicador de carga. Lo almacena en una constante loader.*/
$(window).on('load', function() {  /*Agrega un evento load (una vez cargada la página) a la ventana. La función anónima se ejecutará una vez cargada la página.*/
	loader.fadeOut(); /*Oculta el indicador de carga loader mediante una transición fadeOut de jQuery.*/
});



let options = { /*Crea un objeto de opción vacío. */
  strings: ['Analista Programador', 'Desarrollador Web Full Stack'], /*Establece las cadenas de subtítulos. En este caso, dos opciones de carrera.*/
  typeSpeed: 70, /*Establece la velocidad de tipografía en 70ms (milisegundos). Determina la velocidad a la que aparece el texto. */
  backSpeed: 50,/*Establece la velocidad de retroceso en 50ms. Determina la velocidad a la que se elimina el texto. */
  smartBackspace: false, /*Establece la eliminación inteligente en false. Determina si el paquete eliminará todo el texto al retroceder o solo hará que aparezca. En este caso, solo hará parpadear. */
  backDelay: 2000, /*Establece una demora de retroceso de 2 segundos. Determina el retraso entre la eliminación de todo el texto y el comienzo. */
  loop: true, /*Establece el bucle en true. Determina si el subtítulo se ejecutará de forma continua (en bucle). En este caso, sí. */
};

let typed = new Typed('.typed', options);

const nav = document.querySelector('nav');

window.addEventListener('scroll', function (){
    if (window.pageYOffset > 100){
      nav.classList.add('bg-dark', 'bg-body-transparent')
    }else{
      nav.classList.remove('bg-dark', 'bg-body-transparent')
    }
})



document.addEventListener("DOMContentLoaded", function() {
  var offcanvasNavbar = document.getElementById('offcanvasNavbar');
  var offcanvasToggle = document.querySelector('[data-bs-target="#offcanvasNavbar"]');
  var offcanvasLinks = document.querySelectorAll('#offcanvasNavbar .nav-link');

  offcanvasLinks.forEach(function(link) {
      link.addEventListener('click', function() {
          var offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasNavbar);
          if (offcanvasInstance) {
              offcanvasInstance.hide();
          }
      });
  });
});