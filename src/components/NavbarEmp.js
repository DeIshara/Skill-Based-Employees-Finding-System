import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
//import "./src/App.css";


 //import EditEmployee from "./components/edit-employee";
 //import EmployeesList from "./components/employees-list";
//import CreateEmployee from "./components/create-employee";

export default class NavbarEmp extends Component {
    render() {
        return (
        
            
            <div className="App">
            
               <header className="App-header">
               
                <Navbar bg="dark" variant="dark">
                        
                <Container>
                    
                    <Navbar.Brand>
                    <Link to={"/create-employee"} className="nav-link">
                        React MERN Stack App
                    </Link>
                    </Navbar.Brand>

                    <Nav className="justify-content-end">
                    <Nav>
                        <Link to={"/create-employee"} className="nav-link">
                        Create Employee
                        </Link>
                    </Nav>

                    {/* <Nav>
                        <Link to={"/edit-student/:id"} className="nav-link">
                        Edit Student
                        </Link>
                    </Nav> */}

                    <Nav>
                        <Link to={"/employees-list"} className="nav-link">
                        Employees List
                        </Link>
                    </Nav>
                    </Nav>
                
                </Container>
                
                </Navbar>
              
            </header>
            
        </div>
        
        );
    }
}

//export default NavbarEmp;

{/* <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> Hello Skill-Based Employees Finding System.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a> */}