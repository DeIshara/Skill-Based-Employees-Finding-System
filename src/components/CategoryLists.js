import React, { Component } from 'react';
//import { Container, Row } from 'react-bootstrap';
//import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
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
import { FcBusinessman } from "react-icons/fc";


class CategoryLists extends Component {
    render() {
        return (
            <div>
             
                 <Col style={{background: 'silver'}}>
                                <br/>
                                <Navbar bg="dark" variant="dark">
                                        <Navbar.Brand href="#home">Find Your Employee</Navbar.Brand>
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                                        <Nav className="mr-auto" className="justify-content-end">
                                        <Nav.Link href="/AdminProfile"><FcBusinessman size={40}/></Nav.Link>
                                        </Nav>
                                        </Navbar.Collapse>
                                </Navbar>
                                <Navbar bg="dark" variant="dark">
                                        
                                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                                        <Nav className="mr-auto" className="justify-content-end">
                                        <Nav.Link href=""><DropdownButton id="dropdown-item-button"  variant="info" title="Select your District">
                                        {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
                                        <Dropdown.Item as="button">Gampaha</Dropdown.Item>
                                        <Dropdown.Item as="button">Colombo</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>
                                        <Dropdown.Item as="button">Kalutara</Dropdown.Item>

                                    </DropdownButton>
                                    </Nav.Link>
                                        </Nav>
                                        <Form inline >
                                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                        <Button variant="outline-info">Find</Button>
                                        </Form>
                                        
                                        </Navbar.Collapse>
                                </Navbar>
                                &nbsp;
                                
                                    
                                &nbsp;
                                
                                <Card className="text-left">
                                <Card.Img src={carpenter}  height ="270rem" />
                                <Card.ImgOverlay>
                                   <Card.Body className="text-white">
                                         <Card.Text>
                                                Name: Ishara<br/>
                                                Contact:0716960952<br/>
                                                Email:slfjsljfos<br/>
                                                Deccription:I am a 
                                                </Card.Text>
                                                <Card.Header variant="success">Featured</Card.Header>
                                                <Button variant="info">chat</Button>
                                        
                                    </Card.Body>
                                    </Card.ImgOverlay> 
                                </Card>     
                                   &nbsp;
                                
                                   <Card className="text-left">
                                <Card.Img src={carpenter}  height ="270rem" />
                                <Card.ImgOverlay>
                                   <Card.Body className="text-white">
                                         <Card.Text controlId="name">
                                                Name: Ishara<br/>
                                                Contact:0716960952<br/>
                                                Email:slfjsljfos<br/>
                                                Deccription:I am a 
                                                </Card.Text>
                                                <Card.Header variant="success">Featured</Card.Header>
                                                <Button variant="info">chat</Button>
                                        
                                    </Card.Body>
                                    </Card.ImgOverlay> 
                                </Card>    
                                       
                                &nbsp;
                                <Card className="text-left">
                                <Card.Img src={carpenter}  height ="270rem" />
                                <Card.ImgOverlay>
                                   <Card.Body className="text-white">
                                         <Card.Text>
                                                Name: Ishara<br/>
                                                Contact:0716960952<br/>
                                                Email:slfjsljfos<br/>
                                                Deccription:I am a 
                                                </Card.Text>
                                                <Card.Header variant="success">Featured</Card.Header>
                                                <Button variant="info">chat</Button>
                                        
                                    </Card.Body>
                                    </Card.ImgOverlay> 
                                </Card>     
                                {/* <Card style={{height:'180px',background:'gray'}}>
                                     <Card.Body>
                                        
                                        <Card.Text>
                                        Name: Ishara<br/>
                                        Contact:0716960952<br/>
                                        Email:slfjsljfos<br/>
                                        </Card.Text>
                                        
                                        <Card.Header>Featured</Card.Header>
                                        <Button variant="info">chat</Button>
                                    </Card.Body>
                                </Card>
                                
                     */}
                        &nbsp;    
                 </Col>
                
            </div>
        );
    }
}

export default CategoryLists;