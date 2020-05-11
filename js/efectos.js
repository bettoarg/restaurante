$(document).ready(function(){
//Efecto del menu
    $('.menu a').each(function(index, elemento){
        $(this).css({
            top: '-200px'
        });

        $(this).animate({
            top: '0'
        }, 2000 + (index * 500));
    });

//Efecto del Header
    if($(window).width() > 800){
        $('header .textos').css({
            opcity: 0,
            marginTop: 0
        });

        $('header .textos').animate ({
            opacity:1,
            marginTop: '-52px'
        }, 1500);
    }

//Scroll elementos Menu
    var acerceDe = $('#acerca-de').offset().top,
        menu = $('#platillos').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 450
        }, 500);
    });

    $('#btn-menu').on('click', function (e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: menu
      }, 500);
    });

    $('#btn-galeria').on('click', function (e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: galeria
      }, 500);
    });

      $('#btn-ubicacion').on('click', function (e){
      e.preventDefault();
      $('html, body').animate({
          scrollTop: ubicacion
      }, 500);
    });
    
});