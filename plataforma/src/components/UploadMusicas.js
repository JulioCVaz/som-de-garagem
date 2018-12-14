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
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    minHeight: '100vh'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
});

class UploadMusicas extends Component{

  constructor(props){
    super(props);
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  state = {
    user: '',
    file: 0,
    fileimage:'',
    completed: 0,
    responseComplete: false,
    file: '',
    imagePreviewUrl: ''
  };

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    console.log(e.target.files[0].name);
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        fileimage: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

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
    formdata.append("image", this.state.fileimage, this.state.fileimage.name);
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
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} width="200px"/>);
      }
        return(
          <div>
          {/* <HeaderLayout/> */}
          <main className={classes.content}>
            <div className={classes.toolbar} />
              <div className={classes.paddingWrapper}>
                <Grid container xs={12} justify="center" alignItems="flex-start">
                  <Grid xs={10}>
                    <Grid xs={8}>
                      <Typography variant="h5" gutterBottom>
                          Upload de Músicas
                      </Typography>
                    </Grid>
                    <hr/>
                    <Grid xs={8}>
                      <div style={{
                        'display': 'flex',
                        'flex-directon': 'row',
                        'align-items': 'center',
                        'justify-content': 'space-between',
                        
                      }}>
                        <Grid xs={8}> 
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
                        </Grid>
                        <Grid xs={2}>
                            {$imagePreview}
                        </Grid>
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
                      <input
                        accept="image/*"
                        className={classes.input}
                        id="image-button-file"
                        multiple
                        type="file"
                        onChange={this._handleImageChange}
                      />
                      <label htmlFor="contained-button-file">
                        <Button variant="contained" color="secondary" component="span" className={classes.button}>
                          Selecione uma música
                        </Button>
                      </label>
                      <label htmlFor="image-button-file">
                        <Button variant="contained" color="secondary" component="span" className={classes.button}>
                          Selecione uma Thumbnail
                        </Button>
                      </label>
                      <Button onClick={this.handleSend} color="primary" variant="contained" component="span" className={classes.button}>Enviar</Button>
                      { 
                        (this.state.completed > 0) ?
                          <LinearProgress color="secondary" value={this.state.completed} />
                          :
                          (this.state.responseComplete) ? 
                            'Upload efetuado com sucesso' : ''               
                      }
                    </Grid>
                  </Grid>
                </Grid>
              </div>
          </main>
        </div>
        );
    }
}


UploadMusicas.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(UploadMusicas);
