import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from "styled-components";
//Animations
import {Animated} from "react-animated-css";
//images
import background from '../images/background.jpg';
import webDesign from '../images/services1.svg';
import coding from '../images/services2.svg';
import seo from '../images/services3.svg';
import marketing from '../images/services4.svg';
import turacoon from '../images/turacoon.svg';
import createtolearn from '../images/createtolearn.svg';
import wantYou from '../images/wantYou.svg';

//inline styles
const styles = {
  cardTop: {
    backgroundImage: `url(${background})`,
    backgroundSize : "cover",
    margin: "0px",
    borderTopRightRadius : "20px",
    borderTopLeftRadius : "20px",
    height: "300px"

  },
  card : {
    borderRadius : "20px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
  },

  z_index : {
    zIndex : "30"
  }
};


//Styled Components

const StyledCardTop = styled(Row)`
  background-image: url(${background});
  background-size : cover;
  margin: 0px;
  border-top-right-radius : 20px;
  border-top-left-radius : 20px;
  height: 100px;

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
`;

const CardCol = styled(Col)`
  margin-top: 25px;
  padding-left : 30px;
`;

const StyledH2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3em;
  margin : auto;
`;

const StyledCardTitle = styled(CardTitle)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 21px;
  padding-left: 50px;
  margin-right:40px;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  width: 120px;
  height: 120px;
  background-color: #fafafa;
  border-radius: 100px;
  margin: 0 auto;
  text-align: center;
  padding: 5px;
  padding-top: 15px;

`;

const ServiceCard = styled.div`
  margin-top : 1em;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 2px 4px;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.8;
  padding: 2em 1.5em;
  outline: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 6px;
  margin-bottom : 2em;
  height: 250px;
  &:hover {
    background-color: #fff;
    color: gray;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px, rgba(0, 0, 0, 0.4) 1px 3px 5px;
  }
`;

const ClientCard = styled.div`
  margin-top : 1em;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 2px 4px;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.8;
  outline: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 50%;
  margin-bottom : 2em;
  height: 125px;
  &:hover {
    background-color: #fff;
    color: gray;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px, rgba(0, 0, 0, 0.4) 1px 3px 5px;
  }
`;

const ClientImageContainer = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  text-align: center;
  padding-top: 10px;
`;

const StyledH4 = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  margin-top : 1em;
  text-align: center;
`;

const StyledH3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-top : 1em;
  text-align: center;
`;

const animation = ["bounce","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceInUp","fadeIn","fadeInDown","flipInX","flipInY","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp"]
var rand1 = animation[Math.floor(Math.random() * animation.length)];
var rand2 = animation[Math.floor(Math.random() * animation.length)];

export function Service () {

  return (
      <Animated animationIn={rand1} animationOut={rand2} isVisible={true}>
        <Container fluid={true}>
          <Card style={styles.card}>
            <StyledCardTop>
              <StyledH2>Services</StyledH2>
            </StyledCardTop>
            <StyledCardTitle><span style={{ color:"gray" }}>My</span> <span>Services</span></StyledCardTitle>
            <Row style={{ paddingRight:"20px" }}>
              <CardCol xs="12" sm="6" md="3" >
                <ServiceCard>
                  <ImageContainer>
                    <img src={ webDesign } alt="Web Design"/>
                  </ImageContainer>
                  <StyledH3>Web Design</StyledH3>
                </ServiceCard>
              </CardCol>
              <CardCol xs="12" sm="6" md="3" >
                <ServiceCard>
                  <ImageContainer>
                    <img src={ coding } alt="Coding"/>
                  </ImageContainer>
                  <StyledH3>Coding</StyledH3>
                </ServiceCard>
              </CardCol>
              <CardCol xs="12" sm="6" md="3" >
                <ServiceCard>
                  <ImageContainer>
                    <img src={ seo } alt="Seo"/>
                  </ImageContainer>
                  <StyledH3>Seo</StyledH3>
                </ServiceCard>
              </CardCol>
              <CardCol xs="12" sm="6" md="3" >
                <ServiceCard>
                  <ImageContainer>
                    <img src={ marketing } alt="Digital Marketing"/>
                  </ImageContainer>
                  <StyledH3>Digital Marketing</StyledH3>
                </ServiceCard>
              </CardCol>
            </Row>
            <StyledCardTitle><span style={{ color:"gray" }}>Who hired</span> me?</StyledCardTitle>
            <Row style={{ paddingRight:"8px" }}>
              <CardCol xs="6" sm="4" md="2" >
                <ClientCard>
                  <ClientImageContainer>
                    <img src={ turacoon } alt="Turacoon"/>
                  </ClientImageContainer>
                </ClientCard>
              </CardCol>
              <CardCol xs="6" sm="4" md="2" >
                <ClientCard>
                  <ClientImageContainer>
                    <img src={ createtolearn } alt="Createtolearn"/>
                  </ClientImageContainer>
                </ClientCard>
              </CardCol>
              <CardCol xs="6" sm="4" md="2" >
                <ClientCard>
                  <ClientImageContainer>
                    <img src={ wantYou } alt="Hire me"/>
                  </ClientImageContainer>
                </ClientCard>
              </CardCol>
              <CardCol xs="6" sm="4" md="2" >
                <ClientCard>
                  <ClientImageContainer>
                    <img src={ wantYou } alt="Hire me"/>
                  </ClientImageContainer>
                </ClientCard>
              </CardCol>
              <CardCol xs="6" sm="4" md="2" >
                <ClientCard>
                  <ClientImageContainer>
                    <img src={ wantYou } alt="Hire me"/>
                  </ClientImageContainer>
                </ClientCard>
              </CardCol>
              <CardCol xs="6" sm="4" md="2" >
                <ClientCard>
                  <ClientImageContainer>
                    <img src={ wantYou } alt="Hire me"/>
                  </ClientImageContainer>
                </ClientCard>
              </CardCol>
            </Row>
          </Card>
        </Container>
      </Animated>
  );
}
