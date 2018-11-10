var nav = $('.navbar-toggler');

$(nav).on('click', () => {
    $('.banner').toggleClass('blur');
});

jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
     event.preventDefault();
     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
    });
});

function plans(){
    alert('TRABALHO EM ANDAMENTO...');
}