import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import grey from '@material-ui/core/colors/grey';
import logo from '../img/logo-som-de-garagem.png';



export default class Navbar extends Component{
    
    state = {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: grey[900],
            contrastText: '#fff',
        }
    }
    
    
    render(){
        const nav = grey[900];

        return(
        <div>
            <AppBar position="static" style={{background:nav}}>
                <Toolbar>
                    <div className="logo"><img src={logo}/></div>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}