import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Progress } from 'reactstrap';

import styled from "styled-components";
//Animations
import {Animated} from "react-animated-css";
import ScrollAnimation from 'react-animate-on-scroll';
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
    zIndex : "30",
    paddingLeft: "2.5px"
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


const TimeLineContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0.5em 0;

  &:before {
  content: '';
  position: absolute;
  top: 0;
  left: 18px;
  height: 100%;
  width: 4px;
  background: #d7e4ed;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
  }
`;

const TimeLine = styled.section`
  overflow: hidden;
  margin: 5em auto;
`;

const IconContainer = styled.div`
  border-radius: 55%;
  width: 50px;
  height: 50px;
  background-color : #d7e4ed;
  position:relative;
  left: 45px;
  padding: 6px 0px 0px 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;

`;

const SmalHr = styled.hr`
  width:27px;
  height: 2px;
  display: inline-block;
  background : #d7e4ed;
  position:relative;
  left: 18px;
  bottom : 43px
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px 0px;
`;

const ExpContainer = styled.div`
  margin-left: 45px;
  position: relative;
  bottom: 20px;
`;

const CardCol = styled(Col)`
  margin-top: 25px;
  padding-left : 20px;
  padding-right: 100px;
`;

const StyledCardTitle = styled(CardTitle)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 21px;
  padding-left: 50px;
  margin-right:40px;
`;

const StyledProgress = styled(Progress)`
  margin-left: 50px;
  margin-right:40px;
  margin-bottom: 10px;
`;

const StyledH3 = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 16px;
  padding-left: 50px;
  margin-right:40px;
  margin-bottom: 10px;
`;

const StyledH4 = styled.h4`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 12px;
  padding-left: 50px;
  margin-right:40px;
