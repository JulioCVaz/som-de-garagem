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
import api from "../services/api";


const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    paddingWrapper: {
        marginTop: 100
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

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  class ListMusic extends Component{

    state = {
        dadosedit: '',
        open: false,
        profile: [],
        musicas: [],
        renderizer: false
    }

    removeMusic = (e) => {
        console.log(e.target.value);
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

    handleOpen = (e) => {
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
        console.log(this.state.musicas);
        return(
            <React.Fragment>
                <HeaderLayout/>
                <div className={classes.paddingWrapper}>
                    <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    >
                        { (this.state.renderizer) ?
                        <Grid xs={8}>
                            <Typography variant="h3" gutterBottom>
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
                                                    <TableCell identity={musica.id}>{musica.filepath_avatar}</TableCell>
                                                    <TableCell className={classes.hoverButton} onClick={this.handleOpen}><EditIcon/><input type="button" id={musica.id} value={musica.id}/></TableCell>
                                                    <TableCell className={classes.hoverButton}><DeleteIcon key={musica.id}/><input type="button" id={musica.id} value={musica.id} onClick={this.removeMusic}/></TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Paper>
                            <div>
                                <Modal
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                open={this.state.open}
                                onClose={this.handleClose}
                                >
                                <div style={getModalStyle()} className={classes.paper}>
                                    { 
                                        (this.state.dadosedit[0]) ?
                                            this.state.dadosedit.map(dados => (
                                                <React.Fragment key={dados.icon}>
                                                    <Typography variant="h6" id="modal-title">
                                                        {dados.musica}
                                                    </Typography>
                                                    <Typography variant="subtitle1" id="simple-modal-description">
                                                        {dados.criado}
                                                    </Typography>
                                                    <Typography variant="subtitle1" id="simple-modal-description">
                                                        {dados.icon}
                                                    </Typography>
                                                </React.Fragment>
                                            ))
                                        :
                                            'Nenhum dado para atualizar'
                                    }
                                </div>
                                </Modal>
                            </div>
                        </Grid>
                        :
                        <Grid xs={8}>
                            <Typography component="h2" variant="display1" gutterBottom>
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
  