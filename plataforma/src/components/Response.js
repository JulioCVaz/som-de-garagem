import React ,{ Component }from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import '../styles/Style.css';
import { Col } from 'reactstrap';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';


class Response extends Component{
    
    state = {
        musicas: []
    };

    static getDerivedStateFromProps(props, state){
        let  nexState = {};
        if(props.musicas !== state.musicas){
            nexState = {
                musicas:props.musicas
            }
        }
        return nexState
    }

    render(){
        console.log(this.state);

        return(
        <Container>
            {
                this.state.musicas.map((musica)=>
                    <Col sm={4}>
                        <Card>
                            <CardImg top width="30%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>{musica.musicas}</CardTitle>   
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                

                
                )
            }
        </Container>

        );
    }
};


const mapStateToProps = state => ({
    musicas: state.listen
});

export default connect(mapStateToProps)(Response);