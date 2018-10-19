import React, { Component } from 'react';
import Search from './components/Search';
import Response from './components/Response';
import Artists from './components/Artists';
import  {Container, Col, Row} from 'reactstrap';
import './styles/Style.css';
import Player from './components/Player';

class App extends Component {
  render() {
    return (
      <div id="root" className="main">
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
    );
  }
}

export default App;
