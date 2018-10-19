import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Style.css';

class Artists extends Component{

    state = {
        artista: []
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

    render(){
        console.log(this.state);
        return(
            
                this.state.artista.map((artista) => 
                    <div className="perfil-artists">
                        <p>{artista.nomeartista}</p>
                        <p>{artista.desartista}</p>
                        <p>{artista.tituloalbum}</p>
                    </div>
                )
            )
        };
    }

const MapStateToProps = state => ({
    artistas: state.artists
});

export default connect(MapStateToProps)(Artists);