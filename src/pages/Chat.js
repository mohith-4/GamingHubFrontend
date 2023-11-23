import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import MessageForm from "../components/MessageForm";
import "./Chat.css" ;
import chatbg from "../assets/chatbg.jpg" ; 
function Chat() {
    return (
        <div  className="chat-container"
        style={{ backgroundImage: `url(${chatbg})` }}> 
        <Container className="cont" >
            <Row>
                
                <Col md={8}>
                    <MessageForm />
                </Col>
                <Col md={4}>
                    <Sidebar />
                </Col>
            </Row>
        </Container>
        </div>
    );
}

export default Chat;
