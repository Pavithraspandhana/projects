import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import TestYantra from "../../assets/img/experience/test.png";
import Tilt from "react-tilt";
import "./experience.styles.css";
 
const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={TestYantra} alt="test yantra logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Frontend developer as a Fresher</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Full Stack FrontEnd Developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS,Bootstrap, Javascript,Material UI ,Redux , FORMIK
                    <br />
                    <strong>Duration:</strong> march - 2021
                    <br/>
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Performed</strong> CRUD operations on testable localStorage to load/ remove data according 
                      to the business requirements.</li>
                      <li><strong>Performed</strong> Amazon clone exactly Like a amazon app with check out, adding to basket, sign in , sign out, removing from basket functionalities</li>
                      <li><strong>Performed</strong> Contact page application with CRUD functionalities using firebase</li>
                      <li><strong>Performed</strong> Weather application differnt countries weather report using third party libraries</li>
                      <li><strong>Finally Created</strong> My PORTFOLIO using react js with bootstrap 4 , css ,styled component and react-bootstrap </li>
                    </ul>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
