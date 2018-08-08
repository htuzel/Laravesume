import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import styled from "styled-components";
//Animations
import {Animated} from "react-animated-css";
//Images
import profilePic from '../images/profile.jpg';
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
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
    marginBottom: "40px",
  },

  cardImage : {
    height: "180px"
  }


};

//Styled Components

const StyledCardTop = styled(Row)`
  background-image: url(${background});
  background-size : cover;
  margin: 0px;
  border-top-right-radius : 20px;
  border-top-left-radius : 20px;
  height: 300px;

  @media only screen and (max-width: 768px) {
    height: 400px;
  }
`;

const StyledName = styled.h1`
  margin-top : 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 3em;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin-top : 10px;
    font-size: 2em;
  }
`;

const SocialIconsDiv = styled.div`
  margin-top:20px;
`;

const StyledA = styled.a`
  display: inline-block;
  width: 36px;
  height: 36px;
  background-color: rgb(255, 255, 255);
  color: rgb(158, 158, 158);
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  border-radius: 24px;
  margin: 0px 4px;
  padding-top: 7px;

  &:hover {
    color: pink;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 4px 9px 1px;
  }
`;

const StyledJob = styled.h2`
  margin-top : 10px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1em;
  text-align: center;
`;

const StyledSocialIconsCol = styled(Col)`
  padding-left : 37.5%;


  @media only screen and (max-width: 768px) {
    padding-left : 30%;
  }

    @media only screen and (max-width: 493px) and (max-width: 767px) {
    padding-left : 20%;
  }

    @media only screen and (max-width: 992px) and (min-width: 769px) {
    padding-left : 29%;
  }
`;


const StyledCardImage = styled(CardImg)`

  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px, rgba(0, 0, 0, 0.4) 1px 3px 5px;
  -webkit-transition: top 0.3s, box-shadow 0.3s; /* For Safari 3.1 to 6.0 */
  transition: top 0.3s, box-shadow 0.3s;
  background-position:center;
  background-size:cover;
  height: 80%;
  width: 120px;
  border-radius: 50%;

  @media only screen and (max-width: 768px) {
  width: 60%;
  height: 180px;
  position : relative;
  left: 20%;
  top: 30px;
  

  }

  @media only screen and (min-width: 768px) and (max-width: 981px) {
    position : relative;
    top : 70px;
    left: 30px;
    width: 100%;
    height: 150px;

      &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 4px 25px 40px, rgba(0, 0, 0, 0.5) 5px 17px 19px;
    top: 35px;
    }
  }

    @media only screen and (min-width: 982px) {
    position : relative;
    top : 50px;
    left: 80px;
    width: 100%;
    height: 230px;

      &:hover {
    box-shadow: rgba(0, 0, 0, 0.4) 4px 25px 40px, rgba(0, 0, 0, 0.5) 5px 17px 19px;
    top: 35px;
    }
  }
`;

const StyledCardTitle = styled(CardTitle)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 21px;
`;

const StyledCardText = styled(CardTitle)`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height : 24px;
`;

const DownnloadButton = styled(Button)`
  margin-top : 25px;
  background-color: rgb(255, 255, 255);
  color: rgb(33, 33, 33);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 1px, rgba(0, 0, 0, 0.3) 0px 2px 4px;
  text-transform: uppercase;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  line-height: 2.8;
  padding: 0px 1.5em;
  outline: none;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 3px;

  &:hover {
    background-color: #fff;
    color: pink;
    box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 2px, rgba(0, 0, 0, 0.4) 1px 3px 5px;
  }
`;

const ContactItemKey = styled.span`
  font-family: 'Roboto', Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.6em;
  display: inline-block;
  min-width: 75px;
  text-align: left;
  margin-bottom : 16px;
`;

const ContactItemValue = styled.span`
  display: inline-block;
  color: #9e9e9e;
  text-align: left;
  font-family: 'Roboto', Helvetica, sans-serif;
  font-size: 15px;
  line-height: 1.6em;
  min-width: 190px;
