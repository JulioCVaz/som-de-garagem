import React, {Component} from 'react';
import {connect} from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid'

import Divider from '@material-ui/core/Divider';
import '../styles/Style.css';

class Artists extends Component{
/* 


https://material-ui.com/demos/drawers/
https://material-ui.com/style/color/


*/
    state = {
        artista: [],
        cliqueperfil: 'profile-toggle',
        top: false,
        left: false,
        bottom: false,
        right: false,
    }

    static getDerivedStateFromProps(props, state){
        let  nexState = {};
        if(props.artistas !== state.artista){
            nexState = {
                artista:props.artistas
            }
        }
        return nexState
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

    sideList = data => (
        <div>
            <p>{data}</p>
            <Divider />
        </div>
    );
    render(){
        return(
            <div className="fix-index">
            {this.state.artista.map((artista) =>
                <div>
                    <Button className={this.state.cliqueperfil} onClick={this.toggleDrawer('right', true)}>
                        <Grid>
                            <AccountCircle />
                            <Typography variant="caption" color="inherit" gutterBottom>
                                Perfil
                            </Typography>
                        </Grid>
                    </Button>
                    <SwipeableDrawer
                        anchor="right"
                        open={this.state.right}
                        onClose={this.toggleDrawer('right', false)}
                        onOpen={this.toggleDrawer('right', true)}
                        >
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('right', false)}
                            onKeyDown={this.toggleDrawer('right', false)}
                        >
                        {this.sideList(artista.nomeartista)}
                        </div>
                    </SwipeableDrawer>
                </div>
                )}
                
                    {/* // <div className="perfil-artists">
                    //     <p>{artista.nomeartista}</p>
                    //     <p>{artista.desartista}</p>
                    //     <p>{artista.tituloalbum}</p>
                    // </div> */}
            </div>
            );
        };
    }

const MapStateToProps = state => ({
    artistas: state.artists
});

export default connect(MapStateToProps)(Artists);