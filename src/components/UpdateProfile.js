import React, { Component} from 'react';
// import { useState } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";
import avatar from '../photoes/avatar.jpg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {getFromStorage} from "../utils/storage.js";
import SignIn from './SignIn';


class UpdateProfile extends Component {
    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
        this.onChangeUserContact = this.onChangeUserContact.bind(this);
        // this.handlePhoto = this.handlePhoto.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
            userId: this.props.userId,
            feedIMGBase64: '',
            photoStoatus: '',
            databaseBse64: this.props.photo,
            username: this.props.username,
            name: this.props.name,
            address: this.props.address,
            contact: this.props.contact,
            adminpage: false,
            accountType: '',
            obj: getFromStorage('the_main_app'),
        }
        // console.log('photo',this.state.databaseBse64);
      }

      componentDidMount() {
        if (this.state.obj) {
            if (this.state.obj.account_type === 'finder') {
                this.setState({accountType: '/FinderProfile'});
            } else if (this.state.obj.account_type === 'employer') {
                this.setState({accountType: '/EmployeeProfile'});
            } else if (this.state.obj.account_type === 'admin') {
                this.setState({accountType: '/AdminProfile'});
            }
        }
      }
    
      onChangeUserName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeUserAddress(e) {
        this.setState({address: e.target.value})
      }
    
      onChangeUserContact(e) {
        this.setState({contact: e.target.value})
      }
      _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result
        this.setState({feedIMGBase64: btoa(binaryString), photoStoatus:''});
      }

      handlePhoto = (e) => {
        if (e.target.files && e.target.files[0]) {
            // console.log(e.target.files[0]);
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(e.target.files[0]);
            // this.setState({photo: e.target.files[0]});
           
          }
      }

    handleSubmit = (e) => {
      if (!this.state.feedIMGBase64) {
        return this.setState({photoStoatus:"Select a photo to upload!"})
      }
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', this.state.feedIMGBase64);
        axios.put('http://localhost:4000/userPhotoUpload/update-user-photo/' + this.state.userId, formData)
             .then(res => {
                console.log('photo uploaded', res);
                this.setState({feedIMGBase64: ''});
                this.setState({adminpage: true});
                window.location.reload(false);
             })
             .catch(err => {
                console.log('uploaded error', err);
                this.setState({feedIMGBase64: ''});
             });
    }

    
      onSubmit(e) {
        e.preventDefault()
        const userObject = {
          name: this.state.name,
          address: this.state.address,
          contact: this.state.contact
        };
        axios.put('http://localhost:4000/users/update-user/' + this.state.userId, userObject)
        .then((res) => {
          console.log(res.data)
          console.log('User successfully updated');
          this.setState({adminpage: true});
          window.location.reload(false);
        }).catch((error) => {
          console.log(error)
        })
      }
    
    render() {
        if (!this.state.obj) {
            return <SignIn to='/SignIn'/>
        }
        if (this.state.adminpage) {
            return <Redirect to={this.state.accountType}/>
        }
        return (
            <div>
                <Card>
                    <Card.Body>
                    <Row>
                        <Col sm={5}>
                        <Col>    
                            <Image src={(this.state.databaseBse64) ? "data:image/png;base64," + (this.state.databaseBse64) : avatar} 
                            roundedCircle  height="95px" width='100px'/>
                            <Image src={"data:image/png;base64," + this.state.feedIMGBase64}
                             roundedCircle  height="95px" width='100px' style={{visibility: (this.state.feedIMGBase64)?'visible':'hidden'}}/>
                             <br/>
                             <span style={{color: '#f01616'}}> {(this.state.photoStoatus) ? this.state.photoStoatus : null}</span>
                        <Form encType='multipart/form-data'>
                            <Form.Group>
                                <Form.File id="exampleFormControlFile1"  type="file" 
                                accept=".png, .jpg, .jpeg" onChange={(e) => this.handlePhoto(e)} name="photo"
                                label="Choose Your Photo" required/>
                            </Form.Group>
                            <Button onClick={(e) => this.handleSubmit(e)} variant="outline-info">Add</Button>
                        </Form>
                        </Col>
                        </Col>
                        <Col sm={7}>
                        <Form onSubmit={this.onSubmit}>
                        <Form.Group as={Row} controlId="validationFormikUsername">
                            <Form.Label column sm={4}>
                            Name: 
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Name" value={this.state.name ? this.state.name : this.state.username} onChange={this.onChangeUserName} required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="validationFormikUsername">
                            <Form.Label column sm={4}>
                            Address:  
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Address" value={this.state.address} onChange={this.onChangeUserAddress} required/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="validationFormikUsername">
                            <Form.Label column sm={4}>
                            Contact No:  
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control type="text" placeholder="Contact No" value={this.state.contact} onChange={this.onChangeUserContact} required/>
                            </Col>
                        </Form.Group>
                            
                            

                            <Form.Group as={Row}>
                                <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit" variant="outline-info">Update</Button>
                                </Col>
                            </Form.Group>
                            </Form>
                            
                        </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
                            
                       

export default UpdateProfile;