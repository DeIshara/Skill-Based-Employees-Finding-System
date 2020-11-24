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


class LeftSlider extends Component {
    render() {
        return (
            <div>
                
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                            
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="flex-column">
                                <Nav.Link href="/Home">Home</Nav.Link>
                                <Nav.Link href="/EmployeeCategories">Employees Categories</Nav.Link>
                                <Nav.Link href="/EmployeePost">Employee Post</Nav.Link>
                                <Nav.Link href="/FinderPost">Finder Post</Nav.Link>
                                <Nav.Link href="/AdminProfile">Profile</Nav.Link>
                                <Nav.Link href="/Support">Support</Nav.Link>
                                
                                </Nav>
                                
                            </Navbar.Collapse>
                        </Navbar>
                        {/* <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">Active</Nav.Link>
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                            <Nav.Link eventKey="disabled" disabled>
                                Disabled
                            </Nav.Link>
                        </Nav> */}
                        
              
            </div>
        );
    }
}

export default LeftSlider;