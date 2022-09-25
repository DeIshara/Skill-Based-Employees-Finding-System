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
import SignIn from './SignIn';
import {getFromStorage} from "../utils/storage.js";
import NavbarSkills from "./NavbarSkills";
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            token: '',
            homeScreens: [],
            allhomeScreens: [],
            searchbyname: '',
            searchresultmsg: '',
        }
    }
    onChangeSearchByName = (e)=> {
        this.setState({ searchbyname: e.target.value , searchresultmsg: '',});
    }
    searchByName = ()=> {
      const searchedScreens = (this.state.allhomeScreens.filter(i => (
        (i.Create_Admin.toLowerCase().includes(this.state.searchbyname.toLowerCase())) 
        || 
        (i.Creator.toLowerCase().includes(this.state.searchbyname.toLowerCase()))
        || 
        (i.Description.toLowerCase().includes(this.state.searchbyname.toLowerCase()))
      )));
      if (searchedScreens.length === 0) {
        this.setState({homeScreens: this.state.allhomeScreens,
           searchbyname: '', searchresultmsg: 'Invalid creator name',});
      } else {
        this.setState({homeScreens: searchedScreens});
      }
    }
    componentDidMount() {
        const obj = getFromStorage('the_main_app');
        if (obj && obj.token) {
            const {token} = obj;
            fetch('http://localhost:4000/user-verify?token=' + token).then((res => res.json()))
            .then(json => {
               if (json.success) {
                   this.setState({
                       token,
                       isLoading: false})
               } else {
                   this.setState({
                       isLoading: false,
                   })
               }
            })
        } else {
            this.setState({
                isLoading: false,
            })
        }
        axios.get('http://localhost:4000/home/get-homePost')
        .then(res => {
        // console.log("array",res.data);
        this.setState({
            homeScreens: res.data,
            })
        this.setState({allhomeScreens: this.state.homeScreens});
        })
        .catch((error) => {
        console.log(error);
        })
    }
    render() {
        const { 
            isLoading,
            token,
         } = this.state;
        if (isLoading) {
            return (<div><p>Loading...</p></div>);
        }
        if (!token) {
            return (<div>
                <SignIn/>
            </div>);
        }

        if (token) {
            return (
                <div>
                    <NavbarSkills/> 
                    <Row>
                        <Col sm={3} style={{background: '#f5f5f5'}}>
                            <LeftSlider/>
                        </Col> 
                        <Col sm={9} style={{fontFamily: "Serif"}}>
                        <br/>
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">Find Your Opportunity</Navbar.Brand>
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
                            {this.state.homeScreens.map((res, i) => {
                            return (
                                <div obj={res} key={i}>
                                    <Card className="text-left">
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
}

export default Home;