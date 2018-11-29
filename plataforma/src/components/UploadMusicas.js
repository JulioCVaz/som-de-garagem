import React, {Component} from 'react';
import HeaderLayout from './HeaderLayout';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import api from "../services/api";

const styles = theme => ({
  paddingWrapper: {
    marginTop: 100
  },
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing.unit,
  },
  root: {
    flexGrow: 1,
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class UploadMusicas extends Component{

  state = {
    user: '',
    file: 0,
    completed: 0,
    responseComplete: false
  };

  handleFile = (e) => {
    if(e.target.files.length > 0){
      this.setState({file:e.target.files[0]});
    }else{
      if(!this.state.file == 0){
        this.setState({file:0})
      }
    }
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 500);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    if (completed === 100) {
      setTimeout(()=>{
        this.setState({ completed: 0 });
      }, 2000);
      this.setState({responseComplete: true});
    }
  };

  handleSend = (e) => {
    e.preventDefault();

    let data = localStorage.getItem('user');
    let new_data = JSON.parse(data);
    let n = new_data.id;

    var formdata = new FormData();
    formdata.append("audio", this.state.file, this.state.file.name);
    formdata.append('id_user', n);
    api.post('/upload', formdata, {
      onUploadProgress: progressEvent => {
        this.setState({completed: Math.round((progressEvent.loaded / progressEvent.total) * 100)})
      }
    }).then(
          response => {
            console.log(response);
          }
      ).catch(
        error => {
          console.log(error);
        }
      )
  }
  render(){
      const {classes, theme} = this.props;
      console.log(this.state.profile);
        return(
          <React.Fragment>
            <HeaderLayout/>
            <div className={classes.paddingWrapper}>
              <Grid container justify="center" alignItems="flex-start">
                <Grid xs={8}>
                  <Grid xs={8}>
                    <Typography variant="h5" gutterBottom>
                        Upload de Músicas
                    </Typography>
                  </Grid>
                  <hr/>
                  <Grid xs={8} direction="row">
                  <div>
                    <Paper className={classes.root} elevation={1}>
                      <Typography variant="h5" component="h3">
                        Título: {(this.state.file != 0) ? this.state.file.name : ''}
                      </Typography>
                      <Typography component="p">
                        Tamanho do arquivo: {(this.state.file != 0) ?
                          (this.state.file.size).toString().substring(0,1) + ' MB'
                          : ''}
                      </Typography>
                      <Typography component="p">
                        Tipo Arquivo: {(this.state.file != 0) ? this.state.file.type : ''}
                      </Typography>
                    </Paper>
                  </div>
                    <Divider/>
                    <input
                      accept="audio/*"
                      className={classes.input}
                      id="contained-button-file"
                      multiple
                      type="file"
                      onChange={this.handleFile}
                    />
                    <label htmlFor="contained-button-file">
                      <Button variant="contained" component="span" className={classes.button}>
                        Upload
                      </Button>
                      <Button onClick={this.handleSend} variant="contained" component="span" className={classes.button}>Enviar</Button>
                    </label>
                    <br/>
                    { 
                      (this.state.completed > 0) ?
                        <LinearProgress color="secondary" value={this.state.completed} />
                        :
                        (this.state.responseComplete) ? 
                          'Upload efetuado com sucesso' : ''               
                    }
                  </Grid>
                  <Grid xs={4} direction="row">
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </React.Fragment>  
        );
    }
}


UploadMusicas.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UploadMusicas);
