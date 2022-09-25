import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo2 from "../photoes/logo2.jpg";
import Image from "react-bootstrap/Image";
import {getFromStorage, setInStorage} from "../utils/storage.js";

class NavbarSkills extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
        this.state = {
            isVisible: true,
            obj : getFromStorage('the_main_app')
        }
    }
    logout() {
        const {
            obj
        } = this.state;
        if (obj && obj.token) {
            const {token} = obj;
            fetch('http://localhost:4000/logout?token=' + token).then((res => res.json()))
            .then(json => {
               if (json.success) {
                   setInStorage('the_main_app', {token: ''})
                   this.setState({
                    isVisible: false})
               } else {
                   this.setState({
                    isVisible: true,
                   })
               }
            })
        } 
    }

    render() {
        let {
            obj,
            isVisible
        } = this.state;
        if (!obj) {
            isVisible = false;
        } else if (!obj.token) {
            isVisible = false;
        }
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark"  variant="dark" aria-controls="responsive-navbar-navbar">
                    <Navbar.Brand href="/Home" aria-controls="responsive-navbar-brand">   
                    <Image src={logo2} height='70px' width='75px' roundedCircle />&nbsp;&nbsp; Skill-Based Employees Finding System
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                        {/* <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                        <Nav> */}
                         
                        <Nav.Link href="/Home" style={{alignItems:"right"}}><Image src={logo2} height='0px' width='180px' roundedCircle /></Nav.Link>
                        <Nav.Link href="/SignIn" style={{alignItems:"right", visibility: isVisible ? 'hidden': 'visible'}}>SignIn</Nav.Link>
                        <Nav.Link href="/SignUp" style={{alignItems:"right", visibility: isVisible ? 'hidden': 'visible'}}>SignUp</Nav.Link>
                        <Nav.Link  href="/Home" onClick={() => this.logout()} style={{alignItems:"right", visibility: isVisible ? 'visible': 'hidden'}}>LogOut</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarSkills;