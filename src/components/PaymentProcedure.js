import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FcBusinessman } from "react-icons/fc";
import NavbarSkills from "./NavbarSkills";
import LeftSlider from './LeftSlider';

class PaymentProcedure extends Component {
    render() {
        return (
            <div>
                <NavbarSkills/>
                 <Row>
                    <Col sm={3} style={{background: '#f5f5f5'}}>
                            <LeftSlider/>
                    </Col> 
                    <Col  sm={9}>
                    <br/>
                        <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="/AdminProfile">Manage Criteria</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                                <Nav className="mr-auto justify-content-end">
                                <Nav.Link href="/AdminProfile"><FcBusinessman size={40}/></Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                        </Navbar>
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="/EmployeeList">Employee List</Nav.Link>
                            <Nav.Link href="/CategoryList">Category List</Nav.Link>
                            <NavDropdown title="Manage Users" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/FinderList">Finder List</NavDropdown.Item>
                                <NavDropdown.Item href="/EmployeePostList">Employee Posts</NavDropdown.Item>
                                <NavDropdown.Item href="/FinderPostList">Finder Posts</NavDropdown.Item>
                                <NavDropdown.Item href="/HomeScreenPostList">Home Screen Posts</NavDropdown.Item>
                                <NavDropdown.Item href="/EmployeeApproveList">Employee Approve List</NavDropdown.Item>
                                <NavDropdown.Item href="/FinderApproveList">Finder Approve List</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/ManageAdmins">Manage Admins</NavDropdown.Item>
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
                        <Card>
                            <Card.Body>
                        
                            <Col>
                                <h5>Control Payment Methods</h5>
                                    <text>Change How payment going in platform</text><br/>
                                    <text>Going throw with visa/master card options</text><br/><br/>
                                    <Button variant="outline-info" >Change</Button>
                                </Col>
                            
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default PaymentProcedure;   
                        
                       
                    
                    
                   