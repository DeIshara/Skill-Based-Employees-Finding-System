import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import HolyGrailLayout from "./components/HolyGrailLayout";
//import NavbarEmp from "./components/NavbarEmp";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import logo from "../photoes/logo.jpg";
import Image from "react-bootstrap/Image";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { SocialIcon } from 'react-social-icons';



class RightSlider extends Component {
    render() {
        return (
            <div>
                
                            
                    <Nav as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/home"><SocialIcon url="http://facebook.com/" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1"><SocialIcon url="http://linkedin.com/" /></Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2"><SocialIcon url="http://twitter.com/" /></Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <br/>
                    <h4>Skill-Based Employees Finding System</h4>
                    <br/>
                    <Card border="primary">
                    <Image src={logo} rounded  height="200px" width="auto"/>
                    </Card>
                    <br/>
                    <text>Job websites serve as the modern equivalent of classified ads by compiling and listing available telecommute and local openings. </text>
                    <br/><text>Privacy and policy.</text><br/>
                    <text>2324442422</text>
               
            </div>
        );
    }
}

export default RightSlider;


