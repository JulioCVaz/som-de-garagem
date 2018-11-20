import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Grid from '@material-ui/core/Grid';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import '../styles/Style.css';
import decaidosPerfil from '../img/decaidos.jpeg';


const styles = theme => ({
    root: {
      backgroundColor: theme.palette.background.paper,
      width: 500,
    },
    list: {
        width: 500,
      },
      fullList: {
        width: 'auto',
      },
  });

  function TabContainer({ children, dir }) {
    return (
      <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
  };

  

class Artists extends Component{

    state = {
        artista: [],
        cliqueperfil: 'profile-toggle',
        top: false,
        left: false,
        bottom: false,
        right: false,
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };
    
      handleChangeIndex = index => {
        this.setState({ value: index });
      };

    static getDerivedStateFromProps(props, state){
        let  nexState = {};
        if(props.artistas !== state.artista){
            nexState = {
                artista:props.artistas
            }
        }
        return nexState
    }

    toggleDrawer = (side, open) => () => {
        if(this.state.right != true){
            this.setState({
                [side]: open,
              });
        }
    };
    
    toggleExit = (side, open) => () => {
        this.setState({
            [side]: open,
        });
        console.log(this.state.right);
      };

    sideList = data => (
        <div style={{
            'width': '1000px'
        }}>
            
            {/* <Grid 
            container
            spacing={10}
            justify="center"
            alignItems="center"
            >
                <Grid item xs={8}>
                <List component="nav">
                <Avatar
                    alt="Foto perfil"
                    src={
                        (data.nomeartista == "Decaídos de Plutão") ? 
                        decaidosPerfil: ''}
                    style={{
                        width: 150,
                        height: 150,
                        marginLeft: '25%'
                    }}
                />
                <ListItem>
                    <Typography variant="title">{data.nomeartista}</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant="subheading">{data.descartista}</Typography>
                </ListItem>
                </List>
                <Divider />
                <List component="nav">
                <ListItem>
                    <Typography variant="subheading">Album:</Typography>
                    <ListItemText primary={data.tituloalbum} />
                </ListItem>
                <ListItem>
                    <Typography variant="subheading">{data.descalbum}</Typography>
                </ListItem>
                </List>
                </Grid>
            </Grid> */}
        </div>
    );
    render(){
        const { classes, theme } = this.props;
        return(
            <div className="fix-index">
            {this.state.artista.map((artista) =>
                <div>
                    <Button style={{
                        color:'white',
                        fontWeight:'bold'
                        }} 
                        className={this.state.cliqueperfil}
                        onClick={this.toggleDrawer('right', true)}>
                        <Grid>
                            <AccountCircle />
                            <Typography
                            style={{
                                fontWeight:'bold'
                            }}
                            variant="button"
                            gutterBottom={true}
                            color="inherit">
                                Perfil
                            </Typography>
                        </Grid>
                    </Button>
                    <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                        <div
                            tabIndex={0}
                            role="button"
                            onClick={this.toggleDrawer('right', false)}
                            onKeyDown={this.toggleDrawer('right', false)}
                        >
                            {
                            <div className={classes.root}>
                                <AppBar position="static" color="default">
                                <Tabs
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    indicatorColor="primary"
                                    textColor="primary"
                                    fullWidth
                                >
                                    <Tab label="Item One" />
                                    <Tab label="Item Two" />
                                    <Tab label="Item Three" />
                                    <Tab onClick={this.toggleExit('right', false)} label="X"/>
                                </Tabs>
                                </AppBar>
                                <SwipeableViews
                                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                                index={this.state.value}
                                onChangeIndex={this.handleChangeIndex}
                                >
                                <TabContainer dir={theme.direction}>Item One</TabContainer>
                                <TabContainer dir={theme.direction}>Item Two</TabContainer>
                                <TabContainer dir={theme.direction}>Item Three</TabContainer>
                                <TabContainer dir={theme.direction}>Item Three</TabContainer>
                                <TabContainer dir={theme.direction}>Item Four</TabContainer>
                                </SwipeableViews>
                            </div>
                            }
                        </div>
                    </Drawer>
                </div>
                )}
                
                    {/* // <div className="perfil-artists">
                    //     <p>{artista.nomeartista}</p>
                    //     <p>{artista.desartista}</p>
                    //     <p>{artista.tituloalbum}</p>
                    // </div> */}
            </div>
            );
        };
    }

Artists.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

const MapStateToProps = state => ({
    artistas: state.artists
});

export default connect(MapStateToProps)(withStyles(styles, { withTheme: true })(Artists));