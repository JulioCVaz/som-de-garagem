import React, { Component } from 'react';
import Search from './components/Search';
import Response from './components/Response';
import Artists from './components/Artists';
import './styles/Style.css';
import Player from './components/Player';
import Navbar from './components/Navbar';
import Grid from '@material-ui/core/Grid';
import grey from '@material-ui/core/colors/grey';



class App extends Component {
  render() {

    const background = grey[800];

    return (
        <React.Fragment>
          <Navbar/>
          <div className="wrapper" style={{background: background}}>
              <Grid container spacing={8}
                    justify="center"
                    alignItems="center">
                <Grid item xs={10}>
                  <Search/>
                </Grid>
                <br/>
                <Grid item xs={10}>
                  <Response/>
                </Grid>
                <Grid item>
                  <Artists/>
                </Grid>
                <Player/>
              </Grid>
            </div>
        </React.Fragment>
    );
  }
}

export default App;
