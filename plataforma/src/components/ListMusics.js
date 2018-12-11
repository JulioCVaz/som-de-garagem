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
    }
  });

  class ListMusic extends Component{

    state = {
        musicas: [],
        renderizer: false
    }

    editMusic = () => {
        // TODO
    }

    removeMusic = () => {
        // TODO
    }
    componentWillMount(){
            let data = localStorage.getItem('user');
            let new_data = JSON.parse(data);
            let n = new_data.id;
            // api.get(`/musicas/artista/${n}`).then(
            // passar caminho de cima
            api.get(`/musicas/artista/3`).then(
                  response => {
                    this.setState({musicas:response.data.musicas});
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
                                                <TableRow key={musica.id}>
                                                    <TableCell component="th" scope="row">
                                                        {musica.nomemusica}
                                                    </TableCell>
                                                    <TableCell>{musica.created_at}</TableCell>
                                                    <TableCell>{musica.filepath_avatar}</TableCell>
                                                    <TableCell className={classes.hoverButton} onClick={this.editMusic}><EditIcon/></TableCell>
                                                    <TableCell className={classes.hoverButton} onClick={this.removeMusic}><DeleteIcon/></TableCell>
                                                </TableRow>
                                            ))
                                        }
                                    </TableBody>
                                </Table>
                            </Paper>
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
  