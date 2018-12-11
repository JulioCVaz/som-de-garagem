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
  });

  class ListMusic extends Component{

    state = {
        musicas: [],
        renderizer: false
    }

    componentWillMount(){
            let data = localStorage.getItem('user');
            let new_data = JSON.parse(data);
            let n = new_data.id;
            api.get(`/musicas/artista/${n}`).then(
                  response => {
                    console.log(response);
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
                <HeaderLayout/>
                <div className={classes.paddingWrapper}>
                    <Grid container>
                        { (this.state.renderizer) ?
                        <Grid xs={8}>
                            <Paper className={classes.root}>
                                <Table className={classes.table}>
                                    <TableHead>
                                    <TableRow>
                                        <TableCell>Dessert (100g serving)</TableCell>
                                        <TableCell numeric>Calories</TableCell>
                                        <TableCell numeric>Fat (g)</TableCell>
                                        <TableCell numeric>Carbs (g)</TableCell>
                                        <TableCell numeric>Protein (g)</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow key="">
                                            <TableCell component="th" scope="row">
                                                Teste
                                            </TableCell>
                                            <TableCell>1</TableCell>
                                            <TableCell>2</TableCell>
                                            <TableCell>3</TableCell>
                                            <TableCell>4</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Paper>
                        </Grid>
                        :
                        'Carregando informações' 
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
  