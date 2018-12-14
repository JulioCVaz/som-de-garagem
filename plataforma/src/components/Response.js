import React ,{ Component }from 'react';
import '../styles/Style.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/listen';
import decaidos from '../img/decaidos_logo.jpeg';



const styles = theme => ({
    root: {
        flexGrow: 1,
      },
    cardPlayer: {
      display: 'flex',
    },
    card: {
        maxWidth: 200,
        height: 350,
      },

      titulos: {
          color: 'white'
      },
    media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
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
                this.playPause(this.state.status);
                return this.props.playMusic(this.state.musicas);
            }, 100);
        }else{
            this.setState({status:'false'});
            setTimeout(()=> {
                this.playPause(this.state.status);
            }, 100);
        }
    };

    playPause = (status) => {
         return this.props.playPause(status);
    };

    render(){
        const { classes, theme } = this.props;
        return(
        <div className="wrapper-response">
            <Grid container>
             { this.state.musicas.map((musica)=>
                <Grid xs={12} alignItems="center" justify="center">
                    <Grid xs={4}>
                        <Card className={classes.cardPlayer}>
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
                                image={musica.filepath_avatar}
                                title="Live from space album cover"
                            />
                        </Card>
                    </Grid>
                    <hr style={{
                        backgroundColor: 'white'
                    }}/>
                    <Typography variant="h6" className={classes.titulos}>
                        Outras músicas do mesmo gênero
                    </Typography>
                    <br/>
                    <Grid container className={classes.root} spacing={16}>
                        {musica.metadados.musicas_metadados.map((musicas)=>
                            <Grid item xs={3}>
                                <Card className={classes.cardPlayer}>
                                    <div className={classes.details}>
                                        <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            {musicas.nomemusica}
                                        </Typography>
                                        </CardContent>
                                        <div className={classes.controls}>
                                        <IconButton aria-label="Play/pause">
                                            <PlayArrowIcon className={classes.playIcon} />
                                        </IconButton>
                                        </div>
                                    </div>
                                    <CardMedia
                                        className={classes.cover}
                                        image="/static/images/cards/live-from-space.jpg"
                                        title="Live from space album cover"
                                    />
                                </Card>
                            </Grid>
                        )}
                    </Grid>
                    <hr style={{
                        backgroundColor: 'white'
                    }}/>
                    <Typography variant="h6" className={classes.titulos}>
                        Outros artistas do mesmo gênero
                    </Typography>
                    <br/>
                    <Grid container className={classes.root} spacing={16}>
                        {musica.metadados.artistas_metadados.map((artistas) =>
                        <Grid item xs={3}>
                            <Grid container className={classes.demo} justify="center" spacing={12}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        className={classes.media}
                                        height="140"
                                        image="/static/images/cards/contemplative-reptile.jpg"
                                        title="Contemplative Reptile"
                                        />
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {artistas.nomeartista}
                                        </Typography>
                                        <Typography component="p">
                                            {artistas.desc_artista}
                                        </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                        Share
                                        </Button>
                                        <Button size="small" color="primary">
                                        Learn More
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        )}
                    </Grid>
                    <hr style={{
                        backgroundColor: 'white'
                    }}/>
                </Grid>
                )}
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