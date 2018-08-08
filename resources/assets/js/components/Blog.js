import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from "styled-components";
//Animations
import {Animated} from "react-animated-css";
//images
import background from '../images/background.jpg';

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

const StyledH2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3em;
  margin : auto;
`;

const CardCol = styled(Col)`
  margin-top: 5px;
  padding : 2em;
`;


const animation = ["bounce","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceInUp","fadeIn","fadeInDown","flipInX","flipInY","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp"]
var rand1 = animation[Math.floor(Math.random() * animation.length)];
var rand2 = animation[Math.floor(Math.random() * animation.length)];

export function Blog() {
  return (
    <Animated animationIn={rand1} animationOut={rand2} isVisible={true}>
        <Container fluid={true}>
          <Card style={styles.card}>
            <StyledCardTop>
              <StyledH2>Blog</StyledH2>
            </StyledCardTop>
            <Row style={{ paddingRight:"20px" }}>
              <CardCol xs="12" sm="12" md="6">
              <time datetime="2014-09-20" class="icon">
                <em>Saturday</em>
                <strong>September</strong>
                <span style={{ paddingTop:"15px" }}>20</span>
              </time>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody style={{ textAlign:"center" }}>
                  <CardTitle>React</CardTitle>
                  <CardSubtitle>How can I use Styled Components on my React App.</CardSubtitle>
                </CardBody>
              </Card>
              </CardCol>
              <CardCol xs="12" sm="12" md="6">
              <time datetime="2014-09-20" class="icon">
                <em>Saturday</em>
                <strong>September</strong>
                <span style={{ paddingTop:"15px" }}>20</span>
              </time>
              <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody style={{ textAlign:"center" }}>
                  <CardTitle>React</CardTitle>
                  <CardSubtitle>How can I use Styled Components on my React App.</CardSubtitle>
                </CardBody>
              </Card>
              </CardCol>
            </Row>
          </Card>
        </Container>
      </Animated>
  );
}

