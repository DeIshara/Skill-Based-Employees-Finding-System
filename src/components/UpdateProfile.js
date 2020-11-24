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
import axios from 'axios';

class UpdateProfile extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Card.Body>
                    <Row>
                        <Col sm={5}>
                        <Col>    
                            <Image src={employee} roundedCircle  height="100px" width='auto'/>
                        <Form>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Choose Your Photo" />
                            </Form.Group>
                            <Link to={"/AdminProfile"}><Button type="submit" variant="outline-info">Add</Button></Link>
                        </Form>
                        </Col>
                        </Col>
                        <Col sm={7}>
                        <Form>
                        <Form.Group as={Row} controlId="validationFormikUsername">
                            <Form.Label column sm={4}>
                            Name:  
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Userame" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="validationFormikUsername">
                            <Form.Label column sm={4}>
                            Address:  
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Address" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="validationFormikUsername">
                            <Form.Label column sm={4}>
                            Contact No:  
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Contact No" />
                            </Col>
                        </Form.Group>
                            
                            

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                <Link to={"/AdminProfile"}>   
                                <Button type="submit" variant="outline-info">Update</Button>
                                </Link>
                                </Col>
                            </Form.Group>
                            </Form>
                            
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
                            
                       

export default UpdateProfile;