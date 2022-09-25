import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/Nav";
import Card from 'react-bootstrap/Card';
import right from "../photoes/right.jpg";
import Image from "react-bootstrap/Image";
import { SocialIcon } from 'react-social-icons';



class RightSlider extends Component {
    render() {
        return (
            <div>   
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
                    <br/>
                    <h4 style={{fontFamily: "Serif"}}>Skill-Based Employees Finding System</h4>
                    <br/>
                    <Card>
                    <Image src={right} rounded  height="200px" width="auto"/>
                    </Card>
                    <br/>
                    <text style={{fontFamily: "Serif"}}>“Skill-based employees finding system” is a website platform which allows
                        employee finders to find local skill-based employees with their contact details and current working 
                        status like available or at working these days”. </text><br/>
                    <text style={{fontFamily: "Serif"}}>Conditions and Privacy and Policy Apply.</text><br/>
                    <text style={{fontFamily: "Serif"}}>0112456220</text>
               
            </div>
        );
    }
}

export default RightSlider;


