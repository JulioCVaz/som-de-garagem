import React, {Component} from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import * as Actions from '../actions/listen';


const styles = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        }
    }
});

class Search extends Component{

    constructor(props){
        super(props);
    };


    state = {
        hello: 'Bem vindo ao Som de Garagem',
        musicas: '',
        artistas: ''
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

        let data = document.querySelector('.input-musica').value;

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
        const { classes } = props;
        return(
            <div>
                <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6" color="inherit" noWrap>
                        Material-UI
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        />
                    </div>
                    </Toolbar>
                </AppBar>
            </div>
                {/* <InputGroup>
                    <Input className="input-musica" placeholder={this.state.hello}/>
                    <InputGroupAddon addonType="append">
                    <Button color="secondary" onClick={this.buscaMusica}>Buscar</Button>
                    </InputGroupAddon>
                </InputGroup> */}
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