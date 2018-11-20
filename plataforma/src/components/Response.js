import React ,{ Component }from 'react';
import '../styles/Style.css';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import Grid from '@material-ui/core/Grid';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/listen';
import decaidos from '../img/decaidos_logo.jpeg';

class Response extends Component{
    
    state = {
        musicas: []
    };

    static getDerivedStateFromProps(props, state){
        let  nexState = {};
        if(props.musicas !== state.musicas){
            console.log(state);
            nexState = {
                musicas:props.musicas
            }
        }
        return nexState
    }

    play = () => {
        return this.props.playMusic(this.state.musicas)
    }

    render(){
        console.log(this.state);

        return(
        <div className="wrapper-response">
            <Grid container spacing={8} alignItems="center" justify="center">
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
                            <div className="img-card">
                                {/* img */}
                            </div>
                        </Card>
                    </Grid> : ''

                }
                </React.Fragment>
                )
            }
            </Grid>
        </div>
        );
    }
};


const mapStateToProps = state => ({
    musicas: state.listen,
    artistas: state.artists,
    album: state.albums
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Response);