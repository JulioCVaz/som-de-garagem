@extends('layouts.app')

@section('content')

<style>
    .main{
        min-height: 60vh;
        display: flex;
        align-items: center;
    }

    .color-link,
    .color-link:hover{
        color: #f50057;
    }
</style>
<section class="main">
    <div class="container">
        <div class="row">
            <div class="col col-md-12">
                @if(isset($data))
                    @if($data['success'] == true)
                        <h3>{{$data['message']}} <a class="color-link" href="http://localhost:3000/"><strong>acessar plataforma</strong></a></h3>
                    @else
                    <div class="alert alert-danger" role="alert">
                        {{$data['message']}} <a class="alert-link" href="mailto:somdegaragem@somdegaragem.com.br"> Envie um email para nós</a> 
                    </div>
                    @endif
                @endif
            </div>
        </div>
    </div>
</section>

@stop