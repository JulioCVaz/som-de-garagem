import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Style.css';


class Player extends Component{

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
        return(
            <div className="player">
                <div className="titulo-musica">
                {
                    this.state.musicas.map((musica) => musica.musicas)
                }
                </div>
                <div className="player-musica">
                    <audio className="control-song" controls>
                        <source src="horse.ogg" type="audio/ogg"/>
                        <source src="horse.mp3" type="audio/mpeg"/>
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => ({
    musicas:state.listen
});

export default connect(mapStateToProps)(Player);