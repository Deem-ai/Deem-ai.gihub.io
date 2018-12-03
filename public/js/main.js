function handleResponse(res){
    console.log(res);
    console.log(res.success);
    if(res.success){
        alert('Éxito');
    }else{
        alert('Error, intenta de nuevo por favor.');
    }
}

function paperToggle(button){
    var btntext = button.children(":nth-child(1)"), icon = button.children(":nth-child(2)").children("i");
    console.log(text);
    var add = 'fa-paper-plane', remove = 'fa-spinner fa-pulse';
    var text = 'Enviar', disabled = false;
    if(icon.hasClass('fa-paper-plane')){
        var c = add, add = remove, remove = c;
        text = 'Enviando';
        disabled = true;
    }
    icon.removeClass(remove);
    icon.addClass(add)
    button.prop('disabled', disabled);
    btntext.text(text);
}

function readyFn( jQuery ){
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

    //catch submit and send POST
    $("#contact-form").on('submit', function( event ) {
        event.preventDefault();
        var form = $(this);
        var button = form.children("button");
        paperToggle(button);
        $.ajax({
            type : 'POST',
            url : '/contact',
            data : $(this).serialize(),
            dataType: 'json',
            success : function(res) {
                handleResponse(res);
            },
            error : function(e) {
                console.log('why');
                alert('Error, intenta de nuevo por favor.')
            }
        }).done(function(){
            paperToggle(button);
        });

    });

    $("#register-form").on('submit', function( event ) {
        event.preventDefault();
        var form = $(this);
        var button = form.children("button");
        paperToggle(button);
        $.ajax({
            type : 'POST',
            url : '/register',
            data : form.serialize(),
            dataType: 'json',
            success : function(res) {
                handleResponse(res);
            },
            error : function(e) {
                alert('Error, intenta de nuevo por favor.');
            }
        }).done(function(){
            paperToggle(button);
        });

    });
}

$(document).ready(readyFn);

$(".single-item").slick({
    dots: true,
    adaptativeHeight: true,
    autoplay: true,
    autoplaySpeed:3000,
});
