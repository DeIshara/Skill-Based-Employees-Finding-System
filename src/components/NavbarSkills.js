import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
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
import pipe from '../photoes/pipe.jpg';
import carpenter from '../photoes/carpenter.jpg';
import logo from "../photoes/logo.jpg";
import Image from "react-bootstrap/Image";
import Home from './Home.js';
import employee from '../photoes/employee.jpg';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

class NavbarSkills extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark" aria-controls="responsive-navbar-navbar">
                    <Navbar.Brand href="/Home" aria-controls="responsive-navbar-brand">   
                    <Image src={logo} height='90px' width='auto' roundedCircle />&nbsp;&nbsp; Skill-Based Employees Finding System
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav> */}
                        
                    <Nav.Link href="/Home" style={{alignItems:"right"}}><Image src={logo} height='0px' width='480px' roundedCircle /></Nav.Link>
                        <Nav.Link href="/SignIn" style={{alignItems:"right"}}>SignIn</Nav.Link>
                        <Nav.Link href="/SignUp"style={{alignItems:"right"}}>SignUp</Nav.Link>
                        
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarSkills;