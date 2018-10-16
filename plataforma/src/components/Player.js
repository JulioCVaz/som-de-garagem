import React, {Component} from 'react';
import '../styles/Style.css';


export default class Player extends Component{
    render(){
        return(
            <div className="player">
                <div className="titulo-musica">
                    lorem ipsum
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
}