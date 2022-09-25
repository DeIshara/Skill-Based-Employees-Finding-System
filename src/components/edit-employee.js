import React, { Component } from "react";
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
import { Card } from "react-bootstrap";

export default class EditEmployee extends Component {

  constructor(props) {
    super(props)

    this.onChangeSelectedCateName = this.onChangeSelectedCateName.bind(this);
    this.onChangeEmployeeDistrict = this.onChangeEmployeeDistrict.bind(this);
    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeContact = this.onChangeEmployeeContact.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeeDescription = this.onChangeEmployeeDescription.bind(this);
    this.onChangeEmployeeAvailable = this.onChangeEmployeeAvailable.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      categories: [],
      seleCategoryName: '',
      employeedistrict: '',
      seleEmployeeName: '',
      seleEmployeeContact: '',
      seleEmployeeEmail: '',
      seleEmployeeDescription: '',
      seleEmployeeAvailable: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/employees/edit-employee/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          seleCategoryName: res.data.seleCategoryName,
          employeedistrict: res.data.employeedistrict,
          seleEmployeeName: res.data.employeeName,
          seleEmployeeContact: res.data.employeeContact,
          seleEmployeeEmail: res.data.employeeEmail,
          seleEmployeeDescription: res.data.employeeDescription,
          seleEmployeeAvailable: res.data.employeeAvailable
        });
      })
      .catch((error) => {
        console.log(error);
      })
    axios.get('http://localhost:4000/categories/get-categories')
    .then(res => {
      // console.log("array",res.data);
      this.setState({
          categories: res.data,
        })
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onChangeSelectedCateName(e) {
    this.setState({ seleCategoryName: e.target.value})
  }
  onChangeEmployeeDistrict(e) {
    this.setState({ employeedistrict: e.target.value})
  }
  onChangeEmployeeName(e) {
    this.setState({ seleEmployeeName: e.target.value})
  }
  onChangeEmployeeContact(e) {
    this.setState({ seleEmployeeContact: e.target.value})
  }
  onChangeEmployeeEmail(e) {
    this.setState({ seleEmployeeEmail: e.target.value})
  }
  onChangeEmployeeDescription(e) {
    this.setState({ seleEmployeeDescription: e.target.value})
  }
  onChangeEmployeeAvailable(e) {
    this.setState({ seleEmployeeAvailable: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()

    const employeeObject = {
      seleCategoryName: this.state.seleCategoryName,
      employeedistrict: this.state.employeedistrict,
      employeeName: this.state.seleEmployeeName,
      employeeContact: this.state.seleEmployeeContact,
      employeeEmail: this.state.seleEmployeeEmail,
      employeeDescription: this.state.seleEmployeeDescription,
      employeeAvailable: this.state.seleEmployeeAvailable
  };

    axios.put('http://localhost:4000/employees/update-employee/' + this.props.match.params.id, employeeObject)
      .then((res) => {
        console.log('Employee successfully updated');
        this.setState({ seleCategoryName: '',employeedistrict: '', seleEmployeeName: '',
        seleEmployeeContact: '', seleEmployeeEmail: ''
        , seleEmployeeDescription: '', seleEmployeeAvailable: ''});
        this.props.history.push('/EmployeeList');
        window.location.reload(false);
      }).catch((error) => {
        console.log(error)
        this.props.history.push('/EmployeeList');
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
                  <h5>Edit Employee Details</h5>
                  <br/>
                    <Form onSubmit={this.onSubmit}>
                    <Form.Group as={Row} controlId="validationFormikUsername">
                        <Form.Label column sm={4}>
                        Category Name:  
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control as="select" type="text" 
                        value={this.state.seleCategoryName} onChange={this.onChangeSelectedCateName} required>
                        <option value="">select the category</option>
                        { this.state.categories.map((category, key) => (
                            <option key={key} value={category.categoryname}>
                            {category.categoryname}
                            </option>
                        ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="validationFormikUsername">
                        <Form.Label column sm={4}>
                        District:  
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control as="select" type="text" 
                        value={this.state.employeedistrict} onChange={this.onChangeEmployeeDistrict} required>
                        <option value="">select a district</option>
                        <option>Ampara</option>
                        <option>Anuradhapura</option>
                        <option>Badulla</option>
                        <option>Batticaloa</option>
                        <option>Colombo</option>
                        <option>Galle</option>
                        <option>Gampaha</option>
                        <option>Hambantota</option>
                        <option>Jaffna</option>
                        <option>Kalutara</option>
                        <option>Kandy</option>
                        <option>Kegalle</option>
                        <option>Kilinochchi</option>
                        <option>Kurunegala</option>
                        <option>Mannar</option>
                        <option>Matale</option>
                        <option>Matara</option>
                        <option>Monaragala</option>
                        <option>Mullaitivu</option>
                        <option>Nuwara Eliya</option>
                        <option>Polonnaruwa</option>
                        <option>Puttalam</option>
                        <option>Ratnapura</option>
                        <option>Trincomalee</option>
                        <option>Vavuniya</option>
                        </Form.Control>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="validationFormikUsername">
                        <Form.Label column sm={4}>
                        Name:  
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control type="text" placeholder="employee name" 
                        value={this.state.seleEmployeeName} onChange={this.onChangeEmployeeName} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="validationFormikUsername">
                        <Form.Label column sm={4}>
                        Contact:  
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control type="text" placeholder="contact No" 
                        value={this.state.seleEmployeeContact} onChange={this.onChangeEmployeeContact} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="validationFormikUsername">
                        <Form.Label column sm={4}>
                        Email:  
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control type="email" placeholder="email address" 
                        value={this.state.seleEmployeeEmail} onChange={this.onChangeEmployeeEmail}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="validationFormikUsername">
                        <Form.Label column sm={4}>
                        Description:  
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control type="text" as="textarea" placeholder="description" 
                        value={this.state.seleEmployeeDescription} onChange={this.onChangeEmployeeDescription} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="validationFormikUsername">
                        <Form.Label column sm={4}>
                        Available:  
                        </Form.Label>
                        <Col sm={8}>
                        <Form.Control type="text" placeholder="time period" 
                        value={this.state.seleEmployeeAvailable} onChange={this.onChangeEmployeeAvailable} required/>
                        </Col>
                    </Form.Group>
                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 4 }}>
                            <Button type="submit" variant="outline-info">Update</Button>
                            </Col>
                        </Form.Group>
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