import React, {Component} from 'react';
// import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import * as Actions from '../actions/listen';


class Search extends Component{

    constructor(props){
        super(props);
    };


    state = {
        hello: 'Bem vindo ao Som de Garagem',
        musicas: '',
        artistas: '',
        style: {
            icon:'remove-display',
            class:'input-musica'
        }
    }

    addMusic = () => {
        return this.props.listenMusic(this.state.musicas);
    }

    getArtists = () => {
        return this.props.addArtist(this.state.artistas);
    }

    addArtists = () => {
        let nomeartista = this.state.musicas[0].nomeartista;
        let trocanome = nomeartista.split(" ");
        fetch(`http://localhost:8000/api/artista/${trocanome[0]}`)
        .then(
            response => response.json()
        )
        .then(
            response => {
                this.setState({artistas: response})
                this.getArtists()
            }
        )
        .catch(
            error => console.log(error)
        )
    }


    buscaMusica = async (e) => {

        e.preventDefault();

        let data = document.querySelector('#input-musica').value;

        fetch(`http://localhost:8000/api/musica/${data}`)
        .then(
            response => response.json()
            )
        .then(
            response => {
                this.setState({musicas:response})
                this.addMusic();
                this.addArtists();
            }
        )
        .catch(
            error=>console.error(error)
        );
    } 

   
    render(){
        return(
            <div>
                <Grid container justify="center">
                    <Grid item xs={6}>
                    <TextField
                        id="input-musica"
                        label="Busque por um título"
                        type="text"
                        margin="normal"
                        fullWidth
                        className={this.state.style.class}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Button onClick={this.buscaMusica} variant="fab" aria-label="Search" color="primary">
                            <Icon><SearchIcon className={this.state.style.icon}/></Icon>
                        </Button>
                    </Grid>
                </Grid>
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