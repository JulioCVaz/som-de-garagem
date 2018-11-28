import React, {Component} from 'react';
import HeaderLayout from './HeaderLayout';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import api from "../services/api";

const styles = theme => ({
  paddingWrapper: {
    marginTop: 100
  },
  // input: {
  //   display: 'none',
  // },
  button: {
    margin: theme.spacing.unit,
  },
});

class UploadMusicas extends Component{

  state = {
    file: ''
  };

  handleFile = (e) => {
    this.setState({file:e.target.files[0]});
  }

  handleSend = (e) => {
    e.preventDefault();

    var n = this.state.file;
    var formdata = new FormData();
    formdata.append("audio", this.state.file, this.state.file.name);
    api.post('/upload', formdata)
      .then(
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
        return(
          <React.Fragment>
            <HeaderLayout/>
            <div className={classes.paddingWrapper}>
              <Grid container justify="center" alignItems="flex-start">
                <Grid xs={12}>
                  <Typography variant="h3" gutterBottom>
                      Upload de Músicas
                  </Typography>
                </Grid>
                <Grid xs={6} direction="row">
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
                  </label>
                </Grid>
                <Grid xs={6} direction="row">
                  <Button onClick={this.handleSend} variant="contained" component="span" className={classes.button}>Enviar</Button>
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

export default withStyles(styles)(UploadMusicas);