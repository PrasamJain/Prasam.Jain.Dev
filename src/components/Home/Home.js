import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/prasam.jpg";
import SocialMedia from "../SocialMedia";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Prasam Jain</strong>
                <h4>( Front End Developer )</h4>
              </h1>
                <br/>
              <p className="heading-description blockquote">
              "I am a quick learner and problem solver, and I believe that 
              I can contribute to your team by bringing fresh perspectives, 
              new ideas, and a willingness to learn and grow. 
              I am excited about the opportunity to work as an intern at your company and 
              I am confident that I can make valuable contributions to your projects."
              </p>

            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>Get in Touch</h1>
              <p>
                {" "}
                Whether you want to get in touch, or talk about a project
                collaboration.
                <br />
                <strong>Feel free to connect with me</strong>
                <br/>
                <br/>
                <strong>Contact : +91 6265973186 , +91 8103082794</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
