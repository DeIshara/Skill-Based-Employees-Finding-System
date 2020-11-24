//import React from 'react';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
//import HolyGrailLayout from "./components/HolyGrailLayout";
import Footer from "./components/Footer";

import './App.css';
//import NavbarEmp from "./components/NavbarEmp";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


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

import logo from "./photoes/logo.jpg";
import Image from "react-bootstrap/Image";


import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NavbarSkills from "./components/NavbarSkills";
import LeftSlider from './components/LeftSlider';
import RightSlider from './components/RightSlider';
import Home from './components/Home';
import EmployeeCategories from "./components/EmployeeCategories";
import EmployeePost from './components/EmployeePost';
import FinderPost from './components/FinderPost';
import Support from './components/Support';
import AdminProfile from './components/AdminProfile';
import CategoryLists from './components/CategoryLists';
import ManageCriteria from './components/ManageCriteria';

// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import CreateEmployee from "./components/create-employee";
// import EditEmployee from "./components/edit-employee";
// import EmployeesList from "./components/employees-list"; 

//import logo from './logo.svg';
import ReactDOM from "react-dom";

import { render } from '@testing-library/react';


class App extends Component {

 render(){
  return(
    <div> 
    <Router>
       {/* <NavbarEmp/> */}
       <NavbarSkills/>
       {/* <HolyGrailLayout/> */}
       <Container  style={{flexGrow:4}}>  
            <Row>
            <Col sm={2} style={{background: '#6C7465'}}>
                <LeftSlider/>
            </Col>   
                {/* <Col sm={1}></Col> */}
                
                <Col sm={7} style={{background: '#6C7465',fontfamily: "Fira Sans"}} >
                    <div className="wrapper">
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path="/SignIn" component={SignIn} />
                            <Route path="/SignUp" component={SignUp} />
                            <Route path="/Home" component={Home} />
                            <Route path="/EmployeeCategories" component={EmployeeCategories} />
                            <Route path="/EmployeePost" component={EmployeePost} />
                            <Route path="/FinderPost" component={FinderPost} />
                            <Route path="/Support" component={Support} />
                            <Route path="/AdminProfile" component={AdminProfile} />
                            <Route path="/CategoryLists" component={CategoryLists} />
                            <Route path="/ManageCriteria" component={ManageCriteria} />
                            {/* <Route path="/edit-employee/:id" component={EditEmployee} />
                            <Route path="/employees-list" component={EmployeesList} /> */}
                        </Switch>
                    </div>


                </Col>     
           
            <Col sm={3} style={{background:'#6C7465'}} className="text-center">   
                <RightSlider/>
            </Col>   
            </Row>
                
        </Container>
       
       
       <Footer/>






    {/* <CreateEmployee/>
    <EditEmployee/>
    <EmployeesList/>
    <EmployeesTableRow/> */}
        {/* <Router>
            <Container> 
                <Row>
                <Col md={12}>
                    <div className="wrapper">
                    <Switch>
                        <Route exact path='/' component={CreateEmployee} />
                        <Route path="/create-employee" component={CreateEmployee} />
                        <Route path="/edit-employee/:id" component={EditEmployee} />
                        <Route path="/employees-list" component={EmployeesList} />
                    </Switch>
                    </div>
                </Col>
                </Row>
            </Container>
          </Router>
 */}
    </Router>
    </div>
  );
 }
}      
  
export default App;
