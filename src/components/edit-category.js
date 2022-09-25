import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FcBusinessman } from "react-icons/fc";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSlider from './LeftSlider';
import NavbarSkills from "./NavbarSkills";
import { Card } from "react-bootstrap";;

class EditCategory extends Component {
    constructor(props) {
        super(props)
    
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeCategoryDesc = this.onChangeCategoryDesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // State
        this.state = {
          categoryname: '',
          categorydescription: '',
        }
    }
    onChangeCategoryName(e) {
        this.setState({ categoryname: e.target.value })
    }
    
    onChangeCategoryDesc(e) {
    this.setState({ categorydescription: e.target.value })
    }

    componentDidMount() {
        axios.get('http://localhost:4000/categories/edit-category/' + this.props.match.params.id)
          .then(res => {
            this.setState({
                categoryname: res.data.categoryname,
                categorydescription: res.data.categorydescription,
            });
          })
          .catch((error) => {
            console.log(error);
          })
    }
    onSubmit(e) {
        e.preventDefault()
    
        const categoryObject = {
            categoryname: this.state.categoryname,
            categorydescription: this.state.categorydescription,
        };
    
        axios.put('http://localhost:4000/categories/update-category/' + this.props.match.params.id, categoryObject)
        .then((res) => {
            console.log('Category successfully Updated');
            this.setState({ categoryname: '' , categorydescription: ''});
            this.props.history.push('/CategoryList');
            window.location.reload(false);
        }).catch((error) => {
            console.log(error);
            this.props.history.push('/CategoryList');
        })
    }
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
                                <NavDropdown.Item href="/EmployeePosts">Employee Posts</NavDropdown.Item>
                                <NavDropdown.Item href="/FinderPosts">Finder Posts</NavDropdown.Item>
                                <NavDropdown.Item href="/HomeScreenPosts">Home Screen Posts</NavDropdown.Item>
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
                            <h5>Update Employee Category</h5>
                                {/* <span style={{color: '#f01616'}}> {(this.state.cateNameError) ? this.state.cateNameError : null}</span>
                                <span style={{color: '#12e049'}}> {(this.state.cateNameSuccess) ? this.state.cateNameSuccess : null}</span> */}
                                <br/>
                                <Form onSubmit={this.onSubmit}>
                                <Form.Group as={Row} controlId="validationFormikUsername">
                                    <Form.Label column sm={4}>
                                    Category Name:  
                                    </Form.Label>
                                    <Col sm={8}>
                                    <Form.Control type="text" placeholder="category name" 
                                    value={this.state.categoryname} onChange={this.onChangeCategoryName} required />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="validationFormikUsername">
                                    <Form.Label column sm={4}>
                                    Description:  
                                    </Form.Label>
                                    <Col sm={8}>
                                    <Form.Control type="text" as="textarea" placeholder="category description"
                                    value={this.state.categorydescription} onChange={this.onChangeCategoryDesc} required/>
                                    </Col>
                                </Form.Group>
                               
                                    <Form.Group as={Row}>
                                        <Col sm={{ span: 10, offset: 4 }}>   
                                        <Button type="submit" variant="outline-info">Update</Button>
                                        </Col>
                                    </Form.Group>
                                    </Form>
                                <Form>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1" label="Category background Photo" />
                                    </Form.Group>
                                    <Button  variant="outline-info">Update</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                        <br/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default EditCategory;