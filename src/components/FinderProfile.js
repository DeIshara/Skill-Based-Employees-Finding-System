import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import avatar from '../photoes/avatar.jpg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import UpdateProfile from './UpdateProfile';
import { FcAdvertising} from "react-icons/fc";
import LeftSlider from './LeftSlider';
import NavbarSkills from "./NavbarSkills";
import {getFromStorage} from "../utils/storage.js";
import SignIn from './SignIn';

class FinderProfile extends Component {
    constructor(props) {
        super(props)
    
        // State
        this.state = {
          userId:'',
          username: '',
          name: '',
          address: '',
          contact: '',
          photo: '',
          obj: getFromStorage('the_main_app'),

          finderPostDescription: '',
          finderPostSuccess: '',
          finderPostIMGBase64: '',
        }
      }
    
      componentDidMount() {
        if (!this.state.obj) { return}
        axios.get('http://localhost:4000/users/get-users/' + this.state.obj.userId)
          .then(res => {
            this.setState({
              userId: res.data._id,
              username: res.data.username,
              name: res.data.name,
              address: res.data.address,
              contact: res.data.contact,
              photo: res.data.photo
            });
          })
          .catch((error) => {
            console.log(error);
          })
      }

      //finder post related codes.
      onChangeFinderPostDes = (e) => {
        this.setState({ finderPostDescription: e.target.value, finderPostSuccess: ''})
      }
      _handleReaderLoadedFinderPost = (readerEvt) => {
        let binaryString = readerEvt.target.result
        this.setState({finderPostIMGBase64: btoa(binaryString), finderPostSuccess: ''});
      }

      handleFinderPost = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoadedFinderPost.bind(this);
            reader.readAsBinaryString(e.target.files[0]);
          }
      }
      handleSubmitFinderPost =(e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('Creator', (this.state.name)?(this.state.name):this.state.username);
            formData.append('Description', this.state.finderPostDescription);
            formData.append('Creator_photo', this.state.photo);
            formData.append('photo', this.state.finderPostIMGBase64);
            axios.post('http://localhost:4000/finders/create-finderPost', formData)
                 .then(res => {
                    console.log('photo uploaded', res);
                    this.setState({finderPostIMGBase64: '',finderPostDescription: '', finderPostSuccess: 'Successfully created finder post'});
                    
                 })
                 .catch(err => {
                    console.log('uploaded error', err);
                    this.setState({finderPostIMGBase64: '',finderPostDescription: '', finderPostSuccess: ''});
                 });
      }

    render() {
        if (!this.state.obj) {
            return (<div>
              <SignIn/>
          </div>);
        }
        return (
            // NotificationBadge.propTypes = {
            //     count: React.PropTypes.number,
            //     label: React.PropTypes.string,
            //     containerStyle: React.PropTypes.object,
            //     style: React.PropTypes.object,
            //     className: React.PropTypes.string,
            //     effect: React.PropTypes.array,
            //     duration: React.PropTypes.number
            //   };
            <div>
                <NavbarSkills/>
                <Row>
                    <Col sm={3} style={{background: '#f5f5f5'}}>
                            <LeftSlider/>
                    </Col> 
                    <Col  sm={9}>
                    <br/>
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand><h4>Finder Profile</h4></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                                <Navbar.Text>
                                
                                </Navbar.Text>
                            <FcAdvertising size = {40} />
                            {/* <NotificationBadge count={this.state.count} effect={Effect.SCALE}/>  */}
                            </Navbar.Collapse>
                        </Navbar>
                        
                        <Router> 
                        
                        <div className="wrapper">
                        <Switch>
                                <Route exact path='/' component={FinderProfile}/>
                                <Route path="/UpdateProfile"  component={ () => (<UpdateProfile username={this.state.username} photo={this.state.photo}
                                 userId={this.state.userId} name={this.state.name} address={this.state.address}  contact={this.state.contact}/>)}/>     
                        <Card>
                            <Card.Body>
                        
                            
                            <Row>
                                <Col sm={3}><Image src={(this.state.photo)?"data:image/png;base64," + (this.state.photo): avatar} roundedCircle  height="95px" width='100px'/></Col>
                                <Col sm={9}>
                                    <h5>Name: <span>{this.state.name ? this.state.name : this.state.username}</span></h5>
                                    <text>Address: <span>{this.state.address}</span></text><br/>
                                    <text>Contact No: <span>{this.state.contact}</span></text><br/><br/>
                                    <Link to={"/UpdateProfile"}><Button variant="outline-info" >To Update Details</Button></Link>
                                </Col>
                            
                            </Row>
                            
                            </Card.Body>
                        </Card>
                        </Switch>
                        </div>
                        </Router>
                        <br/>
                        <Card>
                            <Card.Body> 
                                <Row>
                                    <Col sm={2}></Col>
                                    <Col>
                                        <Image src={("data:image/png;base64," + this.state.finderPostIMGBase64 )}
                                        height="75px" width='80px' style={{visibility: (this.state.finderPostIMGBase64)?'visible':'hidden'}}/>
                                        <br/>
                                        <span style={{color: '#12e049'}}> {(this.state.finderPostSuccess) ? this.state.finderPostSuccess : null}</span>
                                    <Form onSubmit={(e) => this.handleSubmitFinderPost(e)} encType='multipart/form-data'>
                                        <Form.Group>
                                            <Form.File id="exampleFormControlFile1"  type="file" 
                                            accept=".png, .jpg, .jpeg" onChange={(e) => this.handleFinderPost(e)} name="photo"
                                            label="Add finder post" required/>
                                        </Form.Group>
                                        <Form.Group as={Row} controlId="validationFormikUsername">
                                            <Form.Label column sm={3}>
                                            Description:  
                                            </Form.Label>
                                            <Col sm={6}>
                                            <Form.Control type="text" as="textarea" placeholder="description" 
                                            value={this.state.finderPostDescription} onChange={(e) => this.onChangeFinderPostDes(e)} required/>
                                            </Col>
                                        </Form.Group>
                                        <Button type="submit" variant="outline-info">Add</Button>
                                    </Form>         
                                    </Col>
                                </Row>    
                            </Card.Body>
                        </Card> 
                        <br/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default FinderProfile;