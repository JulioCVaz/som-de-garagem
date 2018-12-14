import React, {Component} from 'react';
import HeaderLayout from './HeaderLayout';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import api from "../services/api";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    paddingWrapper: {
        marginTop: 30,
        'background-color': 'white'
      },
    table: {
      minWidth: 700,
    },
    hoverButton:{
        '&:hover' : {
            'cursor': 'pointer'
        }
    },
    progress: {
        flexGrow: 1,
    },
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
      },
  });

  

  class ListMusic extends Component{

    state = {
        dadosedit: '',
        open: false,
        profile: [],
        musicas: [],
        newname:'',
        renderizer: false
    }

    removeMusic = (e) => {
        console.log(this.state);
        let removeId = e.target.value;

        let formdata = new FormData();
        formdata.append("idmusica", removeId);
        formdata.append("usuario", this.state.profile.name);
        formdata.append("idusuario", this.state.profile.id);

        api.post('/musicas/remove', formdata)
        .then(
            response => {
                console.log(response);
                this.setState({musicas:response.data.musicas});
            }
        ).catch(
            error => console.log(error)
        )
    }

    handleClickOpen = (e) => {
        this.setState({ open: true });
        console.log(e.target);

        let d = document.getElementById(e.target.value);
        
        console.log(d);

        let nomemusica = d.querySelector("th").innerHTML;
        let eleme = d.querySelectorAll("[identity]");
        let criadoem = eleme[0].innerHTML;
        let icon = eleme[1].innerHTML;
        let arr = [{
                'musica':nomemusica,
                'criado': criadoem,
                'icon': icon 
            }];
        this.setState({dadosedit: arr});
      };
    
      handleAtualiza = () => {
        
        let t = document.querySelector('label');

        let oldname = t.innerHTML;

        let formdata = new FormData();
        formdata.append('id_user', this.state.profile.id);
        formdata.append('newname', this.state.newname);
        formdata.append('oldname', oldname);

        api.post('/musicas/atualiza', formdata)
        .then((response) =>{ 
            this.handleClose();
            this.setState({musicas:response.data.musicas})
            }
        )
        .catch(
            error => console.log(error)
        );
      }
      handleClose = () => {
        this.setState({ open: false });
      };

    handleOpen = (e) => {
        this.setState({ open: true });
        

      };
    
    handleClose = () => {
    this.setState({ open: false });
    };


    componentWillMount(){
            let data = localStorage.getItem('user');
            let new_data = JSON.parse(data);
            this.setState({profile:new_data});
            let n = new_data.id;
            api.get(`/musicas/artista/${n}`).then(
                // passar caminho de cima
                // api.get(`/musicas/artista/3`).then(
                    response => {
                        this.setState({musicas:response.data.musicas});
                        console.log(this.state.profile);
                    }
                    ).catch(
                        error => {
                  console.log(error);
                }
              )
        setTimeout(() => {
            this.setState({renderizer:true});
        }, 4000);
    }

    render(){
        const { classes } = this.props;
        return(
            <React.Fragment>
                <div className={classes.paddingWrapper}>
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{paddingBottom: 100}}
                    >
                        { (this.state.renderizer) ?
                        <Grid xs={10}>
                            <Typography variant="h3" gutterBottom style={{'paddingTop': '50px'}}>
                                Minhas músicas
                            </Typography>
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Título Música</TableCell>
                                        <TableCell numeric>Criado em</TableCell>
                                        <TableCell numeric>Ícone</TableCell>
                                        <TableCell numeric>Editar</TableCell>
                                        <TableCell numeric>Remover</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            this.state.musicas.map(musica => (
                                                <TableRow key={musica.id} id={musica.id}>
                                                    <TableCell component="th" scope="row">
                                                        {musica.nomemusica}
                                                    </TableCell>
                                                    <TableCell identity={musica.id}>{musica.created_at}</TableCell>
                                                    <TableCell identity={musica.id}>
                                                    <img src={musica.filepath_avatar} style={{width: 50, height: 55}}/>
                                                    </TableCell>
                                                    <TableCell className={classes.hoverButton} onClick={this.handleClickOpen}><EditIcon/><input type="button" id={musica.id} value={musica.id}/></TableCell>
                                                    <TableCell className={classes.hoverButton}><DeleteIcon key={musica.id}/><input type="button" id={musica.id} value={musica.id} onClick={this.removeMusic}/></TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Paper>
                            <div>

                                    { 
                                        (this.state.dadosedit[0]) ?
                                            this.state.dadosedit.map(dados => (
                                                <React.Fragment key={dados.icon}>
                                                <Dialog
                                                    open={this.state.open}
                                                    onClose={this.handleClose}
                                                    aria-labelledby="form-dialog-title"
                                                >
                                                    <DialogTitle id="form-dialog-title">Atualizar</DialogTitle>
                                                    <DialogContent>
                                                    <DialogContentText>
                                                        edite informações da música
                                                    </DialogContentText>
                                                    <TextField
                                                        autoFocus
                                                        margin="dense"
                                                        id="name"
                                                        label={dados.musica}
                                                        type="text"
                                                        fullWidth
                                                        onChange={e => this.setState({ newname:e.target.value })}
                                                    />
                                                    </DialogContent>
                                                    <DialogActions>
                                                    <Button onClick={this.handleClose} color="primary">
                                                        Cancelar
                                                    </Button>
                                                    <Button onClick={this.handleAtualiza} color="primary">
                                                        Atualizar
                                                    </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </React.Fragment>
                                            ))
                                        :
                                            ''
                                    }
                                </div>
                            
                        </Grid>
                        :
                        <Grid xs={8}>
                            <Typography component="h2" variant="display1" gutterBottom style={{
                                'paddingTop': '30px'
                            }}>
                                    Carregando Músicas
                            </Typography>
                            <div className={classes.progress}>
                                <LinearProgress color="secondary"/>
                            </div>
                        </Grid>
                    }
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

ListMusic.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListMusic);
  