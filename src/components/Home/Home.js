import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/prasam.jpeg";
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
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Prasam Jain</strong>
              </h1>

              <p className="heading-description blockquote">
              I'm a quick learner and problem solver, and I believe 
              I can contribute to your team by bringing fresh perspectives, 
              new ideas, and a willingness to learn and grow. 
              I'm excited about the opportunity to work as a intern at your company & 
              I'm confident that I can make valuable contributions to your projects.
              </p>

              <div className="heading-name">
                {/* <TypeWriter /> */}
                <strong className="main-name"> Front End Developer</strong>
              </div>
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
