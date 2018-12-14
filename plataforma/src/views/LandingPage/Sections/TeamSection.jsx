import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// @material-ui/icons

// core components
import GridContainer from "../../../components-landing/Grid/GridContainer.jsx";
import GridItem from "../../../components-landing/Grid/GridItem.jsx";
import Button from "../../../components-landing/CustomButtons/Button.jsx";
import Card from "../../../components-landing/Card/Card.jsx";
import CardBody from "../../../components-landing/Card/CardBody.jsx";
import CardFooter from "../../../components-landing/Card/CardFooter.jsx";

import teamStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "../../../assets/img/faces/Guga.jpg";
import team2 from "../../../assets/img/faces/decaidos.jpeg";
import team3 from "../../../assets/img/faces/joaopedro.png";



class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Destaques da Semana</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Guga Pine
                  <br />
                  <small className={classes.smallTitle}>Levante a Cabeça</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  Guga Pine, o novo cantor de MPB que está começando a bombar nas redes sociais, lançou o seu primeiro álbum recentemente, chamado Levante a Cabeça
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Decaídos de Plutão
                  <br />
                  <small className={classes.smallTitle}>Olá Terráqueos</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    Com seu novo estilo de tocar rock in roll com blues, esses garotos vem ganhando a atenção de todos, eles vieram para dominar.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  João Pedro
                  <br />
                  <small className={classes.smallTitle}>Especialista</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                  Artista, multi-instrumentista, produtor musical e compositor de trilha sonora, João Pedro Pinheiro.
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
