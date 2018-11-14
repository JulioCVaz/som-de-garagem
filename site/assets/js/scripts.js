    var nav = $('.navbar-toggler');

    $(nav).on('click', () => {
    $('.banner').toggleClass('blur');
    });

jQuery(documento).ready(function ($){

    if ($('.banner').hasClass('blur')){
        console.log('xablau');
    }
    else{
        console.log('Não foi dessa vez');
    }
})

jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
     event.preventDefault();
     $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
    });
});

function plans(){
    alert('TRABALHO EM ANDAMENTO...');
}