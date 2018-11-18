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
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const style = {
    width : '80%',
    root: {
        width: '100%' 
    }
}

export default class Register extends Component{
    state = {
        user:{
            password: '',
            repeatPassword: '',
            email: '',
            nome: ''
        },
        showPassword: false,
        token_csrf: '',
        direction: 'row',
        justify: 'center',
        alignItems: 'center'
      };

    handleChange = (event) => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    };

    handleClickShowPassword = () => {
        this.setState(state => ({ showPassword: !state.showPassword }));
    };

    handleRegister = (e) => {
        e.preventDefault();
        const {user} = this.state;

        if(!user.nome || !user.email || !user.password){
            this.setState({error: "Preencha todos os campos"});
        }else{
            try{
                var formData = new FormData();
                    formData.append('name', user.nome);
                    formData.append('email', user.email);
                    formData.append('password', user.password);
                    console.log(document.querySelector('meta[name="csrf-token"]').getAttribute("content"));
                api.post('/register', formData).then( (response) => {
                    console.log(response);
                }).catch( (error) => {
                    console.log(`Erro:  ${error}`)
                });
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

    componentDidMount(){
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.user.password) {
                return false;
            }
            return true;
        });
    }

    render(){
        const {
            error,
            errorMessages,
            validators,
            requiredError,
            helperText,
            validatorListener,
            withRequiredValidator,
            ...rest
        } = this.props;
        const { user } = this.state;
        return(
            <React.Fragment>
                <meta type="hidden" name="csrf-token" content="{{ csrf_token() }}"/>
                <Grid container xs={12}
                justify="space-evenly"
                >
                    <Grid xs={4}>
                        <div className="img-register-wrapper"></div>
                    </Grid>
                    <Grid
                    xs={6}
                    container
                    alignItems="center"
                    justify="center"
                    direction="column">
                    <ValidatorForm
                        style={style}
                        ref="form"
                        onSubmit={this.handleRegister}
                        onError={errors => console.log(errors)}
                    >
                        <TextValidator
                            style={style.root}
                            label="Nome"
                            onChange={this.handleChange}
                            name="nome"
                            value={user.nome}
                            validators={['required', 'isName']}
                            errorMessages={['this field is required', 'Nome não é válido']}
                        />
                        <TextValidator
                            style={style.root}
                            label="Email"
                            onChange={this.handleChange}
                            name="email"
                            value={user.email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />
                        <TextValidator
                            style={style.root}
                            label="Password"
                            onChange={this.handleChange}
                            name="password"
                            type="password"
                            validators={['required']}
                            errorMessages={['this field is required']}
                            value={user.password}
                        />
                        <TextValidator
                            style={style.root}
                            label="Repeat password"
                            onChange={this.handleChange}
                            name="repeatPassword"
                            type="password"
                            validators={['isPasswordMatch', 'required']}
                            errorMessages={['password mismatch', 'this field is required']}
                            value={user.repeatPassword}
                        />
                        <div>
                            <Button type="submit" onClick={this.handleRegister} variant="contained" style={{
                                'margin-top': '20px'
                            }}>
                                Cadastrar
                            </Button>
                        </div>
                        </ValidatorForm>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}