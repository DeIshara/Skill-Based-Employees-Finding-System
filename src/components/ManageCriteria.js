import React, { Component } from 'react';
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
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FcBusinessman } from "react-icons/fc";
import { Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PaymentProcedure from '../components/PaymentProcedure';
import EmployeeList from '../components/ManageUsers/Employeelist';

class ManageCriteria extends Component {
    render() {
        return (
            <div>
                <br/>
                <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Manage Criteria</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="mr-auto" className="justify-content-end">
                        <Nav.Link href="/AdminProfile"><FcBusinessman size={40}/></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                </Navbar>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="/EmployeeList">Employee List</Nav.Link>
                    <Nav.Link href="#pricing">Finder List</Nav.Link>
                    <NavDropdown title="Manage Users" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Category List</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Employee Posts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Finder Posts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.1">Home Screen Posts</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Employee Approve Lists</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Finder Approve Lists</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Manage Admins</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/ManageCriteria">Home Screen</Nav.Link>
                    <Nav.Link href="/PaymentProcedure">
                        Payment Procedure
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
               </Navbar>
               <br/>
               <Router> 
                <div className="wrapper">
                <Switch>
                        <Route exact path='/' component={ManageCriteria}/>
                        <Route path="/PaymentProcedure" component={PaymentProcedure}/>
                        <Route path="/EmployeeList" component={EmployeeList}/>
                </Switch>
                </div>
                   
                <Card>
                    <Card.Body>
                   
                     
                    
                        
                        <Col>
                            <h5>Mange Home Screen</h5>
                            <text>Change Home Time duration</text><br/>
                            <text>Automaticaly Delete post</text><br/><br/>
                            <Button variant="outline-info" >Change</Button>
                         </Col>
                       
                    
                    
                    </Card.Body>
                </Card>
                
               
                <br/>
            <Card style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background:"",
                        height:"550px"
                        }} border="primary">
                
                
                            
                            <Col sm={9}>
                                <Form>
                                <h3 className="text-center"> Create New Admin</h3><br/>
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
                                       
                                        

                                        <Form.Group as={Row}>
                                            <Col sm={{ span: 8, offset: 4 }}>
                                            <Button type="submit">Create</Button>
                                            </Col>
                                        </Form.Group>
                                       
                                </Form>
                            </Col>
                            
                </Card>
            <br/>
            </Router>
            </div>
        );
    }
} 

export default ManageCriteria;