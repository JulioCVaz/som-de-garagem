@extends('app')

@section('content')
    <div class="row">
        <div class="col col-md-12">
            <h1>som de garagem</h1>
            <form action="">
                <div class="form-control">
                    <label for="">Usuário: </label>
                    <input type="text" class="form-control">
                </div>
                <br>
                <div class="form-control">
                    <label for="">Senha: </label>
                    <input type="password" class="form-control">
                </div>
                <br>
                <button type="submit">logar</button>
            </form>
        </div>
    </div>
@stop