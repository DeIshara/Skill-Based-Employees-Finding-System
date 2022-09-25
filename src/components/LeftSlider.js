import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {getFromStorage} from "../utils/storage.js";
import { FcHome } from "react-icons/fc";
import { FcList } from "react-icons/fc";
import { FcCollaboration } from "react-icons/fc";
import { FcCameraIdentification } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";

class LeftSlider extends Component {
    constructor(props) {
        super(props)
        // State
        this.state = {
            accountType: '',
            obj: getFromStorage('the_main_app'),
        }
    }

    componentDidMount() {
        if (this.state.obj) {
            if (this.state.obj.account_type === 'finder') {
                this.setState({accountType: '/FinderProfile'});
            } else if (this.state.obj.account_type === 'employer') {
                this.setState({accountType: '/EmployeeProfile'});
            } else if (this.state.obj.account_type === 'admin') {
                this.setState({accountType: '/AdminProfile'});
            }
        }
    }
    render() {
        return (
            <div> 
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >     
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="flex-column">
                        <Nav.Link href="/Home"><FcHome size={20}/>&nbsp;Home</Nav.Link>
                        <Nav.Link href="/EmployeeCategories"><FcList size={20}/>&nbsp;Employees Categories</Nav.Link>
                        <Nav.Link href="/EmployeePost"><FcCollaboration size={20}/>&nbsp;Employee Post</Nav.Link>
                        <Nav.Link href="/FinderPost"><FcCameraIdentification size={20}/>&nbsp;Finder Post</Nav.Link>
                        <Nav.Link href={this.state.accountType}><FcBusinessman size={20}/>&nbsp;Profile</Nav.Link>
                        <Nav.Link href="/Support"><FcOnlineSupport size={20}/>&nbsp;Support</Nav.Link> 
                        </Nav>  
                    </Navbar.Collapse>
                </Navbar>
                {/* <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav> */}
            </div>
        );
    }
}

export default LeftSlider;