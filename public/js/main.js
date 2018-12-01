/*
function checkScroll(){
    var startY = $('.navbar').height() * 2; //The point where the navbar changes in px

    if($(window).scrollTop() > startY){
        $('.navbar').addClass("bg-dark");
    }else{
        $('.navbar').removeClass("bg-dark");
    }
}

if($('.navbar').length > 0){
    $(window).on("scroll load resize", function(){
        checkScroll();
    });
}
*/

//smooth scroll
$("#navbarNav a, #navbarBrand, #main-btn").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if

  });

function readyFn( jQuery ){
    //catch submit and send POST
    $("#contact-form").on('submit', function( event ) {
        event.preventDefault();
        $.ajax({
            type : 'POST',
            url : '/contact',
            data : $(this).serialize(),
            dataType: 'json',
            success : function(customer) {
                alert('Exito');
            },
            error : function(e) {
                alert('Error, intenta de nuevo por favor.')
            }
        });

    });

    $("#register").on('submit', function( event ) {
        event.preventDefault();
        $.ajax({
            type : 'POST',
            url : '/register',
            data : $(this).serialize(),
            dataType: 'json',
            success : function(customer) {
                alert('Exito');
            },
            error : function(e) {
                alert('Error, intenta de nuevo por favor.');
            }
        });

    });

    /*
    $("#nav").hover(
        function(){ $(this).addClass('bg-dark') },
        function(){ $(this).removeClass('bg-dark') }
    )
    */
}

$(document).ready(readyFn);

$(".single-item").slick({
    dots: true,
    adaptativeHeight: true,
    autoplay: true,
    autoplaySpeed:3000,
});


