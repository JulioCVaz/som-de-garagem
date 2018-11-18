<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="utf-8">
</head>
<body>

<div>
    <h3>Som de Garagem</h3>
    <br>
    Olá {{ $name }},
    <br>
    <br>
    Obrigado por criar uma conta conosco. Não esqueça de completar seu cadastro!
    <br>
    Por favor, clique no link abaixo ou copie-o na barra de endereços do seu navegador para confirmar seu endereço de e-mail:
    <br>

    <a href="{{ url('user/verify', $verification_code)}}">Confirmar meu endereço de Email </a>

    <br/>
</div>

</body>
</html>
