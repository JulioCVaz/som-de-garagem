import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FormControl, Checkbox, FormGroup, FormControlLabel} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import '../styles/Style.css';
import logo from '../img/logo-som-de-garagem.png';


export default class Login extends Component{

    state = {
        checked:false
    }

    handleChange = name => event => {
        this.setState({ checked: event.target.checked });
      };

    handleSubmit = () => {
        
    }

    render(){
        return(
            <React.Fragment>
                <Grid container justify="center" xs={12}>
                    <div className="login-faixa">
                        <img src={logo} className="img-faixa"/>
                    </div>
                    <Grid xs={6} sm={3}>
                        <form onSubmit={this.handleSubmit} className="teste" noValidate autoComplete="off">
                            <FormControl fullWidth>
                                <TextField
                                id="standard-name"
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                name="email"
                                multiline
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField
                                id="standard-email"
                                name="password"
                                label="Senha"
                                type="password"
                                margin="normal"
                                variant="outlined"
                                />
                            </FormControl>
                            <FormGroup row>
                                <FormControlLabel 
                                    control={
                                    <Checkbox
                                        checked={this.state.checked}
                                        onClick={this.handleChange("true")}
                                        value="checkedA"
                                    />
                                    }
                                    label="Lembrar senha"
                                />
                            </FormGroup>
                            <Grid style={{
                                "display": "flex"
                            }} justify="center">
                                <Button variant="contained" color="secondary">
                                    Acessar Plataforma
                                </Button>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}