import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FcBusinessman } from "react-icons/fc";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LeftSlider from '../LeftSlider';
import NavbarSkills from "../NavbarSkills";
import FindersTableRow from './FindersTableRow';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class FinderList  extends Component {
    constructor(props) {
        super(props)
        this.searchByName = this.searchByName.bind(this);
        this.onChangeSearchByName = this.onChangeSearchByName.bind(this);
        this.state = {
          finders: [],
          allDistrictsFinders: [],
          searchbyname: '',
          searchresultmsg: '',
        };
      }
    onChangeSearchByName(e) {
        this.setState({ searchbyname: e.target.value , searchresultmsg: '',});
    }
    searchByName() {
      const searchedEmployees = (this.state.allDistrictsFinders.filter(i => (
         (i.name.toLowerCase().includes(this.state.searchbyname.toLowerCase())) || 
         (i.username.toLowerCase().includes(this.state.searchbyname.toLowerCase()))
      )));
      if (searchedEmployees.length === 0) {
        this.setState({finders: this.state.allDistrictsFinders,
           searchbyname: '', searchresultmsg: 'Invalid finder name',});
      } else {
        this.setState({finders: searchedEmployees});
      }
    }
    componentDidMount() {
      const value = 'finder';
      axios.get('http://localhost:4000/users/get-users/finders/' + value)
        .then(res => {
          this.setState({
            finders: res.data
          });
        //console.log('e',this.state.finders);
          this.setState({allDistrictsFinders: this.state.finders});
        })
        .catch((error) => {
          console.log(error);
        })
    }
    
      DataTable() {
        return this.state.finders.map((res, i) => {
          return <FindersTableRow obj={res} key={i} />;
        });
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
                <Form inline >
                  <FormControl type="search" placeholder="Search by Name or Username" aria-label="Search"
                  className="mr-sm-2" value={this.state.searchbyname}
                  onChange={this.onChangeSearchByName}/>
                  <Button onClick={this.searchByName} variant="outline-info">Search</Button>
                </Form> 
                <span style={{color: '#f01616', background:'white'}}> {this.state.searchresultmsg}</span>
                <div className="table-wrapper" 
               style={{background: 'white'}}>
                <Table striped bordered hover responsive>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th>ACC Type</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.DataTable()}
                    </tbody>
                </Table>
                </div>
                </Col>
            </Row>
        </div>
        );
    }
}

export default FinderList;