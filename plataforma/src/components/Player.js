import React from 'react';
import {connect} from 'react-redux';
import '../styles/Style.css';


const Player = props => (
    <div className="player">
        <div className="titulo-musica">
            {
                (!props.musicas) ?  '' : props.musicas.nomemusica}
        </div>
        <div className="player-musica">
            <audio className="control-song" controls>
                <source src="horse.ogg" type="audio/ogg"/>
                <source src="horse.mp3" type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    </div>
)

const mapStateToProps = state => ({
    musicas:state.musicas
});

export default connect(mapStateToProps)(Player);