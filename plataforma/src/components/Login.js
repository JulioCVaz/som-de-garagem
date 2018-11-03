import React, {Component} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';


export default class Login extends Component{
    render(){
        return(
            <React.Fragment>
                <Grid container justify="container" xs={6}>
                <form className="teste" noValidate autoComplete="off">
                    <TextField
                    id="standard-name"
                    label="Name"
                    margin="normal"
                    />
                </form>
                </Grid>
            </React.Fragment>
        );
    }
}