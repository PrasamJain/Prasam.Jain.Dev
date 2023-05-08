import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import education from "../../Assets/education.jpg";
import Achievments from "../../Assets/Achievments.jpg";

function Education() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row style={{ justifyContent: "center" }}>
                        <Col
                            md={6}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "00px",
                            }}
                        >
                            <h1>  <strong>Education ...</strong></h1>
                            <br />
                            <h3> B.Tech Computer Science & Engineering    
                            <br /></h3>
                            <h5>Jaypee University of Engineering & Technology : 2020-2024</h5>
                            <h5>CGPA : 8.9</h5>
                            <br />
                            <h3> 12th CBSE   <br /></h3>
                            <h5>Sri Satya Sai Vidya Vihar GAIL :<br /> 2018-2020</h5>
                            <br />
                            <h3> 10th CBSE   <br /></h3>
                            <h5> Kendriya Vidyalaya GAIL GUNA : <br /> 2018</h5>
                        </Col>
                        <Col md={5} style={{ paddingBottom: "2px", paddingTop: "30px" }} className="about-img">
                            <img src={education} alt="about" className="image-style" />
                        </Col>
                    </Row>
                    <Row style={{ justifyContent: "center" }}>
                        <Col md={5} style={{ paddingBottom: "2px", paddingTop: "30px" }} className="about-img">
                            <img src={Achievments} alt="about" className="image-style" />
                        </Col>
                        <Col
                            md={6}
                            style={{
                                justifyContent: "center",
                                paddingTop: "30px",
                                paddingBottom: "00px",
                            }}
                        >
                            <h1><strong>Achievments...</strong></h1>
                            <br />
                            <h3> GoogleCloudReady Facilitator <br /></h3>
                            <h5>GCP - Work form home</h5>
                            <p>
                                Successfully completing 1 Milestone of the Google Cloud Ready FacilitatorProgram 2k22,
                                Where I got to learn about cloud computing and earn skillsbadges as well as amazing Google Goodies & stickers.
                            </p>
                            <br />
                            <h3>Rajya Puraskar Award BS&G <br /></h3>
                            <p>
                                This is my biggest achievement in my life that I successfully cracked the
                                RAJYAPURASKAR award at regional level (Bhopal division 2016) and selected
                                for the RASTRAPATI AWARD 2017 at national level in the field of Bharat Scout
                                & Guide (BSG).
                            </p>
                            <br />
                        </Col>
                    </Row>

                </Container>
            </Container>
        </section>
    );
}

export default Education;