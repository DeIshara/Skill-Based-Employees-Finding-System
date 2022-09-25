import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import help from '../photoes/help.jpg';
import LeftSlider from './LeftSlider';
import NavbarSkills from "./NavbarSkills";
import {getFromStorage} from "../utils/storage.js";
import SignIn from './SignIn';
import Nav from "react-bootstrap/Nav";
import { SocialIcon } from 'react-social-icons';

class Support extends Component {
    constructor(props) {
        super(props)
        this.state = {
          obj: getFromStorage('the_main_app'),
        };
    }
    render() {
        if (!this.state.obj) {
            return (<div>
              <SignIn/>
          </div>);
        }
        return (
            <div>
                <NavbarSkills/>
                <Row>
                    <Col sm={3} style={{background: '#f5f5f5'}}>
                            <LeftSlider/>
                    </Col> 
                    <Col  sm={9}>
                    <br/>   
                        <Card className="text-white">
                            <Card.Img src={help} alt="Card image" />
                            <Card.ImgOverlay>
                                <br/>
                                <Card.Title>SUPPORT</Card.Title>
                                <br/>
                                <Card.Text>
                                Skill-based employees like carpenters, pipe mechanics, painters, concrete art workers, short work 
                                mechanics, electronic devices repair, computer-phone repairs shops, path-time workers, mason 
                                bass, cleaners, etc. Those employees and any other job roles can update their current working 
                                situation and update post relevant to their jobs. Also, finders can find relevant job category, 
                                employee contact details and upload vacancy posts.
                                </Card.Text>
                                <br/>
                                <Card.Text>Contact us :- 0112456220</Card.Text>
                                <Card.Text>Email us :- skillbased@gmail.com</Card.Text>
                                <br/>
                                <Nav as="ul" className='ml-3'>
                                    <Nav.Item as="li">
                                        <Nav.Link><SocialIcon url="http://facebook.com/" /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link><SocialIcon url="http://linkedin.com/" /></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link><SocialIcon url="http://twitter.com/" /></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row> 
            </div>
        );
    }
}

export default Support;