import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import '../styles/Style.css';
import api from "../services/api";
import logo from '../img/logo-som-de-garagem.png';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { FormControl, Checkbox, FormGroup, FormControlLabel} from '@material-ui/core';
import ReCAPTCHA from "react-google-recaptcha";
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const style = {
    width : '80%',
    root: {
        width: '100%',
        paddingTop: '20px',
        paddingBottom: '20px'
    }
}; 

export default class Register extends Component{
    state = {
        user:{
            password: '',
            repeatPassword: '',
            email: '',
            nome: ''
        },
        checked:false,
        open: false,
        showPassword: false,
        token_csrf: '',
        direction: 'row',
        justify: 'center',
        alignItems: 'center'
    };

    handleClickOpen = (e) => {
        e.preventDefault();
        (this.state.checked) ? this.setState({ checked: e.target.checked }) : this.setState({ open: true }); this.setState({checked: true})
        
    };
    
    handleClose = () => {
        this.setState({ open: false });
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

    onChange(value) {
        console.log("Captcha value:", value);
      }

    redirectRouter(){
        window.location.href="/";
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
                    <div className="login-faixa-register">
                        <img onClick={this.redirectRouter} src={logo} className="img-faixa"/>
                    </div>
                    <Grid xs={4}>
                        <div className="img-register-wrapper"></div>
                    </Grid>
                    <Grid
                    xs={6}
                    container
                    alignItems="center"
                    justify="center"
                    direction="column">
                    <Typography variant="h3" gutterBottom>
                        Inscrever-se
                    </Typography>
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
                            label="Confirme sua senha"
                            onChange={this.handleChange}
                            name="repeatPassword"
                            type="password"
                            validators={['isPasswordMatch', 'required']}
                            errorMessages={['password mismatch', 'this field is required']}
                            value={user.repeatPassword}
                        />
                        <div>
                                <FormGroup row>
                                    <FormControlLabel 
                                        control={
                                        <Checkbox
                                            checked={this.state.checked}
                                            onClick={this.handleClickOpen}
                                            value="checkedA"
                                        />
                                        }
                                        label="aceito os termos de contrato"
                                    />
                                </FormGroup>
                                <Dialog
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                    >
                                    <DialogTitle id="alert-dialog-title">{"Termos e políticas de privacidade"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                        <h2>Política de privacidade para <a href='http://somdegaragem.com.br'>som de garagem</a></h2><p>Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso site o mais produtiva e agradável possível.</p><p>A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para o som de garagem.</p><p>Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem o som de garagem serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98).</p><p>A informação pessoal recolhida pode incluir o seu nome, e-mail, número de telefone e/ou telemóvel, morada, data de nascimento e/ou outros.</p><p>O uso do som de garagem pressupõe a aceitação deste Acordo de privacidade. A equipa do som de garagem reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.</p><h2>Os anúncios</h2><p>Tal como outros websites, coletamos e utilizamos informação contida nos anúncios. A informação contida nos anúncios, inclui o seu endereço IP (Internet Protocol), o seu ISP (Internet Service Provider, como o Sapo, Clix, ou outro), o browser que utilizou ao visitar o nosso website (como o Internet Explorer ou o Firefox), o tempo da sua visita e que páginas visitou dentro do nosso website.</p><h2>Cookie DoubleClick Dart</h2><p>O Google, como fornecedor de terceiros, utiliza cookies para exibir anúncios no nosso website;</p><p>Com o cookie DART, o Google pode exibir anúncios com base nas visitas que o leitor fez a outros websites na Internet;</p><p>Os utilizadores podem desativar o cookie DART visitando a Política de <a href='http://politicaprivacidade.com/' title='privacidade da rede de conteúdo'>privacidade da rede de conteúdo</a> e dos anúncios do Google.</p><h2>Os Cookies e Web Beacons</h2><p>Utilizamos cookies para armazenar informação, tais como as suas preferências pessoas quando visita o nosso website. Isto poderá incluir um simples popup, ou uma ligação em vários serviços que providenciamos, tais como fóruns.</p><p>Em adição também utilizamos publicidade de terceiros no nosso website para suportar os custos de manutenção. Alguns destes publicitários, poderão utilizar tecnologias como os cookies e/ou web beacons quando publicitam no nosso website, o que fará com que esses publicitários (como o Google através do Google AdSense) também recebam a sua informação pessoal, como o endereço IP, o seu ISP, o seu browser, etc. Esta função é geralmente utilizada para geotargeting (mostrar publicidade de Lisboa apenas aos leitores oriundos de Lisboa por ex.) ou apresentar publicidade direcionada a um tipo de utilizador (como mostrar publicidade de restaurante a um utilizador que visita sites de culinária regularmente, por ex.).</p><p>Você detém o poder de desligar os seus cookies, nas opções do seu browser, ou efetuando alterações nas ferramentas de programas Anti-Virus, como o Norton Internet Security. No entanto, isso poderá alterar a forma como interage com o nosso website, ou outros websites. Isso poderá afetar ou não permitir que faça logins em programas, sites ou fóruns da nossa e de outras redes.</p><h2>Ligações a Sites de terceiros</h2><p>O som de garagem possui ligações para outros sites, os quais, a nosso ver, podem conter informações / ferramentas úteis para os nossos visitantes. A nossa política de privacidade não é aplicada a sites de terceiros, pelo que, caso visite outro site a partir do nosso deverá ler a politica de privacidade do mesmo.</p><p>Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.</p>
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={this.handleClose} color="secondary">
                                        DISCORDO
                                        </Button>
                                        <Button onClick={this.handleClose} color="primary" autoFocus>
                                        CONCORDO
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            <ReCAPTCHA
                                sitekey="6LcteHsUAAAAAJbSqU_0hkY7EjPgCafKaaoDsLg1"
                                onChange={this.onChange}
                            />
                            <Button type="submit" onClick={this.handleRegister} variant="contained" color="secondary" style={{
                                'margin-top': '20px',
                                'width' : '40%'
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