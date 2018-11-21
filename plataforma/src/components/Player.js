import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/Style.css';
import ReactAudioPlayer from 'react-audio-player';
import contato from '../musicas/contato.mpeg';
import pandora from '../musicas/pandora.mpeg';


class Player extends Component{

    constructor(props){
        super(props);
        this.alteraPlay = this.alteraPlay.bind(this);
    }
    state = {
        status :'',
        musicas: this.props.musicas
    };


    alteraPlay = (status) => {
        let control = document.querySelector("#playerMusic");
        if(control != null){
            if(status == "true"){
                control.play();
            }else{
                control.pause();
            }
        }
    }


    componentWillReceiveProps(nextProps){
        if(nextProps.musicas[0] != undefined){
            if(nextProps.musicas[0].status == 'true'){
                this.setState({musicas:nextProps.musicas});
                setTimeout(()=>{
                    this.alteraPlay('true');
                },100);
            }else{
                setTimeout(()=>{
                    this.alteraPlay('false');
                }, 100);
            }
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     let  nexState = {};
    //     if(props.musicas !== state.musicas){
    //         if(props.musicas[0] !== undefined){
    //             if(props.musicas[0].nomemusica !== undefined){
    //                 nexState = {
    //                     status: 'true',
    //                     musicas:props.musicas
    //                 }
    //             }else{
    //                 nexState = {
    //                     status: 'false',
    //                     musicas:state.musicas
    //                 }
    //             }
    //         }
    //     }
    //     return nexState
    // }

    componentDidUpdate(){
        this.alteraPlay();
    }
    
    render(){
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