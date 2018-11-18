import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope);

export default class MessageConfirme extends Component{
    redirectRouter(){
        window.location.href="/";
    }

    render(){
        return(
            <Grid container
                direction="column"
                alignItems="center"
                justify="center"
                style={{
                    'min-height': '100vh' 
                }}
            >   
                <Grid xs={2}>
                    <FontAwesomeIcon icon="envelope" style={{
                        'font-size' : '40px'
                    }}/>
                </Grid>
                <Grid xs={4}>
                    <Typography component="h5" variant="h5" gutterBottom>
                        Verifique seu email para confirmar sua conta
                    </Typography>
                </Grid>
                <Grid xs={4}>
                    <Typography variant="body1" gutterBottom>
                        <a href="#" onClick={this.redirectRouter}>&larr; Retornar para home</a>
                    </Typography>
                </Grid>
            </Grid>
        );
    }
}