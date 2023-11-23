
import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Button } from 'react-bootstrap';
import logo from "../assets/logo.jpg"
import image2d from "../assets/image2d.jpg"
import groupimg from "../assets/groupimage.jpg" ;
import './Mainhome.css';
import {Link } from 'react-router-dom' ;
import assasins from "../assets/assasins.png"
import resident from "../assets/resident.jpg"
function Mainhome() {
  return (
    <div className="mainhome-container">
      <Row>
        <Col>
          <h1 className="moving-text">Welcome to Gaming Hub</h1>
          <img src={image2d} style={{ height: 600 }} alt="Signup" className="image" />
          <img src={logo} style={{ height: 100, borderRadius: 50, position: 'absolute', top: 300 }} className=' logo moving-text' alt="Logo" />
          <h1 className='moving-text  txt2'>Dare To Loose </h1>
        </Col>
      </Row>
      <Row className="content-section m-4">
        <Col md={4}>
          <Card style={{ background: 'linear-gradient(135deg, #0a0a0b, rgb(64, 20, 20))' }}>
            <Card.Img variant="top" src={groupimg} />
            <Card.Body style={{color : 'white'}}>
              <Card.Title>Featured Game</Card.Title>
              <Card.Text >
                Explore the latest and most exciting game in our gaming community.
              </Card.Text>
             <Link to={"/Explore"}><Button  variant="primary">Learn More</Button> </Link> 
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ background: 'linear-gradient(135deg, #0a0a0b, rgb(64, 20, 20))' }}>
            <Card.Img variant="top" src={assasins} />
            <Card.Body style={{color : 'white'}}>
              <Card.Title>Game Reviews</Card.Title>
              <Card.Text>
                Read reviews from our community members and share your own gaming experiences.
              </Card.Text>
              <Link to = {"/rating"}><Button variant="primary">Read Reviews</Button></Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ background: 'linear-gradient(135deg, #0a0a0b, rgb(64, 20, 20))' }}>
            <Card.Img variant="top" src={resident} />
            <Card.Body style={{color : 'white'}}>
              <Card.Title>Join Community</Card.Title>
              <Card.Text>
                Participate in gaming community and showcase your skills.
              </Card.Text>
              <Link to={"/chat"}><Button variant="primary">Join Now</Button>   </Link> 
            </Card.Body>
          </Card>
        </Col>
      </Row>
   

      <footer className="footer mb-0">
        <div className="contact-details">
          <p>Email: example@email.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
}

export default Mainhome;
