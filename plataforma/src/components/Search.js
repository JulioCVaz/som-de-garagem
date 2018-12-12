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
        data: '',
        style: {
            icon:'color-icon',
            class:'input-musica'
        }
    }

    addMusic = () => {
        return this.props.listenMusic(this.state.data);
    }

    getArtists = () => {
        return this.props.addArtist(this.state.data);
    }

    getAlbums = () => {
        return this.props.addAlbums(this.state.data);
    }

    addNotFound = () => {
        return this.props.addNFound(this.state.data);
    }
    reset = () => {
        return this.props.resetApp();
    }

    buscaDados = async (e) => {
        if(e.keyCode == '13'){
            let data = this.state.busca;
            fetch(`http://localhost:8000/api/data/${data}`)
            .then(
                response => response.json()
                )
            .then((response) => {
                console.log(response);
                if(response.message){
                    this.reset();
                    this.setState({data:response});
                    this.addNotFound();
                }else{
                    if(typeof response.find.music === 'object'){
                        // criar uma funcao para o reset e o setState
                        this.reset();
                        this.setState({data:response})
                        this.addMusic();
                    }else if(typeof response.find.artist === 'object'){
                        this.reset();
                        this.setState({data:response});
                        this.getArtists();
                    }else if(typeof response.find.album === 'object'){
                        this.reset();
                        this.setState({data:response});
                        this.getAlbums();
                    }else{
                        console.log(`Nenhum resultado para ${data}`);
                        this.setState({data:response});
                    }
                }
            })
            .catch(
                error => console.error(error)
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
                    placeholder="Procure por música, artista ou álbum"
                    onChange={e => this.setState({ busca: e.target.value })}
                    onKeyDown={this.buscaDados}
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
    data: state.data,
  });
  
const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Search));