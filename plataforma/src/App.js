import React, { Component } from 'react';
import Search from './components/Search';
import Response from './components/Response';
import Artists from './components/Artists';
import './styles/Style.css';
import Player from './components/Player';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
            <div className="wrapper">
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
                {/* <Player/> */}
              </Grid>
            </div>
    );
  }
}

export default App;
