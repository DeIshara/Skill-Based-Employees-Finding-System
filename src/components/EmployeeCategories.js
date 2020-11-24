import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FcBusinessman } from "react-icons/fc";

import pipe from '../photoes/pipe.jpg';
import carpenter from '../photoes/carpenter.jpg';
import { Link } from 'react-router-dom';

class EmployeeCategories extends Component {
    render() {
        return (
            <div>
                 <br/>
                  <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Find Your Employee Category</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        
                        <Nav className="mr-auto" className="justify-content-end">
                        <Nav.Link href="/AdminProfile"><FcBusinessman size={40}/></Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                  </Navbar>
               
                       <br/> 
                        
                        <Col>         
                        <Row style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                    }} className="text-center">
                                
                                <Link to={"/CategoryLists"} className="categorylist-link">
                                <Card className="text-white" style={{width:'16rem'}}>
                                    <Card.Img src={pipe}  height ="130px" />
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a.
                                        </Card.Text>
                                        <Card.Text>Last </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                </Link>
                                &nbsp; &nbsp;
                                <Link to={"/CategoryLists"} className="categorylist-link">
                                <Card className="text-white"style={{width:'16rem'}}>
                                    <Card.Img src={carpenter}  height ="130px" />
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a.
                                        </Card.Text>
                                        <Card.Text>Last </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                </Link>
                                <br/><br/>
                                <Link to={"/CategoryLists"} className="categorylist-link">
                                <Card className="text-white" style={{width:'16rem'}}>
                                    <Card.Img src={pipe}  height ="130px" />
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a.
                                        </Card.Text>
                                        <Card.Text>Last </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                </Link>
                                &nbsp; &nbsp;
                                <Link to={"/CategoryLists"} className="categorylist-link">
                                <Card className="text-white"style={{width:'16rem'}}>
                                    <Card.Img src={carpenter}  height ="130px" />
                                    <Card.ImgOverlay>
                                        <Card.Title>Card title</Card.Title>
                                        <Card.Text>
                                        This is a.
                                        </Card.Text>
                                        <Card.Text>Last </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                                </Link>
                                
                         </Row>      
                    </Col>     
                               
             
             </div>
        );
    }
}

export default EmployeeCategories;               
                    
                
                
            
                                                
                                                  
                               