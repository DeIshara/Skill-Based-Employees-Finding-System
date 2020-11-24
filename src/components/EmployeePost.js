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
import { FcBusinessman } from "react-icons/fc";

class EmployeePost extends Component {
    render() {
        return (
            <div>
                <br/>
                  <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Find Your Employee</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Form inline >
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Find</Button>
                        </Form>
                        <Nav className="mr-auto" className="justify-content-end">
                        <Nav.Link href="/AdminProfile"><FcBusinessman size={40}/></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                  </Navbar>
                
                {/* <Row style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                            }} >
                        <h3>Find Your Employee</h3>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Nav className="justify-content-end">
                                <Nav.Link href="#pricing">Profile</Nav.Link>
                        </Nav>
                    </Row>
                    &nbsp;
                    <Card body style={{height:"5rem",background:"gray"}}>
                    <Row style={{
                            display: "flex",
                            justifyContent:"center",
                            alignItems: "center"
                            }} >
                            &nbsp;
                        <Form inline >
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="info">Find</Button>
                        </Form>
                    </Row>  
                    </Card> */}
                    &nbsp;
                    <Card className="text-left" >
                        <Card.Header>Featured</Card.Header>
                        {/* <Card.Body style={{
                            display: "flex",
                            justifyContent:"center",
                            alignItems: "center"
                            }}> */}
                            <Image src={employee} rounded  height="400px" width='auto'/>
                        {/* </Card.Body > */}
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                    </Card>
                    &nbsp;
                    
            </div>
        );
    }
}

export default EmployeePost;
                                    
                                   
                                    
                                