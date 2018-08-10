import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button} from 'reactstrap';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



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
  padding : 4em;
`;


const StyledCardTitle = styled(CardTitle)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 21px;
  padding-left: 50px;
  margin-right:40px;
  margin-top: 20px;
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


const animation = ["bounce","pulse","rubberBand","shake","headShake","swing","tada","wobble","jello","bounceIn","bounceInDown","bounceInLeft","bounceInRight","bounceInUp","bounceInUp","fadeIn","fadeInDown","flipInX","flipInY","zoomIn","zoomInDown","zoomInLeft","zoomInRight","zoomInUp"]
var rand1 = animation[Math.floor(Math.random() * animation.length)];
var rand2 = animation[Math.floor(Math.random() * animation.length)];

export class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }


  render () {
  return (
    <Animated animationIn={rand1} animationOut={rand2} isVisible={true}>
        <Container fluid={true}>
          <Card style={styles.card}>
            <StyledCardTop>
              <StyledH2>Contact</StyledH2>
            </StyledCardTop>
            <StyledCardTitle><span style={{ color:"gray" }}>Get in</span> <span>Touch</span></StyledCardTitle>
            <Row style={{ paddingRight:"20px" }}>
              <CardCol xs="12" sm="12" md="6" >
                           <ul style={{ paddingLeft:"0px"}}>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="mailto:hayreddintuzel@gmail.com?"><i className="far fa-envelope"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Email</ContactItemKey>
                  <ContactItemValue>hayreddintuzel@gmail.com</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="https://api.whatsapp.com/send?phone=905317908874" target="_blank" ><i className="fab fa-whatsapp"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Phone</ContactItemKey>
                  <ContactItemValue>+90 531 790 88 74</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA href="https://goo.gl/maps/ob23pSAaMTK2" target="_blank" ><i className="fas fa-map-marked"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Adress</ContactItemKey><ContactItemValue>Çanakkale / Turkey</ContactItemValue>
                </li>
                <li style={{ listStyleType: "none" }}>
                  <ContactItemIcon><StyledA onClick={this.toggle}><i className="far fa-handshake"></i></StyledA></ContactItemIcon>
                  <ContactItemKey>Status</ContactItemKey><ContactItemValue>Available for Hiring</ContactItemValue>
                </li>
              </ul>
              </CardCol>
              <CardCol xs="12" sm="12" md="6">
              <Form>
                <FormGroup>
                <Label for="name_">Name</Label>
                  <Input type="text" name="name" id="name_" placeholder="Your name.." />
                </FormGroup>
                <FormGroup>
                  <Label for="email_">Email</Label>
                  <Input type="email" name="email" id="email_" placeholder="Your email adress.." />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleFile">File</Label>
                  <Input type="file" name="file" id="exampleFile" />
                  <FormText color="muted">
                  If your file is over 2MB in size, you can send your file to hayreddintuzel@gmail.com.
                  </FormText>
                </FormGroup>
                <FormGroup>
                  <Label for="description_">Your Message</Label>
                  <Input type="textarea" name="description" id="description_" />
                </FormGroup>
              </Form>
              </CardCol>
            </Row>
          </Card>
        </Container>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
      <ModalHeader toggle={this.toggle}>Contact Form</ModalHeader>
      <ModalBody>
      <Form>
        <FormGroup>
          <Label for="name_">Name</Label>
          <Input type="text" name="name" id="name_" placeholder="Your name.." />
        </FormGroup>
        <FormGroup>
          <Label for="email_">Email</Label>
          <Input type="email" name="email" id="email_" placeholder="Your email adress.." />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
          If your file is over 2MB in size, you can send your file to hayreddintuzel@gmail.com.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="description_">Job Description</Label>
          <Input type="textarea" name="description" id="description_" />
        </FormGroup>
      </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={this.toggle}>Send</Button>{' '}
        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
      </Animated>
  )}
};

