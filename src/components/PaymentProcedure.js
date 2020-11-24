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

class PaymentProcedure extends Component {
    render() {
        return (
            <div>
                
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
            </div>
        );
    }
}

export default PaymentProcedure;   
                        
                       
                    
                    
                   