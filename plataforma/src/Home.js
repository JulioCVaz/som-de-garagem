import React, { Component } from 'react';
import Search from './components/Search';
import Response from './components/Response';
import Artists from './components/Artists';
import './styles/Style.css';
import Player from './components/Player';
import { fade } from '@material-ui/core/styles/colorManipulator';
import logo from './img/logo-home.png';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import ListIcon from '@material-ui/icons/List';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExitToApp from '@material-ui/icons/ExitToApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import CommentIcon from '@material-ui/icons/Comment';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonIcon from '@material-ui/icons/Person';
import PlaylistPlay from '@material-ui/icons/PlaylistPlay';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Avatar from '@material-ui/core/Avatar';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import LandingPage from './views/LandingPage/LandingPage';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {logout} from './services/auth';
import * as Actions from './actions/listen';
import { bindActionCreators } from 'redux';
import nofoto from './img/nofoto.png';


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

class Home extends Component{

    constructor(props){
      super(props);
    };

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

      exitApp = () => {
        logout();
        setTimeout(()=>{
          this.props.history.push("/");
        }, 100);
      }

      reset = () => {
        return this.props.resetApp();
      }

      resetHome = () => {
        this.reset();
      }

      goToUpload = () => {
        this.props.history.push(`${window.location.pathname}/upload`);
      }

      goToList = () => {
        this.props.history.push(`${window.location.pathname}/lista-musicas`);
      }

      componentWillMount(){

        let data = localStorage.getItem('user');
        let new_data = JSON.parse(data);
        var name = new_data.name;
        // arrumar isso aqui amanhã
         
        var arrayNomes = name.split(" ");
        let nname = `Olá ${arrayNomes[0]} ${arrayNomes[1]}`;
        this.setState({profile:nname});
      }

      componentWillReceiveProps(nextProps){
        if(nextProps.musicas !== this.state.musicas){
              this.setState({musicas:nextProps.musicas});
        }
        if(nextProps.profile !== this.state.profile){
              this.setState({profile:nextProps.profile});
        }
      }

    render(){
      console.log(this.props);
        const { classes, theme } = this.props;
        const { anchorEl, mobileMoreAnchorEl } = this.state;
        const background = grey[800];
        const isMenuOpen = Boolean(anchorEl);
        return(
        <React.Fragment>
            <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <div className={classes.searchWrapper}>
                <Typography variant="h6" color="inherit" noWrap>
                <img src={logo} className={classes.logo}/>
                </Typography>
                <Search/>
                <div className={classes.grow} />
                <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit">
                    <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                    </Badge>
                </IconButton>
                <IconButton
                    aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleProfileMenuOpen}
                    color="inherit"
                >
                    <ExitToApp onClick={this.exitApp}/>
                </IconButton>
                </div>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />
              }
            </IconButton>
          </div>
          <Divider />
          <List>
              <ListItem button className={classes.profilewrapper}>
                <ListItemIcon className={classes.profilemargin}><Avatar
                    alt="Adelle Charles"
                    src={nofoto}
                    className={classNames(classes.avatar, classes.bigAvatar)}
                  /></ListItemIcon>
                <ListItemText primary={this.state.profile}/>
              </ListItem>
              <ListItem button>
                <ListItemIcon onClick={this.resetHome}><HomeRoundedIcon/></ListItemIcon>
                <ListItemText primary={'Início'}/>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <LibraryMusicIcon onClick={this.goToUpload}/>
                </ListItemIcon>
                <ListItemText primary={'Upload de Músicas'}/>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <ListIcon onClick={this.goToList}/>
                </ListItemIcon>
                <ListItemText primary={'Lista de Músicas'}/>
              </ListItem>
              <Divider />
              <ListItem button>
                <ListItemIcon><PlaylistPlay/></ListItemIcon>
                <ListItemText primary={'Minha Playlist'}/>
              </ListItem>
              {/* TODO: fazer a logica do tipo de perfil */}
              <ListItem button>
                <ListItemIcon><CommentIcon/></ListItemIcon>
                <ListItemText primary={'Mensagens'}/>
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button>
                <ListItemIcon><SettingsIcon/></ListItemIcon>
                <ListItemText primary={'Configurações'} />
              </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />

            {
              (this.state.musicas.length > 0) ?
                <Grid container spacing={8} justify="center" alignItems="center">
                  <br/>
                  <Grid item xs={10}>
                    <Response/>
                  </Grid>
                  <Grid item>
                    <Artists/>
                  </Grid>
                  <Player/>
                </Grid>
              :
                <LandingPage/>
              }
             
        </main>
      </div>
      </React.Fragment>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
  profile: state.profile,
  musicas: state.listen,
  artistas: state.artists,
  album: state.albums
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(Home));