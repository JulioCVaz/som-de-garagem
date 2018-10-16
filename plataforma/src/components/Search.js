import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';


export default class Search extends Component{

    constructor(props){
        super(props);
        this.state = {
            hello: 'Bem vindo ao Som de Garagem'
        };
    }

    buscaMusica = async (e) => {
        
        e.preventDefault();

        let data = document.querySelector('.input-musica').value;

        fetch(`http://localhost:8000/api/musica/${data}`)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error=>console.error(error));

    }

    // postData = async (url='', data={}) => {
    //     return fetch(url, {
    //         method: 'POST',
    //         mode:'cors',
    //         cache: 'no-cache',
    //         credentials: 'same-origin',
    //         headers: {"Content-Type": "application/json; charset=utf-8"},
    //         body: JSON.stringify(data)
    //     })
    //     .then(response => response.json())
    // }

    



    render(){
        return(
            <div>
                <InputGroup>
                    <Input className="input-musica" placeholder={this.state.hello}/>
                    <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={this.buscaMusica}>Buscar</Button>
                    </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}