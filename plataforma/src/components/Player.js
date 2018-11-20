import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Style.css';
import ReactAudioPlayer from 'react-audio-player';
import contato from '../musicas/contato.mpeg';
import pandora from '../musicas/pandora.mpeg';


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

    componentDidUpdate(){
        if(this.state.musicas.length > 0){
            let control = document.querySelector("#playerMusic");
            if(control != null){
                console.log();
                if(this.state.musicas[0].status == "true"){
                    control.play();
                }else{
                    control.pause();
                }
            }
        }
    }
    
    render(){
        console.log(this.props);
        return(
            <div className="player">
                {
                    (this.state.musicas) ?
                    this.state.musicas.map((musica, key) =>
                    <React.Fragment>
                    <div className="titulo-musica">
                        {musica.nomemusica}
                    </div>
                    <ReactAudioPlayer
                    id = "playerMusic"
                    style={{
                        width:'60%'
                    }}
                    src=
                    {
                        (musica.nomemusica == 'Contato') ? contato : (musica.nomemusica == 'Júlia e a caixa de pandora') ? pandora : ''
                    }
                    controls
                    />
                    </React.Fragment>
                    )
                    : ''
                }
            </div>
        );
    }
};

const mapStateToProps = state => ({
    musicas:state.play
});

export default connect(mapStateToProps)(Player);