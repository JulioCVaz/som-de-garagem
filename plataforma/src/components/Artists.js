import React, {Component} from 'react';
import {connect} from 'react-redux';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import '../styles/Style.css';

class Artists extends Component{
/* 


https://material-ui.com/demos/drawers/


*/
    state = {
        artista: [],
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

    render(){
        const sideList = (
            <div>
              <Divider />
            </div>
          );
        return(
            <div className="fix-index">
            {this.state.artista.map((artista) =>
                <div>
                    <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
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
                        {sideList}
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