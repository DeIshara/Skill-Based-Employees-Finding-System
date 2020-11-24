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
import logo from '../photoes/logo.jpg';
import Image from "react-bootstrap/Image";
import Home from './Home.js';
import employee from '../photoes/employee.jpg';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
           <div>
            <br/>
            <Card style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background:"#E0EBD3",
                        height:"550px"
                        }} border="primary">
                
                
                            
                            <Col sm={9}>
                                <Form>
                                <h3 className="text-center"> Sign Up</h3><br/>
                                        <Form.Group as={Row} controlId="validationFormikUsername">
                                            <Form.Label column sm={4}>
                                            Username  
                                            </Form.Label>
                                            <Col sm={8}>
                                            <Form.Control type="text" placeholder="Userame" />
                                            </Col>
                                        </Form.Group>
                            
                                        <Form.Group as={Row} controlId="formHorizontalEmail">
                                            <Form.Label column sm={4}>
                                            Email 
                                            </Form.Label>
                                            <Col sm={8}>
                                            <Form.Control type="email" placeholder="Email" />
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
                                        <Form.Group as={Row} controlId="formHorizontalPassword">
                                            <Form.Label column sm={4}>
                                            Confirm Password 
                                            </Form.Label>
                                            <Col sm={8}>
                                            <Form.Control type="password" placeholder="Password" />
                                            </Col>
                                        </Form.Group>
                                        <fieldset>
                                            <Form.Group as={Row}>
                                            <Form.Label as="legend" column sm={4}>
                                                Select Your Account 
                                            </Form.Label>
                                            
                                            <Col sm={8} style={{alignItems:"left"}}>
                                                
                                                <Form.Check
                                                type="radio"
                                                label="Finder Account"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios1"
                                                />
                                                <Form.Check
                                                type="radio"
                                                label="Employee Account"
                                                name="formHorizontalRadios"
                                                id="formHorizontalRadios2"
                                                />
                                            
                                            </Col>
                                            </Form.Group>
                                        </fieldset>
                                        

                                        <Form.Group as={Row}>
                                            <Col sm={{ span: 8, offset: 4 }}>
                                            <Button type="submit">SignUp</Button>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group>
                                        <Col  sm={{ span:10, offset:4}}>
                                        <text>Already have a account</text>
                                        &nbsp;
                                        <Link to={"/SignIn"} className="signin-link">
                                        SignIn?
                                        </Link>
                                        </Col>
                                        </Form.Group>
                                </Form>
                            </Col>
                            
                </Card>
            <br/>

            </div>
        );
    }
}

export default SignUp;           
                                    
                                   
                        
                        
                   
                      
                
            