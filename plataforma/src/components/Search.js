import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import * as Actions from '../actions/listen';


class Search extends Component{

    constructor(props){
        super(props);
    };

    state = {
        hello: 'Bem vindo ao Som de Garagem',
        musicas: ''
    }

    addMusic = () => {
        return this.props.listenMusic(this.state.musicas);
    }


    buscaMusica = async (e) => {

        e.preventDefault();

        let data = document.querySelector('.input-musica').value;

        fetch(`http://localhost:8000/api/musica/${data}`)
        .then(
            response => response.json()
            )
        .then(
            response => {
                this.setState({musicas:response})
                this.addMusic();
            }
        )
        .catch(
            error=>console.error(error)
        );
    } 

   
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

const mapStateToProps = state => ({
    musicas: state.musicas,
  });
  
const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Search);