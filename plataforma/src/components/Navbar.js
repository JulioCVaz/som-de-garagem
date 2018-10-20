import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey';



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
                <Typography variant="h6" color="inherit">
                    Photos
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
        );
    }
}