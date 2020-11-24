import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import Navbar from "react-bootstrap/Navbar";
//import Nav from "react-bootstrap/Nav";
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
import logo from '../photoes/logo.jpg';
import Image from "react-bootstrap/Image";
import Home from './Home.js';
import employee from '../photoes/employee.jpg';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';


class SignIn extends Component {
    render() {
        return (
           <div>
             &nbsp;
            <Card style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background:"#D9E3F0",
                    height:"400px"
                    }} border="primary">
                
                
                            
                            <Col style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center"}} >
                                <Form>
                                    
                                <h3 className="text-center"> Sign In</h3><br/>
                                        <Form.Group as={Row} controlId="validationFormikUsername">
                                            <Form.Label column sm={4}>
                                            Username  
                                            </Form.Label>
                                            <Col sm={8}>
                                            <Form.Control type="text" placeholder="Userame" />
                                            </Col>
                                        </Form.Group>
                                    <Form.Group as={Row} controlId="formHorizontalPassword">
                                                    <Form.Label column sm={4}>
                                                    Password 
                                                    </Form.Label>
                                                    <Col sm={8}>
                                                    <Form.Control type="password" placeholder="Password" />
                                                    </Col>
                                                </Form.Group>
                                                <Col  sm={{ span:8, offset:6}}>
                                                    <Link className="forgotpassword-link">
                                                    Forgot Psssword?
                                                </Link>
                                                </Col>
                                            
                                                <Form.Group as={Row} controlId="formHorizontalCheck">
                                                    <Col sm={{ span: 10, offset: 4 }}>
                                                    <Form.Check label="Remember me" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row}>
                                                
                                                    <Col sm={{ span:10, offset: 4 }}>
                                                    <Button type="submit">SignIn</Button>
                                                    </Col>
                                                    <br/>
                                                    <Col  sm={{ span:10, offset:4}}>
                                                    <text>NO Sign Up user</text>
                                                    &nbsp;
                                                    <Link to={"/SignUp"} className="signup-link">
                                                    SignUp?
                                                    </Link>
                                                    </Col>
                                                 </Form.Group>
                                        </Form>
                                    </Col>
                        </Card>
                    &nbsp;
                    </div>
                        
           
            
        );
    }
}

export default SignIn;           
                                    
                        