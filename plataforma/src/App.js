import React, { Component } from 'react';
import Search from './components/Search';
import Response from './components/Response';
import Artists from './components/Artists';
import  {Container, Col, Row} from 'reactstrap';
import './styles/Style.css';
import Player from './components/Player';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <div className="wrapper">
            <Container fluid>
              <Row>
                <Col sm="8">
                  <Search/>
                  <br/>
                  <Response/>
                </Col>
                <Col sm="4">
                  <Artists/>
                </Col>
              </Row>
              <Row>
                <Player/>
              </Row>
              </Container>
            </div>
        </div>
      </Provider>
    );
  }
}

export default App;
