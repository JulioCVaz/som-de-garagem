import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../styles/Style.css';
import { Col } from 'reactstrap';
import { Container } from 'reactstrap';

export default class Response extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Col sm={4}>
                        <Card>
                            <CardImg top width="30%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Container>
            </div>
        )
    }
}