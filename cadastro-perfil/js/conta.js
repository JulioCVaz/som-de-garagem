var questions = [
    {question:"Como podemos chamá-lo(a)?"},
    {question:"Qual será seu tipo de perfil?"},
    {question:"Qual sua data de nascimento?"},
    {question:"Selecione seu sexo:"},
    {question:"Selecione os gêneros musicais que você mais se interessa"},
    {question:"Selecione os gêneros musicais que você mais se interessa"},
    {question:"Selecione os gêneros musicais que você mais se interessa"}
  ]



;(function(){

var tTime = 100  // transition transform time from #register in ms
var wTime = 200  // transition width time from #register in ms
var eTime = 1000 // transition width time from inputLabel in ms

// init
// --------------
var position = 0

putQuestion()

progressButton.addEventListener('click', validate)
inputField.addEventListener('keyup', function(e){
    transform(0, 0) // ie hack to redraw
    if (e.keyCode == 13) {
        e.preventDefault();
        progressButton.click();
    }
})

// functions
// --------------

// load the next question
function putQuestion() {
    inputLabel.innerHTML = questions[position].question
    inputField.value = ''
    inputField.type = questions[position].type  
    inputField.focus()
    showCurrent()
    perfil()
}

function perfil(){

    if (position == 0){
        
        console.log('0');
        $("#option").hide();
    }

    if (position == 1){
        
        console.log('1');
        
        $('#inputField').hide();
        $('#option').show();
        tipo();
    }

    if(position == 2){
        
        $('#option').show();
        console.log('2');
        date();
    }

    if(position == 3){
        
        $('#option').show();
        console.log('3');
        sex();
    }
    if(position == 4){
        
        $('#option').show();
        console.log('4');
        musicalGenreOne();
    }
    if(position == 5){
        
        $('#option').show();
        console.log('5');
        musicalGenreTwo();
    }
    if(position == 6){
        
        $('#option').show();
        console.log('6');
        musicalGenreThree();
    }
}

function tipo(){
    $("#option").load( "telas/tipo.html" );
}

function date(){
    $("#option").load( "telas/date.html" );
}

function sex(){
    $("#option").load( "telas/sex.html" );
}

function musicalGenreOne(){
    $("#option").load( "telas/musicOne.html" );
    $("#register").css({"width":"465px"});
    $(".input-options").css({"height":"320px"});
    $("#inputContainer input").css({"width":"auto"});
}

function musicalGenreTwo(){
    $("#option").load( "telas/musicTwo.html" );
    $("#register").css({"width":"465px"});
    $(".input-options").css({"height":"320px"});
}

function musicalGenreThree(){
    $("#option").load( "telas/musicThree.html" );
    $(".input-options").css({"height":"320px"});
}

// when all the questions have been answered
function done() {
    $("#register").css({"width":"0"});
    // remove the box if there is no next question
    register.className = 'close'
    
    // add the h1 at the end with the welcome text
    var h1 = document.createElement('h1')
    h1.appendChild(document.createTextNode('Welcome ' + questions[0].value + '!'))
    setTimeout(function() {
    register.parentElement.appendChild(h1)     
    setTimeout(function() {h1.style.opacity = 1}, 50)
    }, eTime)
    
}

// when submitting the current question
function validate() {

    questions[position].value = inputField.value

    ok(function() {
    
    // set the progress of the background
    progress.style.width = ++position * 100 / questions.length + 'vw'
    progress.style.opacity = 1;

    // if there is a new question, hide current and load next
    if (questions[position]) hideCurrent(putQuestion)
    else hideCurrent(done)
            
    })

}

// helper
// --------------

function hideCurrent(callback) {
    inputContainer.style.opacity = 0
    inputProgress.style.transition = 'none'
    inputProgress.style.width = 0
    setTimeout(callback, wTime)
}

function showCurrent(callback) {
    inputContainer.style.opacity = 1
    inputProgress.style.transition = ''
    inputProgress.style.width = '100%'
    setTimeout(callback, wTime)
}

function transform(x, y) {
    register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)'
}

function ok(callback) {
    register.className = ''
    setTimeout(transform, tTime * 0, 0, 10)
    setTimeout(transform, tTime * 1, 0, 0)
    setTimeout(callback,  tTime * 2)
}

}())