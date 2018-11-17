import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import '../styles/Style.css';
import api from "../services/api";
import {register} from "../services/auth";

export default class Register extends Component{

    state = {
        password: '',
        confirme: '',
        email: '',
        nome: '',
        showPassword: false,
        token_csrf: ''
      };

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleRegister = () => {
        const {nome, email, password, token_csrf} = this.state;

        if(!nome && !email && !password){
            this.setState({error: "Preencha todos os campos"});
        }else{
            try{
                var formData = new FormData();
                    formData.append('name', nome);
                    formData.append('email', email);
                    formData.append('password', password);
                    console.log(document.querySelector('meta[name="csrf-token"]').getAttribute("content"));
                api.post('/register', formData).then( (response) => {
                    console.log(response);
                }).catch( (error) => {
                    console.log(`Erro:  ${error}`)
                });
                // if(register(response.data.response)){
                //     console.log('confirmar no email');
                // }else{
                //     this.setState({error: "Erro ao efetuar cadastro"});
                // }
            }catch(err){
                console.log(err);
            }
        }

    }

    componentWillMount(){
        api.get('/token')
        .then((response) => {
            this.setState({token_csrf: response.data.token})
          })
          .catch((error) => {
            console.log(error);
          })

    }

    render(){
        return(
            <React.Fragment>
                    <meta type="hidden" name="csrf-token" content="{{ csrf_token() }}"/>
                    <Grid container xs={12}
                    direction="row"
                    justify="space-evenly"
                    >
                    <Grid xs={4}>
                        <div className="img-register-wrapper"></div>
                    </Grid>
                    {/* <form> */}
                        <Grid
                        xs={6}
                        container
                        justify="center"
                        direction="column">
                            <FormControl>
                                <InputLabel htmlFor="adornment-nome">Nome:</InputLabel>
                                <Input 
                                    type="text"
                                    value={this.state.nome}
                                    onChange={this.handleChange('nome')}
                                />
                            </FormControl>
                            <FormControl>
                                <InputLabel htmlFor="adornment-email">Email</InputLabel>
                                <Input 
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.handleChange('email')}
                                />
                            </FormControl>
                            <FormControl>
                            <InputLabel htmlFor="adornment-password">Senha</InputLabel>
                            <Input
                                id="adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="Toggle password visibility"
                                    onClick={this.handleClickShowPassword}
                                    >
                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                            </FormControl>
                            <FormControl>
                            <InputLabel htmlFor="adornment-password">Confirme a senha</InputLabel>
                            <Input
                                id="adornment-password"
                                type='password'
                                value={this.state.confirme}
                                onChange={this.handleChange('confirme')}
                            />
                            </FormControl>
                            <div>
                                <Button onClick={this.handleRegister} variant="contained" style={{
                                    'margin-top': '20px'
                                }}>
                                    Cadastrar
                                </Button>
                            </div>
                        </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}