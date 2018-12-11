import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Footer from "../../components-landing/Footer/Footer.jsx";
import GridContainer from "../../components-landing/Grid/GridContainer.jsx";
import GridItem from "../../components-landing/Grid/GridItem.jsx";
import Button from "../../components-landing/CustomButtons/Button.jsx";
import Parallax from "../../components-landing/Parallax/Parallax.jsx";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import tileData from './tileData';

import axé from '../../assets/img/examples/axe.jpg';
import blues from '../../assets/img/examples/blues.jpg';
import country from '../../assets/img/examples/country.jpg';
import eletronica from '../../assets/img/examples/eletronica.jpg';
import forró from '../../assets/img/examples/forró.jpg';
import funk from '../../assets/img/examples/funk.jpg';
import gospel from '../../assets/img/examples/gospel.jpg';
import hiphop from '../../assets/img/examples/hip-hop.jpg';
import jazz from '../../assets/img/examples/jazz.jpg';
import MPB from '../../assets/img/examples/MPB.jpg';
import musica_classica from '../../assets/img/examples/musica_classica.jpg';
import pagode from '../../assets/img/examples/pagode.jpg';
import pop from '../../assets/img/examples/pop.jpg';
import rap from '../../assets/img/examples/rap.jpg';
import reggae from '../../assets/img/examples/reggae.jpg';
import rock from '../../assets/img/examples/rock.jpg';
import samba from '../../assets/img/examples/samba.jpg';
import sertanejo from '../../assets/img/examples/sertanejo.jpg';


import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

const styles = theme => ({
  titlegender: {
    textAlign: 'center'
  },

  subtitle: {
    color: '#0000!important'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

const tileData = [
     {
       img: axé,
       title: 'Axé',
     },
     {
      img: blues,
      title: 'Blues',
    },
    {
      img: country,
      title: 'Country',
    },
    {
      img: eletronica,
      title: 'Eletrônica',
    },
    {
      img: forró,
      title: 'Forró'
    },
    {
      img: funk,
      title: 'Funk'
    },
    {
      img: gospel,
      title: 'Gospel'
    },
    {
      img: hiphop,
      title: 'Hip Hop'
    },
    {
      img: jazz,
      title: 'Jazz'
    },
    {
      img: MPB,
      title: 'MPB'
    },
    {
      img: musica_classica,
      title: 'Música Clássica'
    },
    {
      img: pagode,
      title: 'Pagode'
    },
    {
      img: pop,
      title: 'Pop'
    },
    {
      img: rap,
      title: 'Rap'
    },
    {
      img: reggae,
      title: 'Reggae'
    },
    {
      img: rock,
      title: 'Rock'
    },
    {
      img: samba,
      title: 'Samba'
    },
    {
      img: sertanejo,
      title: 'Sertanejo'
    }
   ];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Parallax filter image={require("../../assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Decaídos de Plutão</h1>
                <h4>
                  Banda nascida da vontade de mudar a música com seu som
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />ver mais
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <TeamSection />
            <Grid xs={12} style={{
              'text-align': 'center',
              'padding-bottom': 80
            }}>
              <Typography variant="h4">
                O que você quer ouvir agora ?
              </Typography>
              <Typography variant="subtitle" style={{
                'color': "#999999"
              }}>
                Escolha entre os mais variados gêneros musicais dentro da plataforma!
              </Typography>
            </Grid>
            <div className={classes.root}>
                <GridList cols={3} spacing={12} spacellHeight={180} className={classes.gridList}>
                  {tileData.map(tile => (
                    <GridListTile key={tile.img}>
                      <img src={tile.img} alt={tile.title} />
                      <GridListTileBar
                        title={tile.title}
                        actionIcon={
                          <IconButton className={classes.icon}>
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </GridListTile>
                  ))}
                </GridList>
            </div>
            <WorkSection />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
