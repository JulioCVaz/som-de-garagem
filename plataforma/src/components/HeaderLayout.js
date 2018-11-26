import React, { Component } from 'react';
import '../styles/Style.css';
import { fade } from '@material-ui/core/styles/colorManipulator';
import logo from '../img/logo-home.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    // backgroundColor: 'rgb(32,32,32)'
    backgroundColor: '#000'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },

  searchWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center'
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '600px',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '500px',
    [theme.breakpoints.up('md')]: {
      width: 500,
    },
  },
  appBar: {
    backgroundColor: '#252525',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    minHeight: '100vh'
  },
  logo: {
      width: '150px'
  },
  bigAvatar: {
    width: 40,
    height: 40,
  },
  profilewrapper: {
    paddingLeft: 18
  },
  profilemargin: {
    marginRight: 5
  }
});


class HeaderLayout extends Component{

    state = {
        profile: [],
        musicas: [],
        open: false,
        anchorEl: null,
        mobileMoreAnchorEl: null,
      };

      handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
      };
    
      handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
      };
    
      handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
      };
    
      handleDrawerOpen = () => {
        this.setState({ open: true });
      };
    
      handleDrawerClose = () => {
        this.setState({ open: false });
      };
    render(){
        const { classes, theme } = this.props;
        return(
            <React.Fragment>
                <AppBar
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: this.state.open,
                    })}
                    >
                    <Toolbar disableGutters={!this.state.open}>
                        <div className={classes.searchWrapper}>
                            <Typography variant="h6" color="inherit" noWrap>
                            <img src={logo} className={classes.logo}/>
                            </Typography>
                        </div>
                    </Toolbar>
                    </AppBar>
            </React.Fragment>
        );
    }
}

HeaderLayout.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(HeaderLayout);