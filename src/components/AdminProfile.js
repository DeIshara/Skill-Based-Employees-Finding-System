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


class AdminProfile extends Component {
    constructor(props) {
        super(props)
    
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onChangeCategoryDesc = this.onChangeCategoryDesc.bind(this);
        this.onChangeSelectedCateName = this.onChangeSelectedCateName.bind(this);
        this.onChangeEmployeeDistrict = this.onChangeEmployeeDistrict.bind(this);
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeEmployeeContact = this.onChangeEmployeeContact.bind(this);
        this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
        this.onChangeEmployeeDescription = this.onChangeEmployeeDescription.bind(this);
        this.onChangeEmployeeAvailable = this.onChangeEmployeeAvailable.bind(this);
        this.onSubmitCategory = this.onSubmitCategory.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // State
        this.state = {
          userId:'',
          username: '',
          name: '',
          address: '',
          contact: '',
          photo: '',
          categoryname: '',
          categorydescription: '',
          categories: [],
          seleCategoryName: '',
          employeedistrict: '',
          seleEmployeeName: '',
          seleEmployeeContact: '',
          seleEmployeeEmail: '',
          seleEmployeeDescription: '',
          seleEmployeeAvailable: '',
          cateNameError: '',
          cateNameSuccess: '',
          empCreateSuccess: '',
          obj: getFromStorage('the_main_app'),
          seleCategoryNamephoto: '',
          categoryIMGBase64: '',
          photoStoatus: '',
          categoryPhotoSuccess: '',
          Id: '',
          employeePostDescription: '',
          employeePostSuccess: '',
          employeePostIMGBase64: '',

          finderPostDescription: '',
          finderPostSuccess: '',
          finderPostIMGBase64: '',

          homePostDescription: '',
          homePostSuccess: '',
          homePostIMGBase64: '',

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
        // console.log('name',this.state.username);
        // console.log('photo',this.state.photo);
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
    
      onChangeCategoryName(e) {
        this.setState({ categoryname: e.target.value , cateNameSuccess: ''})
      }
    
      onChangeCategoryDesc(e) {
        this.setState({ categorydescription: e.target.value,cateNameSuccess: '' })
      }
    
      onChangeSelectedCateName(e) {
        this.setState({ seleCategoryName: e.target.value, empCreateSuccess: ''})
      }
      onChangeEmployeeDistrict(e) {
        this.setState({ employeedistrict: e.target.value, empCreateSuccess: ''})
      }
      onChangeEmployeeName(e) {
        this.setState({ seleEmployeeName: e.target.value, empCreateSuccess: ''})
      }
      onChangeEmployeeContact(e) {
        this.setState({ seleEmployeeContact: e.target.value , empCreateSuccess: ''})
      }
      onChangeEmployeeEmail(e) {
        this.setState({ seleEmployeeEmail: e.target.value, empCreateSuccess: '' })
      }
      onChangeEmployeeDescription(e) {
        this.setState({ seleEmployeeDescription: e.target.value, empCreateSuccess: ''})
      }
      onChangeEmployeeAvailable(e) {
        this.setState({ seleEmployeeAvailable: e.target.value, empCreateSuccess: '' })
      }

      //Category photo related codes.
      onChangeCategoryNamePhoto = (e) => {
        this.setState({ seleCategoryNamephoto: e.target.value, categoryPhotoSuccess: ''})
      }
      _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result
        this.setState({categoryIMGBase64: btoa(binaryString), photoStoatus:'', categoryPhotoSuccess: ''});
      }

      handlePhoto = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(e.target.files[0]);
          }
      }
      categoryPhoto =(e) => {
        if (!this.state.categoryIMGBase64) {
            return this.setState({photoStoatus:"Select a photo to upload!"})
          }
          const item = this.state.categories.filter(i=>i.categoryname === this.state.seleCategoryNamephoto);
          if (item.length === 0) {
              return
          }
            e.preventDefault();
            const formData = new FormData();
            formData.append('photo', this.state.categoryIMGBase64);
            axios.put('http://localhost:4000/categoryPhotoUpload/update-category-photo/' + item[0]._id, formData)
                 .then(res => {
                    console.log('photo uploaded', res);
                    this.setState({categoryIMGBase64: '',seleCategoryNamephoto: '', categoryPhotoSuccess: 'Successfully updated category photo'});
                    
                 })
                 .catch(err => {
                    console.log('uploaded error', err);
                    this.setState({categoryIMGBase64: '',seleCategoryNamephoto: '', categoryPhotoSuccess: ''});
                 });
      }
      //employee post related codes.
      onChangeEmployeePostDes = (e) => {
        this.setState({ employeePostDescription: e.target.value, employeePostSuccess: ''})
      }
      _handleReaderLoadedEmployeePost = (readerEvt) => {
        let binaryString = readerEvt.target.result
        this.setState({employeePostIMGBase64: btoa(binaryString), employeePostSuccess: ''});
      }

      handleEmployeePost = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoadedEmployeePost.bind(this);
            reader.readAsBinaryString(e.target.files[0]);
          }
      }
      handleSubmitEmployeePost =(e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('Create_Admin', (this.state.name)?(this.state.name):this.state.username);
            formData.append('Description', this.state.employeePostDescription);
            formData.append('Creator_photo', this.state.photo);
            formData.append('photo', this.state.employeePostIMGBase64);
            axios.post('http://localhost:4000/employees/create-employeePost', formData)
                 .then(res => {
                    console.log('photo uploaded', res);
                    this.setState({employeePostIMGBase64: '',employeePostDescription: '', employeePostSuccess: 'Successfully created employee post'});
                    
                 })
                 .catch(err => {
                    console.log('uploaded error', err);
                    this.setState({employeePostIMGBase64: '',employeePostDescription: '', employeePostSuccess: ''});
                 });
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
            formData.append('Create_Admin', (this.state.name)?(this.state.name):this.state.username);
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
      //Home post related codes.
      onChangeHomePostDes = (e) => {
        this.setState({ homePostDescription: e.target.value, homePostSuccess: ''})
      }
      _handleReaderLoadedHomePost = (readerEvt) => {
        let binaryString = readerEvt.target.result
        this.setState({homePostIMGBase64: btoa(binaryString), homePostSuccess: ''});
      }

      handleHomePost = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = this._handleReaderLoadedHomePost.bind(this);
            reader.readAsBinaryString(e.target.files[0]);
          }
      }
      handleSubmitHomePost =(e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('Create_Admin', (this.state.name)?(this.state.name):this.state.username);
            formData.append('Description', this.state.homePostDescription);
            formData.append('Creator_photo', this.state.photo);
            formData.append('photo', this.state.homePostIMGBase64);
            axios.post('http://localhost:4000/home/create-homePost', formData)
                 .then(res => {
                    console.log('photo uploaded', res);
                    this.setState({homePostIMGBase64: '',homePostDescription: '', homePostSuccess: 'Successfully created home post'});
                    
                 })
                 .catch(err => {
                    console.log('uploaded error', err);
                    this.setState({homePostIMGBase64: '',homePostDescription: '', homePostSuccess: ''});
                 });
      }
    
      onSubmitCategory(e) {
        e.preventDefault()
    
        const categoryObject = {
            categoryname: this.state.categoryname,
            categorydescription: this.state.categorydescription,
        };
    
        axios.post('http://localhost:4000/categories/create-category', categoryObject)
        .then((res) => {
        // const category = this.state.categories.push(res.data.category);
        if (!res.data.success) {
            return this.setState({cateNameError: res.data.message, cateNameSuccess: ''});
        }
        console.log('Category successfully Created');
        this.setState({ cateNameSuccess: res.data.message , cateNameError: '',
         categoryname: '', categorydescription: ''});
        }).catch((error) => {
        console.log(error);
        })
      }
      onSubmit(e) {
        e.preventDefault()
        const employeeObject = {
            employeeId: this.state.userId,
            seleCategoryName: this.state.seleCategoryName,
            employeedistrict: this.state.employeedistrict,
            employeeName: this.state.seleEmployeeName,
            employeeContact: this.state.seleEmployeeContact,
            employeeEmail: this.state.seleEmployeeEmail,
            employeeDescription: this.state.seleEmployeeDescription,
            employeeAvailable: this.state.seleEmployeeAvailable
        };
    
        axios.post('http://localhost:4000/employees/create-employee', employeeObject)
        .then((res) => {
        // console.log(res.data);
        console.log('Employee successfully Created');
        this.setState({empCreateSuccess: res.data.message, seleCategoryName: '', employeedistrict: '', seleEmployeeName: '',
        seleEmployeeContact: '', seleEmployeeEmail: ''
        , seleEmployeeDescription: '', seleEmployeeAvailable: ''});
        }).catch((error) => {
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
                            <Navbar.Brand><h4>Admin Profile</h4></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                                <Navbar.Text>
                                Manage Criteria: <a href="/ManageCriteria"><h5>Manage</h5></a>
                                </Navbar.Text>
                                &nbsp; &nbsp; &nbsp;
                            <FcAdvertising size = {40} />
                            {/* <NotificationBadge count={this.state.count} effect={Effect.SCALE}/>  */}
                            </Navbar.Collapse>
                        </Navbar>
                        
                        <Router> 
                        
                        <div className="wrapper">
                        <Switch>
                                <Route exact path='/' component={AdminProfile}/>
                                <Route path="/UpdateProfile"  component={ () => (<UpdateProfile username={this.state.username} photo={this.state.photo}
                                 userId={this.state.obj.userId} name={this.state.name} address={this.state.address}  contact={this.state.contact}/>)}/>     
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
                                
                                <Col> 
                                <h5>Create Employee Category</h5>
                                <span style={{color: '#f01616'}}> {(this.state.cateNameError) ? this.state.cateNameError : null}</span>
                                <span style={{color: '#12e049'}}> {(this.state.cateNameSuccess) ? this.state.cateNameSuccess : null}</span>
                                <br/>
                                <Form>
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
                                    Description  
                                    </Form.Label>
                                    <Col sm={8}>
                                    <Form.Control type="text" as="textarea" placeholder="category description"
                                    value={this.state.categorydescription} onChange={this.onChangeCategoryDesc} required/>
                                    </Col>
                                </Form.Group>
                               
                                    <Form.Group as={Row}>
                                        <Col sm={{ span: 10, offset: 4 }}>   
                                        <Button onClick={this.onSubmitCategory} variant="outline-info">Create</Button>
                                        </Col>
                                    </Form.Group>
                                    </Form>
                                    
                                    <Image src={"data:image/png;base64," + this.state.categoryIMGBase64}
                                    height="75px" width='80px' style={{visibility: (this.state.categoryIMGBase64)?'visible':'hidden'}}/>
                                    <br/>
                                    <span style={{color: '#f01616'}}> {(this.state.photoStoatus) ? this.state.photoStoatus : null}</span>
                                    <span style={{color: '#12e049'}}> {(this.state.categoryPhotoSuccess) ? this.state.categoryPhotoSuccess : null}</span>
                                <Form onSubmit={(e) => this.categoryPhoto(e)}>
                                    <Form.Group>
                                            <Form.File id="exampleFormControlFile1" label="Category background Photo"
                                            type="file" accept=".png, .jpg, .jpeg" 
                                            onChange={(e) => this.handlePhoto(e)} name="photo"
                                            required />
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="validationFormikUsername">
                                        <Form.Label column sm={4}>
                                        Category Name:  
                                        </Form.Label>
                                        <Col sm={8}>
                                        <Form.Control as="select" type="text" 
                                        value={this.state.seleCategoryNamephoto} onChange={(e) => this.onChangeCategoryNamePhoto(e)} required>
                                        <option value="">select the category</option>
                                        {this.state.categories.map((category, key) => (
                                            <option key={key}>
                                            {category.categoryname}
                                            </option>
                                        ))}
                                        </Form.Control>
                                        </Col>
                                    </Form.Group>
                                    
                                    <Button type="submit" variant="outline-info">Add</Button>
                                </Form>
                                    
                                </Col>
                                <hr/>
                                <Col> 
                                <h5>Add Employee to category</h5>
                                <span style={{color: '#12e049'}}> {(this.state.empCreateSuccess) ? this.state.empCreateSuccess : null}</span>
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
                                    {this.state.categories.map((category, key) => (
                                        <option key={key}>
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
                                    Description  
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
                                        
                                        <Button type="submit" variant="outline-info">Add</Button>
                                    
                                        </Col>
                                    </Form.Group>
                                </Form>
                                    
                                </Col>
                            </Row>
                            </Card.Body>
                        </Card>
                        <br/>

                        <Card>
                            <Card.Body>
                            
                            <Row>  
                                <Col>    
                                <Image src={("data:image/png;base64," + this.state.employeePostIMGBase64 )}
                                height="75px" width='80px' style={{visibility: (this.state.employeePostIMGBase64)?'visible':'hidden'}}/>
                                    <br/>
                                    <span style={{color: '#12e049'}}> {(this.state.employeePostSuccess) ? this.state.employeePostSuccess : null}</span>
                                <Form onSubmit={(e) => this.handleSubmitEmployeePost(e)} encType='multipart/form-data'>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1"  type="file" 
                                        accept=".png, .jpg, .jpeg" onChange={(e) => this.handleEmployeePost(e)} name="photo"
                                        label="Add employee post" required/>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="validationFormikUsername">
                                        <Form.Label column sm={5}>
                                        Description:  
                                        </Form.Label>
                                        <Col sm={7}>
                                        <Form.Control type="text" as="textarea" placeholder="description" 
                                        value={this.state.employeePostDescription} onChange={(e) => this.onChangeEmployeePostDes(e)} required/>
                                        </Col>
                                    </Form.Group>
                                    <Button type="submit" variant="outline-info">Add</Button>
                                </Form>
                                <br/>
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
                                        <Form.Label column sm={5}>
                                        Description:  
                                        </Form.Label>
                                        <Col sm={7}>
                                        <Form.Control type="text" as="textarea" placeholder="description" 
                                        value={this.state.finderPostDescription} onChange={(e) => this.onChangeFinderPostDes(e)} required/>
                                        </Col>
                                    </Form.Group>
                                    <Button type="submit" variant="outline-info">Add</Button>
                                </Form>
                                </Col>
                                <Col>
                                <Image src={("data:image/png;base64," + this.state.homePostIMGBase64 )}
                                height="75px" width='80px' style={{visibility: (this.state.homePostIMGBase64)?'visible':'hidden'}}/>
                                    <br/>
                                <span style={{color: '#12e049'}}> {(this.state.homePostSuccess) ? this.state.homePostSuccess : null}</span>
                                <Form onSubmit={(e) => this.handleSubmitHomePost(e)} encType='multipart/form-data'>
                                    <Form.Group>
                                        <Form.File id="exampleFormControlFile1"  type="file" 
                                        accept=".png, .jpg, .jpeg" onChange={(e) => this.handleHomePost(e)} name="photo"
                                        label="Add home post" required/>
                                    </Form.Group>
                                    <Form.Group as={Row} controlId="validationFormikUsername">
                                        <Form.Label column sm={5}>
                                        Description:  
                                        </Form.Label>
                                        <Col sm={7}>
                                        <Form.Control type="text" as="textarea" placeholder="description" 
                                        value={this.state.homePostDescription} onChange={(e) => this.onChangeHomePostDes(e)} required/>
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

export default AdminProfile;    
                                
                                 
                        
                        
                        
                        
                           
                            
                       
                
                        
                            

                            
                        

                           