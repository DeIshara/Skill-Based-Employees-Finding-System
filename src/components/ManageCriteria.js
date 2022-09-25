import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FcBusinessman } from "react-icons/fc";
import LeftSlider from './LeftSlider';
import NavbarSkills from "./NavbarSkills";

class ManageCriteria extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserConPassword = this.onChangeUserConPassword.bind(this);
        this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            signUpError: '',
            signUpSuccess: '',
            signUpEmail: '',
            signUpPassword: '',
            signUpConPassword: '',
            signUpUsername: '',
            signUpAccType: 'admin',
        }
    }
      onChangeUserEmail(e) {
        this.setState({ signUpEmail: e.target.value , signUpError: '', signUpSuccess: ''})
      }
      onChangeUserPassword(e) {
        this.setState({ signUpPassword: e.target.value, signUpError: '', signUpSuccess: ''})
      }
      onChangeUserConPassword(e) {
        this.setState({ signUpConPassword: e.target.value, signUpError: '', signUpSuccess: ''})
      }
      onChangeUserUsername(e) {
        this.setState({ signUpUsername: e.target.value, signUpError: '', signUpSuccess: ''})
      }
      
      onSubmit(e) {
        e.preventDefault();
        const { 
          signUpEmail,
          signUpPassword,
          signUpConPassword,
          signUpUsername,
          signUpAccType,
       } = this.state;
      
       //post request to backends
       fetch('http://localhost:4000/signUp', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           username:signUpUsername,
           email:signUpEmail,
           password:signUpPassword,
           con_password:signUpConPassword,
           account_type:signUpAccType
         })
       }).then(res => res.json())
       .then(json => {
        if (json.success) {
          this.setState({
            signUpSuccess: json.message,
            signUpEmail: '',
            signUpPassword: '',
            con_password:'',
            signUpUsername: '',
            signUpConPassword: '',
          })
        } else {
          this.setState({
            signUpError:json.message,
          })
        }
       })
      }
    render() {
        const { 
            signUpError,
            signUpSuccess,
            signUpEmail,
            signUpPassword,
            signUpUsername,
            signUpConPassword,
         } = this.state;
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
                        <Nav className="justify-content-end">
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
                            <h5>Mange Home Screen</h5>
                            <text>Change Home Time duration</text><br/>
                            <text>Automaticaly Delete post</text><br/><br/>
                            <Button variant="outline-info" >Change</Button>
                         </Col>
                    </Card.Body>
                </Card>
                <br/>
                <Card style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background:"",
                        height:"550px"
                        }} border="primary">
                 
                    <Col sm={9}>
                        <Form onSubmit={this.onSubmit}>
                        <h3 className="text-center"> Create New Admin</h3><br/>
                        <div style={{color: '#f01616'}}> {(signUpError) ? (<p>{signUpError}</p>): null}</div><br/>
                        <div style={{color: '#12e049'}}> {(signUpSuccess) ? (<p>{signUpSuccess}</p>): null}</div><br/>
                        <Form.Group as={Row} controlId="validationFormikUsername">
                            <Form.Label column sm={4}>
                            Username
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" value={signUpUsername} 
                            onChange={this.onChangeUserUsername} placeholder="Userame" required/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalEmail">
                            <Form.Label column sm={4}>
                            Email
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="email" value={signUpEmail} 
                            onChange={this.onChangeUserEmail} placeholder="Email" required />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={4}>
                            Password
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="password" value={signUpPassword} 
                            onChange={this.onChangeUserPassword} placeholder="Password" required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="formHorizontalPassword">
                            <Form.Label column sm={4}>
                            Confirm Password
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="password"value={signUpConPassword}
                            onChange={this.onChangeUserConPassword} placeholder="Password" required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 8, offset: 4 }}>
                            <Button type="submit">Create</Button>
                            </Col>
                        </Form.Group>
                        </Form>
                        </Col>    
                    </Card>
                     <br/>
                    </Col>
                </Row>
            </div>
        );
    }
} 

export default ManageCriteria;