`;



const animation = ["bounce","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceInUp","fadeIn","fadeInDown","flipInX","flipInY","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp"]
var rand1 = animation[Math.floor(Math.random() * animation.length)];
var rand2 = animation[Math.floor(Math.random() * animation.length)];

export function Resume () {
    return (
      <Animated animationIn={rand1} animationOut={rand2} isVisible={true}>
        <Container fluid={true}>
          <Card style={styles.card}>
            <StyledCardTop>
              <StyledH2>Resume</StyledH2>
            </StyledCardTop>
            <TimeLine>
            <ScrollAnimation animateIn="fadeIn">
                <TimeLineContainer data-aos="zoom-in-right">
                  <div>
                    <IconContainer>
                      <i className="fas fa-graduation-cap fa-2x" style={ styles.z_index }></i>
                    </IconContainer>
                    <SmalHr/>
                    <ExpContainer>
                      <h5>Naval Academy (2009 - 2013)</h5>
                      <small>I studied Computer Engineering here. I finished the my department with a 3.50 credit average and first degree. I also gain leadership skills by
                            commanding a student group of 300 people. These years I deal with sailing.</small>
                    </ExpContainer>
                  </div>
                </TimeLineContainer>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <TimeLineContainer data-aos="zoom-in-right">
                  <div>
                    <IconContainer>
                      <i className="fas fa-graduation-cap fa-2x" style={ styles.z_index }></i>
                    </IconContainer>
                    <SmalHr/>
                    <ExpContainer>
                      <h5>TOEFL IBT Preparing Course (2015)</h5>
                      <small>was selected by the Navy for the TOEFL IBT preparation course to be post-graduated in the US in 2014. In this process I participated in the TOEFL IBT preparation course. At the end of the course I was accepted by the University of Southern California, receiving enough points from the TOEFL IBT and GRE exams. This process was interrupted after the coup attempt in Turkey..</small>
                    </ExpContainer>
                  </div>
                </TimeLineContainer>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <TimeLineContainer data-aos="zoom-in-right">
                  <div>
                    <IconContainer>
                      <i className="fas fa-briefcase fa-2x" style={ styles.z_index }></i>
                    </IconContainer>
                    <SmalHr/>
                    <ExpContainer>
                      <h5>Navy Officer (2013 - 2017)</h5>
                      <small>I worked as an officer in the Navy from 2013 to 2017. In this process, I was rewarded many times by my supervisors. During this period, I contacted many foreigners and got the opportunity to develop my foreign language and. At this time, I also got the privilege of recognizing many different cultures.</small>
                    </ExpContainer>
                  </div>
                </TimeLineContainer>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <TimeLineContainer data-aos="zoom-in-right">
                  <div>
                    <IconContainer>
                      <i className="fas fa-briefcase fa-2x" style={ styles.z_index }></i>
                    </IconContainer>
                    <SmalHr/>
                    <ExpContainer>
                      <h5>Interpretership (2017)</h5>
                      <small>I have been an interpreter for the articles on the website “onurtestsurusunde.com”. I have translated the articles given by my employer from English to Turkish. I worked for about 6 months in this business.</small>
                    </ExpContainer>
                  </div>
                </TimeLineContainer>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeIn">
                <TimeLineContainer data-aos="zoom-in-right">
                  <div>
                    <IconContainer>
                      <i className="fas fa-briefcase fa-2x" style={ styles.z_index }></i>
                    </IconContainer>
                    <SmalHr/>
                    <ExpContainer>
                      <h5>Freelance Web Developer (2017 - Now)</h5>
                      <small>I have been working as a web developer since the beginning of 2017. I am practicing my studies together with my freelancer team. I use Laravel Framework and Wordpress as a technology. I lead my team in the back-end and front-end.</small>
                    </ExpContainer>
                  </div>
                </TimeLineContainer>
              </ScrollAnimation>
            </TimeLine>
            <ScrollAnimation animateIn="fadeIn">
              <StyledCardTitle><span style={{ color:"gray" }}>Coding</span> <span>Skills</span></StyledCardTitle>
              <Row style={{ marginBottom:"20px" }}>
                <CardCol xs="12" sm="12" md="6">
                  <StyledH3>Coding Languages/<span style={{ color:"gray" }}>Frameworks</span></StyledH3>
                  <StyledH4>PHP</StyledH4>
                  <StyledProgress color="secondary" value="99" />
                  <StyledH4 style={{ color:"gray" }}>Laravel 5</StyledH4>
                  <StyledProgress color="secondary" value="99" />
                  <StyledH4>Javascript</StyledH4>
                  <StyledProgress color="secondary" value="98" />
                  <StyledH4 style={{ color:"gray" }}>JQuery</StyledH4>
                  <StyledProgress color="secondary" value="98" />
                  <StyledH4 style={{ color:"gray" }}>React.js</StyledH4>
                  <StyledProgress color="secondary" value="93" />
                  <StyledH4>HTML/CSS</StyledH4>
                  <StyledProgress color="secondary" value="99" />
                </CardCol>
                <CardCol xs="12" sm="12" md="6" >
                  <StyledH3>Tools</StyledH3>
                  <StyledH4>Git with GitHub/GitLab</StyledH4>
                  <StyledProgress color="secondary" value="100" />
                  <StyledH4>Npm</StyledH4>
                  <StyledProgress color="secondary" value="100" />
                  <StyledH4>Illustrator</StyledH4>
                  <StyledProgress color="secondary" value="95" />
                  <StyledH4>Analytics/Adwords</StyledH4>
                  <StyledProgress color="secondary" value="90" />
                  <StyledH4>Webpack/Gulp.js</StyledH4>
                  <StyledProgress color="secondary" value="80" />
                  <StyledH4>Testing</StyledH4>
                  <StyledProgress color="secondary" value="80" />
                </CardCol>
              </Row>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
            <Row>
                <CardCol>
                  <StyledH3>Other Skills</StyledH3>
                  <div class="field is-grouped is-grouped-multiline" style={{ paddingLeft:"55px", marginBottom:"55px" }}>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Bootstrap 4</span>
                        <span class="tag is-light">Css</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Opentok.js</span>
                        <span class="tag is-light">Video Streaming</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Moment.js</span>
                        <span class="tag is-light">Javascript</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Font Awesome</span>
                        <span class="tag is-light">Icons</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Balsamiq 3</span>
                        <span class="tag is-light">Wireframe</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">animate.css</span>
                        <span class="tag is-light">Css</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Linux Terminal</span>
                        <span class="tag is-light">OS</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Material UI</span>
                        <span class="tag is-light">React.js</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">ReactStrap</span>
                        <span class="tag is-light">React.js</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Semanthic UI</span>
                        <span class="tag is-light">React.js</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Laravel Forge</span>
                        <span class="tag is-light">Hosting</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Bulma.io</span>
                        <span class="tag is-light">Css</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">AOS</span>
                        <span class="tag is-light">Scroll Animations</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">popper.js</span>
                        <span class="tag is-light">Javascript</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">chart.js</span>
                        <span class="tag is-light">Charts</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Node.js</span>
                        <span class="tag is-light">Javascript</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Photoshop</span>
                        <span class="tag is-light">Design</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Owl Carousel</span>
                        <span class="tag is-light">Sliders</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Styled Components</span>
                        <span class="tag is-light">React.js</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">CSS Modules</span>
                        <span class="tag is-light">Css</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">English</span>
                        <span class="tag is-light">Language</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">jQuery UI</span>
                        <span class="tag is-light">jQuery</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">SEO</span>
                        <span class="tag is-light">HTML</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Iyzico PHP</span>
                        <span class="tag is-light">E-payment</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Localization</span>
                        <span class="tag is-light">Translate</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Wordpress</span>
                        <span class="tag is-light">PHP</span>
                      </div>
                    </div>
                    <div class="control">
                      <div class="tags has-addons">
                        <span class="tag is-dark">Composer</span>
                        <span class="tag is-light">PHP</span>
                      </div>
                    </div>
                  </div>
                </CardCol>
              </Row>
            </ScrollAnimation>
          </Card>
      </Container>
    </Animated>
    );
}

