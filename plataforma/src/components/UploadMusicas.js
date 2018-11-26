import React, {Component} from 'react';
import HeaderLayout from './HeaderLayout';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paddingWrapper: {
    marginTop: 100
  }
});

class UploadMusicas extends Component{
  render(){
      const {classes, theme} = this.props;
        return(
          <React.Fragment>
            <HeaderLayout/>
            <div className={classes.paddingWrapper}>
              <h1>UploadMusicas</h1>
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