import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import login_pic from "../assets/login_pic.jpg";
import "./Home.css";

function Home() {
    return (
        <Row>
            <Col md={6} className="d-flex flex-direction-column align-items-center justify-content-center">
                <div>
                    <h2>Gamers Unite: Where Passion Meets Pixels!!!</h2>
                    <p>Gaming community lets you connect with the world</p>
                    <LinkContainer to="/chat">
                        <Button variant="danger">
                            Get Started <i className="fas fa-gamepad home-message-icon"></i>
                        </Button>
                    </LinkContainer>
                </div>
            </Col>
            <Col md={6} className="home__bg" > <img src={login_pic} style={{height:480}} /></Col>
        </Row>
    );
}

export default Home;
