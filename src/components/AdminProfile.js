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
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UpdateProfile from './UpdateProfile';
import { FcAdvertising} from "react-icons/fc";
import NotificationBadge from 'react-notification-badge';
import {Effect} from 'react-notification-badge';


class AdminProfile extends Component {
    render() {
        return (
            // NotificationBadge.propTypes = {
            //     count: React.PropTypes.number,
            //     label: React.PropTypes.string,
            //     containerStyle: React.PropTypes.object,
            //     style: React.PropTypes.object,
            //     className: React.PropTypes.string,
            //     effect: React.PropTypes.array,
            //     duration: React.PropTypes.number
            //   };
            <div>
                <br/>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand><h4>Admin Profile</h4></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Navbar.Text>
                        Manage Criteria: <a href="/ManageCriteria"><h5>Manage</h5></a>
                        </Navbar.Text>
                        &nbsp; &nbsp; &nbsp;
                      <FcAdvertising size = {40} />
                      {/* <NotificationBadge count={this.state.count} effect={Effect.SCALE}/>  */}
                    </Navbar.Collapse>
                </Navbar>
                
                    
                <Router>
                <div className="wrapper">
                <Switch>
                        <Route exact path='/' component={AdminProfile}/>
                        <Route path="/UpdateProfile" component={UpdateProfile} />
                <Card>
                    <Card.Body>
                   
                     
                    <Row>
                        <Col sm={3}><Image src={employee} roundedCircle  height="100px" width='auto'/></Col>
                        <Col sm={9}>
                            <h5>Name: <span>Ishara Madusanka Sandaruwan De Silva</span></h5>
                            <text>Address: <span>179//7, Mahara-Nugegoda, Kadawatha.</span></text><br/>
                            <text>Contact No:071-6960952 <span></span></text><br/><br/>
                            <Link to={"/UpdateProfile"}><Button variant="outline-info" >Update Profile</Button></Link>
                         </Col>
                       
                    </Row>
                    
                    </Card.Body>
                </Card>
                </Switch>
                </div>
                <br/>
                <Card>
                    <Card.Body>
                    <Row>
                        
                        <Col> 
                        <h5>Create Your Category</h5><br/>  
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
                            <Form.Control type="text"  placeholder="Address" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="validationFormikUsername">
                            <Form.Label column sm={4}>
                            Contact:  
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Contact No" />
                            </Col>
                        </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 4 }}>
                                <Link to={"/AdminProfile"}>   
                                <Button type="submit" variant="outline-info">Create</Button>
                                </Link>
                                </Col>
                            </Form.Group>
                            </Form>
                            <Form>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Category background Photo" />
                            </Form.Group>
                            <Link to={"/AdminProfile"}><Button type="submit" variant="outline-info">Add</Button></Link>
                        </Form>
                            
                        </Col>
                        <hr/>
                        <Col> 
                        <h5>Add Employee to category</h5><br/>
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
                            Contact:  
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Contact No" />
                            </Col>
                        </Form.Group>
                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 4 }}>
                                  
                                <Button type="submit" variant="outline-info">Add</Button>
                            
                                </Col>
                            </Form.Group>
                            </Form>
                            
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
                <br/>

                <Card>
                    <Card.Body>
                    
                      <Row>  
                        <Col>    
                           
                        <Form>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Add Employee Post" />
                            </Form.Group>
                            <Button type="submit" variant="outline-info">Add</Button>
                        </Form>
                        </Col>
                        <Col>
                        <Form>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1" label="Add Post to Home Screen " />
                            </Form.Group>
                            <Button type="submit" variant="outline-info">Add</Button>
                        </Form>
                            
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
                </Router>
            </div>
        );
    }
}

export default AdminProfile;    
                                
                                 
                        
                        
                        
                        
                           
                            
                       
                
                        
                            

                            
                        

                           