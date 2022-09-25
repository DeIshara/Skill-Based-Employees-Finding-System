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
import HomePostTableRow from './HomePostTableRow';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class HomeScreenPostList extends Component {
    constructor(props) {
        super(props)
        this.searchByName = this.searchByName.bind(this);
        this.onChangeSearchByName = this.onChangeSearchByName.bind(this);
        this.state = {
          homescrens: [],
          allHomescrens: [],
          searchbyname: '',
          searchresultmsg: '',
        };
      }
    onChangeSearchByName(e) {
        this.setState({ searchbyname: e.target.value , searchresultmsg: '',});
    }
    searchByName() {
      const searchedEmployees = (this.state.allHomescrens.filter(i => (
         (i.Create_Admin.toLowerCase().includes(this.state.searchbyname.toLowerCase())) || 
         (i.Creator.toLowerCase().includes(this.state.searchbyname.toLowerCase()))|| 
         (i.Description.toLowerCase().includes(this.state.searchbyname.toLowerCase()))
      )));
      if (searchedEmployees.length === 0) {
        this.setState({homescrens: this.state.allHomescrens,
           searchbyname: '', searchresultmsg: 'Invalid home post name or discription'});
      } else {
        this.setState({homescrens: searchedEmployees});
      }
    }
    componentDidMount() {
      axios.get('http://localhost:4000/home/get-homePost')
        .then(res => {
          this.setState({
            homescrens: res.data
          });
          // console.log('e',this.state.employees);
          this.setState({allHomescrens: this.state.homescrens});
        })
        .catch((error) => {
          console.log(error);
        })
    }
    
      DataTable() {
        return this.state.homescrens.map((res, i) => {
          return <HomePostTableRow obj={res} key={i} />;
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
                  <FormControl type="search" placeholder="Search by Name or Discription" aria-label="Search"
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
                        <th>Creator</th>
                        <th>By Admin</th>
                        <th>Description</th>
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

export default HomeScreenPostList;