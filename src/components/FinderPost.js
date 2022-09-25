import React, { Component } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
// import employee from '../photoes/employee.jpg';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FcBusinessman } from "react-icons/fc";
import LeftSlider from './LeftSlider';
import NavbarSkills from "./NavbarSkills";
import {getFromStorage} from "../utils/storage.js";
import SignIn from './SignIn';
import axios from 'axios';

class FinderPost extends Component {
    constructor(props) {
        super(props)
        this.state = {
          obj: getFromStorage('the_main_app'),
          finderScreens: [],
          allFinderScreens: [],
          searchbyname: '',
          searchresultmsg: '',
        };
    }
    onChangeSearchByName = (e)=> {
        this.setState({ searchbyname: e.target.value , searchresultmsg: '',});
    }
    searchByName = ()=> {
      const searchedScreens = (this.state.allFinderScreens.filter(i => (
        (i.Create_Admin.toLowerCase().includes(this.state.searchbyname.toLowerCase())) 
        || 
        (i.Creator.toLowerCase().includes(this.state.searchbyname.toLowerCase()))
        || 
        (i.Description.toLowerCase().includes(this.state.searchbyname.toLowerCase()))
      )));
      if (searchedScreens.length === 0) {
        this.setState({finderScreens: this.state.allFinderScreens,
           searchbyname: '', searchresultmsg: 'Invalid creator name',});
      } else {
        this.setState({finderScreens: searchedScreens});
      }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/finders/get-finderPost')
        .then(res => {
        this.setState({
            finderScreens: res.data,
            })
        this.setState({allFinderScreens: this.state.finderScreens});
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
                    <Col  sm={9} style={{fontFamily: "Serif"}}>
                    <br/>
                <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home">Find Your Vercancy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                        <Form inline >
                            <FormControl type="search" placeholder="Search by Name or Description" aria-label="Search"
                            className="mr-sm-2" value={this.state.searchbyname} 
                            onChange={(e) => this.onChangeSearchByName(e)}/>
                            <Button onClick={() => this.searchByName()} variant="outline-info">Search</Button>
                        </Form>
                        <Nav className="justify-content-end">
                        <Nav.Link></Nav.Link>
                        <FcBusinessman size={40}/>
                        </Nav>
                        </Navbar.Collapse>
                  </Navbar>
                  <span className="mr-5" style={{color: '#f01616', background:'white', float:'right'}}> {this.state.searchresultmsg}</span>
                            <br/>
                            {this.state.finderScreens.map((res, i) => {
                            return (
                                <div obj={res} key={i}>
                                    <Card className="text-left" >
                                        <Card.Header>
                                            <Row>
                                                <Col sm={2}>
                                                    <Image src={"data:image/png;base64," + res.Creator_photo} 
                                                    roundedCircle  height="70px" width='75px'/>
                                                </Col>
                                                <Col sm={8}>
                                                    <h5>{(res.Create_Admin)?(res.Create_Admin):res.Creator}</h5>
                                                    <p>{res.Description}</p>
                                                </Col>
                                            </Row>
                                        </Card.Header>
                                
                                        <Image src={"data:image/png;base64," + res.photo} rounded  height="300px" width='auto'/>
                                    
                                        <Card.Footer className="text-muted">Comments</Card.Footer>
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

export default FinderPost;