`;

const ContactItemIcon = styled.span`
  font-size: 15px;
  line-height: 1.6em;
  margin-right:10px;
  color: gray;
  border-radius: 24px;

  &:hover {
    color: pink;
  }
`;

const CardCol = styled(Col)`

  margin-top: 25px;
  padding-left : 30px;
`;


const animation = ["bounce","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceInUp","fadeIn","fadeInDown","flipInX","flipInY","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp"]
var rand1 = animation[Math.floor(Math.random() * animation.length)];
var rand2 = animation[Math.floor(Math.random() * animation.length)];

export function Home() {
  return (
  <Animated animationIn={rand1} animationOut={rand2} isVisible={true}>
    <Container fluid={true}>
      <Card style={styles.card}>
        <StyledCardTop>
          <Col xs="12" sm="12" md="3">
            <StyledCardImage top src={profilePic} alt="Card image cap"/>
          </Col>
          <Col xs="12" sm="12" md="9">
            <StyledName>Hayreddin Tüzel</StyledName>
            <StyledJob>Full-Stack Web Developer</StyledJob>
            <SocialIconsDiv>
              <Row>
                <StyledSocialIconsCol>
                <StyledA href="https://github.com/hayreddintuzel"><i class="fab fa-github"></i></StyledA>
                <StyledA href="https://twitter.com/devneeddev"><i className="fab fa-twitter"></i></StyledA>
                <StyledA href="https://www.instagram.com/devneeddev/"><i className="fab fa-instagram"></i></StyledA>
                <StyledA href="https://www.linkedin.com/in/hayreddin-tüzel-58a759125"><i className="fab fa-linkedin"></i></StyledA>
                </StyledSocialIconsCol>
              </Row>
            </SocialIconsDiv>
          </Col>
        </StyledCardTop>
        <CardBody style={{ marginTop:"60px" }}>
          <Row>
            <CardCol xs="12" sm="12" md="6">
              <StyledCardTitle><span style={{ color:"gray" }}>Hayreddin</span> <span>Tüzel</span></StyledCardTitle>
              <StyledCardText><p>Since beginning of 2017 I have developed myself on web programming. In this process, I have been involved in the construction of many websites. But if I need to count my main projects;</p>
                <ul style={{ paddingLeft:"10px"}}>
                  <li> <i class="fas fa-bookmark"></i> A website developed for a national conference organized by the Navy,</li>
                  <li> <i class="fas fa-bookmark"></i> A comprehensive website for Renee Hobbs, a highly respected professor in his field, </li>
                  <li> <i class="fas fa-bookmark"></i> Lastly, I have been worked as a team leader in the development of a very comprehensive and high-budget LMS system with video streaming. </li>
                </ul>
                  Now, I am  planing to develop web products for global marketing aimed to CMS users. Also, I always open to challenges to improve myself.
              </StyledCardText>
              <DownnloadButton>Download Resume</DownnloadButton>
            </CardCol>
            <CardCol xs="12" sm="12" md="6" >  
              <ul style={{ paddingLeft:"0px", paddingTop:"30px" }}>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="#"><i className="far fa-envelope"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Email</ContactItemKey>
                  <ContactItemValue>hayreddintuzel@gmail.com</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="#"><i className="fab fa-whatsapp"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Phone</ContactItemKey>
                  <ContactItemValue>+90 531 790 88 74</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="#"><i className="fas fa-map-marked"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Adress</ContactItemKey><ContactItemValue>Çanakkale / Turkey</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="#"><i className="far fa-handshake"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Status</ContactItemKey><ContactItemValue>Available for Hiring</ContactItemValue>
                </li>
              </ul>
            </CardCol>
          </Row>
        </CardBody>
      </Card>
    </Container>
  </Animated>
  );
}

export default Home;