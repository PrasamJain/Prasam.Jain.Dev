import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import education from "../../Assets/education.jpg";

function Education() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Container className="home-content">
                    <Row>
                        <Col md={6} className="home-header">
                            <h3> <strong>B.Tech Computer Science & Engineering  </strong> <br /></h3>
                            <h4>Jaypee University of Engineering & Technology : 2020-2024</h4>
                            <h5>CGPA : 8.9</h5>

                        </Col>
                            
                    </Row>

                    <Row>
                        <Col md={6} className="home-header">
                            <h3> <strong>12th CBSE </strong> <br /></h3>
                            <h4>Sri Satya Sai Vidya Vihar GAIL :<br /> 2018-2020</h4>
                            {/* <h5>CGPA : 8.9</h5> */}
                        </Col>
                    </Row>

                    <Row>
                        <Col md={6} className="home-header">
                            <h3> <strong>10th CBSE </strong> <br /></h3>
                            <h4> Kendriya Vidyalaya GAIL GUNA : <br /> 2018</h4>
                            {/* <h5>CGPA : 8.9</h5> */}
                        </Col>
                    </Row>
                </Container>
            </Container>
        </section>
    );
}

export default Education;