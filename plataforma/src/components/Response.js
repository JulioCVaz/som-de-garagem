import React ,{ Component }from 'react';
import '../styles/Style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/listen';
import decaidos from '../img/decaidos_logo.jpeg';



const styles = theme => ({
    card: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.unit,
      paddingBottom: theme.spacing.unit,
    },
    playIcon: {
      height: 38,
      width: 38,
    },
  });

class Response extends Component{
    
    state = {
        status: 'false',
        musicas: [],
        artistas: [],
        album: [],
    };

    static getDerivedStateFromProps(props, state){
        let  nexState = {};
        if(props.musicas !== state.musicas){
            nexState = {
                musicas:props.musicas
            }
        }else if(props.artistas !== state.artistas){
            nexState = {
                artistas:props.artistas
            }
        }else if(props.album !== state.albums){
            nexState = {
                album:props.album
            }
        }else{
            console.log("erro");
        }
        return nexState
    }

    play = () => {
        if(this.state.status == 'false'){
            this.setState({status:'true'});
            setTimeout(()=> {
                return this.props.playPauseMusic(this.state.status, this.state.musicas);
            }, 100);
        }else{
            this.setState({status:'false'});
            setTimeout(()=> {
                return this.props.playPauseMusic(this.state.status, this.state.musicas);
            }, 100);
        }
        
    };


    render(){
        const { classes, theme } = this.props;
        return(
        <div className="wrapper-response">
            <Grid container>
                <Grid xs={4} spacing={8} alignItems="center" justify="center">
            {/* 
            {
                this.state.musicas.map((musica)=>
                <React.Fragment>
                <Grid item xs={6}>
                    <Card >
                        <div>
                            <CardContent >
                            <Typography component="h5" variant="h5">
                                {musica.nomemusica}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {musica.nomeartista}
                            </Typography>
                            </CardContent>
                            <div >
                            <IconButton aria-label="Previous">
                                <SkipPreviousIcon />
                            </IconButton>
                            <IconButton aria-label="Play/pause">
                                <PlayArrowIcon  onClick={this.play}/>
                            </IconButton>
                            <IconButton aria-label="Next">
                                <SkipNextIcon />
                            </IconButton>
                            </div>
                        </div>
                    </Card>
                </Grid>
                {
                    (musica.nomemusica == 'Contato' || musica.nomemusica == 'Júlia e a caixa de pandora') ?
                    <Grid item xs={2}>
                        <Card>
                            <div className="img-card"> */}
                                {/* img */}
                            {/* </div>
                        </Card>
                    </Grid> : ''

                }
                </React.Fragment>
                )
            }
            </Grid> */}
             { this.state.musicas.map((musica)=>
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {musica.nomemusica}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                {musica.nomeartista}
                            </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                            <IconButton aria-label="Play/pause">
                                {
                                    (this.state.status == 'false') ? <PlayCircleOutlineIcon className={classes.playIcon} onClick={this.play}/> :
                                    <PauseCircleOutlineIcon className={classes.playIcon} onClick={this.play}/>
                                }
                            </IconButton>
                            </div>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={decaidos}
                            title="Live from space album cover"
                        />
                    </Card>
                )}
            </Grid>
        </Grid>
        </div>
        );
    }
};

Response.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    musicas: state.listen,
    artistas: state.artists,
    album: state.albums
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Response));