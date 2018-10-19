import React ,{ Component }from 'react';
// import { Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button } from 'reactstrap';
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

class Response extends Component{
    
    state = {
        musicas: []
    };

    static getDerivedStateFromProps(props, state){
        let  nexState = {};
        if(props.musicas !== state.musicas){
            nexState = {
                musicas:props.musicas
            }
        }
        return nexState
    }

    render(){
        console.log(this.state);

        return(
        <div>
            <Grid container spacing={8}>
            {
                this.state.musicas.map((musica)=>
                <Grid item xs={4}>
                    <Card >
                        <div >
                            <CardContent >
                            <Typography component="h5" variant="h5">
                                {musica.musicas}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                                Mac Miller
                            </Typography>
                            </CardContent>
                            <div >
                            <IconButton aria-label="Previous">
                                <SkipPreviousIcon />
                            </IconButton>
                            <IconButton aria-label="Play/pause">
                                <PlayArrowIcon  />
                            </IconButton>
                            <IconButton aria-label="Next">
                                <SkipNextIcon />
                            </IconButton>
                            </div>
                        </div>
                        <CardMedia
                            
                            // image="/static/images/cards/live-from-space.jpg"
                            // title="Live from space album cover"
                        />
                    </Card>
                </Grid>
                )
            }
            </Grid>
        </div>
        );
    }
};


const mapStateToProps = state => ({
    musicas: state.listen
});

export default connect(mapStateToProps)(Response);