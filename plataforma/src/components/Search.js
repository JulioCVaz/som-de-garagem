import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import * as Actions from '../actions/listen';
import red from '@material-ui/core/colors/red';
import { fade } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing.unit * 3,
          width: 'auto',
        },
      },
    
      searchWrapper: {
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
      },
      searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width: '600px',
      },
      inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '500px',
        [theme.breakpoints.up('md')]: {
          width: 500,
        },
      },
})



class Search extends Component{

    constructor(props){
        super(props);
        
    };

    state = {
        busca: '',
        hello: 'Bem vindo ao Som de Garagem',
        musicas: '',
        data: {
            musica:'',
            album: '',
            metadados: ''
        },
        artistas: '',
        style: {
            icon:'color-icon',
            class:'input-musica'
        }
    }


    addMusic = () => {
        return this.props.listenMusic(this.state.musicas);
    }

    getArtists = () => {
        return this.props.addArtist(this.state.artistas);
    }

    reset = () => {
        return this.props.resetApp();
    }

    addArtists = () => {
        let nomeartista = this.state.musicas.find.artista[0].nomeartista;
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
        if(e.keyCode == '13'){
            let data = this.state.busca;
            fetch(`http://localhost:8000/api/musica/${data}`)
            .then(
                response => response.json()
                )
            .then(
                response => {
                    this.reset();
                    this.setState({musicas:response})
                    this.addMusic();
                    this.addArtists();
                }
            )
            .catch(
                error=>console.error(error)
            );
        }
    }

   
    render(){
        const search = red[800];
        const { classes } = this.props;
        return(
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Procure por música, artista ou gênero"
                    onChange={e => this.setState({ busca: e.target.value })}
                    onKeyDown={this.buscaMusica}
                    classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                    }}
                />
                </div>
        );
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    musicas: state.musicas,
  });
  
const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Search));