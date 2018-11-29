import React, {Component, useReducer} from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { FormControl, Checkbox, FormGroup, FormControlLabel} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import '../styles/Style.css';
import logo from '../img/logo-som-de-garagem.png';
import {login, user} from '../services/auth.js';
import api from "../services/api";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../styles/Style.css';
import * as Actions from '../actions/listen';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
    root: {
        flexGrow: 1,
      },

    cardPlayer: {
      display: 'flex',
    },

    button: {
    '&:hover': {
        'color': 'black'
        }
    }
});

class Login extends Component{

    state = {
        email: '',
        password: '',
        error: '',
        checked:false,
    }

   

    handleChange = name => event => {
        this.setState({ checked: event.target.checked });
      };

    responseProfile = profile => {
        this.props.ProfileApplication(profile);
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {email, password} = this.state;
        console.log(this.state);
        if(!email || !password){
            this.setState({error: "Preencha os campos com seu email e senha para logar"});
        }else{
            try{
                var formData = new FormData();
                formData.append('email', email);
                formData.append('password', password);
                const response = await api.post("/login", formData)
                if(login(response.data.data.auth_token)){
                    user(response.data.data);
                    console.log();
                    /**auth_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNTQzNDU3ODg2LCJleHAiOjE1NDM0NjE0ODYsIm5iZiI6MTU0MzQ1Nzg4NiwianRpIjoiWDN2THFqTnpHOVhobFdFdSIsInN1YiI6MTd9.8oSvcIYpOx41FplcG6Yd-uJHdlNdkUonv02vCt1BPYA"
email: "julio.oliveiravaz0@gmail.com"
id: 17
name: "Júlio César de Oliveira Vaz"
                     * 
                     * 
                     */
                    // user(response.data.data);
                    this.responseProfile(response.data.data);
                    setTimeout(()=>{
                        this.props.history.push("/sdg");
                    }, 150);
                }else{
                    this.setState({error: "Login e senha não localizados"});
                }
            }catch(err){
                this.setState({error: "Houve um problema com o login, verifique suas credenciais"});
            }
        } 
    }

    render(){
        const { classes, theme } = this.props;
        return(
            <React.Fragment>
                <Grid container justify="center" xs={12} className="container-form">
                    <div className="login-faixa">
                        <img src={logo} className="img-faixa"/>
                    </div>
                    <Grid xs={12} sm={3}>
                        <form onSubmit={this.handleSubmit} className="form-login" noValidate autoComplete="off">
                            <FormControl fullWidth>
                                <TextField
                                id="email"
                                label="Email"
                                margin="normal"
                                variant="outlined"
                                name="email"
                                multiline
                                onChange={e => this.setState({ email: e.target.value })}
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
                                onChange={e => this.setState({ password: e.target.value })}
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
                                "display": "flex",
                                "flex-direction": "column"
                            }} justify="center">
                                <Button type="submit" variant="contained" color="secondary">
                                    Acessar Plataforma
                                </Button>
                                <Divider className="divider-login" style={{
                                    'margin-top': '10px',
                                    'margin-bottom': '10px'
                                }}/>
                                <Button href="/cadastro"  variant="outlined" color="secondary" className={classes.button}>
                                    Cadastre-se
                                </Button>
                            </Grid>
                        </form>
                        {  (this.state.error != '') ?
                            <div>
                                <Paper elevation={1}>
                                <Typography component="p">
                                    {this.state.error}
                                </Typography>
                                </Paper>
                            </div>
                        : ''}
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

Login.propTypes = {
    theme: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    profile: state.profile
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Login));