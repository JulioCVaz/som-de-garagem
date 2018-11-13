import React, {Component} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FormControl, Checkbox, FormGroup, FormControlLabel} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import '../styles/Style.css';
import logo from '../img/logo-som-de-garagem.png';
import {isAuthenticated} from '../auth.js';


export default class Login extends Component{

    state = {
        checked:false,
        token: ''
    }

    handleChange = name => event => {
        this.setState({ checked: event.target.checked });
      };

    handleSubmit = (e) => {
        e.preventDefault();
        var user = document.querySelector('#email').value;
        var password = document.querySelector('#senha').value;
        var formData = new FormData();
        formData.append('email', user);
        formData.append('password', password);

        console.log(formData);

        isAuthenticated(formData);
    }

    componentWillMount(){
        fetch('http://localhost:8000/api/token')
        .then(response => response.json())
        .then(
            response => this.setState({token:response})
        )
        .catch(error => console.log(error))
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
                                id="email"
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                name="email"
                                multiline
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <TextField
                                id="senha"
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
                                <Button type="submit" variant="contained" color="secondary">
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