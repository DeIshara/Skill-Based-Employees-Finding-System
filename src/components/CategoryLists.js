import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import employees from '../photoes/employees.jpg';
import { FcBusinessman } from "react-icons/fc";
import LeftSlider from './LeftSlider';
import NavbarSkills from "./NavbarSkills";
import axios from 'axios';

class CategoryLists extends Component {
    constructor(props) {
        super(props)
        this.onChangeDistrictEmployees = this.onChangeDistrictEmployees.bind(this);
        this.onChangeSearchByName = this.onChangeSearchByName.bind(this);
        this.filterEmployees = this.filterEmployees.bind(this);
        this.searchByName = this.searchByName.bind(this);
        this.state = {
          employees: [],
          allDistrictsEmployees: [],
          dropdownArray: [],
          selectedDistrict: 'All districts',
          searchbyname: '',
        };
    }

    onChangeDistrictEmployees(e) {
        this.setState({ selectedDistrict: e.target.value });
    }
    onChangeSearchByName(e) {
        this.setState({ searchbyname: e.target.value });
    }
    filterEmployees() { 
        if (this.state.selectedDistrict === "All districts") {
            this.setState({employees: this.state.allDistrictsEmployees, searchbyname: ''});
        } else {
            const filteredEmployees = (this.state.allDistrictsEmployees.filter(i => 
                (i.employeedistrict === this.state.selectedDistrict)
            ));
            this.setState({employees: filteredEmployees, searchbyname: ''});
        }    
    }
    searchByName() {
        const searchedEmployees = (this.state.allDistrictsEmployees.filter(i => {
            if (this.state.selectedDistrict !== 'All districts') {
                return ((i.employeeName.toLowerCase().includes(this.state.searchbyname.toLowerCase()))
                && i.employeedistrict === this.state.selectedDistrict)
            } else {
                return ((i.employeeName.toLowerCase().includes(this.state.searchbyname.toLowerCase())))
            }   
        }));
        if (searchedEmployees.length === 0) {
            // eslint-disable-next-line array-callback-return
            const searchedEmployees2 = (this.state.allDistrictsEmployees.filter((i) => {
                if (this.state.selectedDistrict !== 'All districts') {
                    return ((i.employeeName.toLowerCase().includes(this.state.searchbyname.toLowerCase())))
                } 
            }));
            if (searchedEmployees2.length === 0) {
                this.setState({employees: this.state.allDistrictsEmployees, searchbyname: '', selectedDistrict: ''});
            } else {
                this.setState({employees: searchedEmployees2,
                     selectedDistrict: searchedEmployees2[0].employeedistrict});
            }
            
        } else {
            this.setState({employees: searchedEmployees});
        }    
    }
   
    componentDidMount() {
    axios.get('http://localhost:4000/employees/get-employees/selected/' + this.props.match.params.category)
        .then(res => {
        this.setState({
            allDistrictsEmployees: res.data
        });
        this.state.dropdownArray.push(this.state.allDistrictsEmployees[0].employeedistrict);
        for (let i = 1; i < this.state.allDistrictsEmployees.length; i++) {
            const filtered = (this.state.dropdownArray.filter(f=>
            f === this.state.allDistrictsEmployees[i].employeedistrict));
            if (filtered.length === 0) {
                this.state.dropdownArray.push(this.state.allDistrictsEmployees[i].employeedistrict);
            }
        }
        this.setState({employees: this.state.allDistrictsEmployees});
        // console.log("dd", this.state.dropdownArray);
        // console.log("dd", this.state.allDistrictsEmployees);
        // console.log("dd", this.state.employees);
        })
        .catch((error) => {
        console.log(error);
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
                            <Navbar.Brand href="#home">Find Your {this.props.match.params.category} Employees</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Nav className="justify-content-end">
                            <Nav.Link></Nav.Link>
                            <FcBusinessman size={40}/>
                            </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav >
                            <Nav.Link href="">
                            <Form inline >
                            <Form.Control as='select' className="text-white mr-sm-2" style={{background: "#5bc0de"}}
                             aria-label="Default select example" value={this.state.selectedDistrict} 
                             onChange={this.onChangeDistrictEmployees}>
                                <option>All districts</option>
                                {this.state.dropdownArray.map((district, key) => (
                                        <option key={key}>
                                        {district}
                                        </option>
                                ))}
                            </Form.Control>
                            <Button onClick={this.filterEmployees} variant="outline-info">Find</Button>
                            </Form>
                            </Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                            <Nav.Link href=""></Nav.Link>
                            </Nav>
                            <Form inline >
                            <FormControl type="search" placeholder="Search by name" aria-label="Search"
                            className="mr-sm-2" value={this.state.searchbyname} 
                            onChange={this.onChangeSearchByName}/>
                            <Button onClick={this.searchByName} variant="outline-info">Search</Button>
                            </Form> 
                            </Navbar.Collapse>
                        </Navbar>
                        <br/>
                        {this.state.employees.map((res, i) => {
                            return (
                                <div obj={res} key={i}>
                                    <Card className="text-left">
                                    <Card.Img src={employees}  height ="295rem"/>
                                    <Card.ImgOverlay>
                                        <Card.Body className="text-white">
                                            <Card.Text>
                                                Name: {res.employeeName}<br/>
                                                Contact: {res.employeeContact}<br/>
                                                Email: {res.employeeEmail}<br/>
                                                Deccription: {res.employeeDescription} 
                                            </Card.Text>
                                            <Card.Text>{res.employeedistrict} District</Card.Text>
                                            <Card.Header variant="success">Available: {res.employeeAvailable}</Card.Header>
                                            <Button variant="info">chat</Button>       
                                        </Card.Body>
                                    </Card.ImgOverlay> 
                                    </Card> 
                                    <br/> 
                                </div>   
                            );
                        })}
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CategoryLists;