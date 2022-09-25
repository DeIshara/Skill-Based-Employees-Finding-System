import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from 'react-bootstrap/Card';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FcBusinessman } from "react-icons/fc";
import LeftSlider from './LeftSlider';
import employees from '../photoes/employees.jpg';
import { Link } from 'react-router-dom';
import NavbarSkills from "./NavbarSkills";
import axios from 'axios';
import {getFromStorage} from "../utils/storage.js";
import SignIn from './SignIn';

class EmployeeCategories extends Component {
    constructor(props) {
        super(props)
        this.state = {
          categories: [],
          obj: getFromStorage('the_main_app'),
        };
    }
    
      componentDidMount() {
        axios.get('http://localhost:4000/categories/get-categories')
          .then(res => {
            this.setState({
                categories: res.data
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }
    render() {
      if (!this.state.obj) {
        return (<div>
          <SignIn/>
      </div>);
      }
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
                        <Navbar.Brand href="#home">Find Your Employee Category</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Nav className="justify-content-end">
                        <Nav.Link></Nav.Link>
                        <FcBusinessman size={40}/>
                        </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <Row>
                    {this.state.categories.map((res, i) => {
                      return (
                        <Col sm={6} obj={res} key={i}>
                        <br/>
                            <Link to={"/categoryLists/" + res.categoryname} className="categorylist-link">
                            <Card className="text-white" >
                                <Card.Img src={(res.photo) ? "data:image/png;base64," + (res.photo) : employees}  height ="140px" />
                                <Card.ImgOverlay>
                                    <Card.Title>{res.categoryname}</Card.Title>
                                    <Card.Text>
                                    {res.categorydescription}
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                            </Link>    
                        </Col>
                        )
                    })}
                    </Row> 
                    <br/>              
                    </Col>  
                </Row>
            </div>
        );
    }
}

export default EmployeeCategories;               
                    
                
                
            
                                                
                                                  
                               