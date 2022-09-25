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


class EmployeeProfile extends Component {
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
        this.onChangesetEmpCategory = this.onChangesetEmpCategory.bind(this);
        this.updateDataAccess = this.updateDataAccess.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    
        // State
        this.state = {
          userId:'',
          username: '',
          name: '',
          address: '',
          contact: '',
          photo: '',
          categories: [],
          remainingCategories: [],
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
          sameCategoryEmployees: [],
          setEmpCategory: '',
          empAddedStatus: '',
          addUpdateText: 'Add',
          noAddedEmpCate: '',
          editUserId: '',
          empEditIndex: '',
          empDelete: "hidden",

          employeePostDescription: '',
          employeePostSuccess: '',
          employeePostIMGBase64: '',

          homePostDescription: '',
          homePostSuccess: '',
          homePostIMGBase64: '',
        }
      }
    
      async componentDidMount() {
        if (!this.state.obj) { return}
        await axios.get('http://localhost:4000/users/get-users/' + this.state.obj.userId)
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
          await axios.get('http://localhost:4000/employees/get-employees/categorized/' + this.state.obj.userId)
            .then(res => {
                // console.log("data", res.data);
                if (res.data.length !== 0) {
                    this.setState({sameCategoryEmployees: res.data})
                } else {
                    this.setState({noAddedEmpCate: 'Employee no add to any category'});
                }
            })
            .catch((error) => {
                console.log(error);
            })
          await axios.get('http://localhost:4000/categories/get-categories')
          .then(res => {
            console.log("array",res.data);
            this.setState({
                categories: res.data,
              })
          })
          .catch((error) => {
            console.log(error);
          });
          
        const remainArray = [];
        for (let i = 0; i < this.state.categories.length; i++) {
            const filterd = this.state.sameCategoryEmployees.findIndex(f=>
                f.seleCategoryName === this.state.categories[i].categoryname);
            if (filterd === -1) {
                remainArray.push(this.state.categories[i].categoryname);
            }
        }
        this.setState({remainingCategories: remainArray});
      }
    
    
      onChangeSelectedCateName(e) {
        this.setState({ seleCategoryName: e.target.value, empCreateSuccess: '',
         noAddedEmpCate: '', empAddedStatus: '',})
        // console.log("category",this.state.seleCategoryName);
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
      onChangesetEmpCategory(e) {
        this.setState({ setEmpCategory: e.target.value, empAddedStatus: '', 
        noAddedEmpCate: '', empDelete: "hidden", empCreateSuccess: ''})
      }
    
      onSubmit(e) {
        e.preventDefault()
        const employeeObject = {
            employeeId: this.state.userId,
            seleCategoryName: this.state.seleCategoryName,
            employeedistrict: this.state.employeedistrict,
            employeeName: (this.state.name) ? (this.state.name) : (this.state.username),
            employeeContact: this.state.contact,
            employeeEmail: this.state.seleEmployeeEmail,
            employeeDescription: this.state.seleEmployeeDescription,
            employeeAvailable: this.state.seleEmployeeAvailable
        };
        if (this.state.addUpdateText === 'Add') {
            axios.post('http://localhost:4000/employees/create-employee', employeeObject)
            .then((res) => {
                console.log('Employee successfully Created', res.data);
                employeeObject['_id'] = res.data.id;
                const itemIndex = this.state.remainingCategories.findIndex(i=>
                    i === employeeObject.seleCategoryName);
                this.state.remainingCategories.splice(itemIndex, 1);
                this.state.sameCategoryEmployees.push(employeeObject);
                this.setState({empCreateSuccess: res.data.message, seleCategoryName: '', employeedistrict: '', seleEmployeeName: '',
                seleEmployeeContact: '', seleEmployeeEmail: ''
                , seleEmployeeDescription: '', seleEmployeeAvailable: ''});
            }).catch((error) => {
                console.log(error);
            })
        } else if (this.state.addUpdateText === 'Update') {
            employeeObject['_id'] = this.state.editUserId;
            axios.put('http://localhost:4000/employees/update-employee/' + this.state.editUserId, employeeObject)
            .then((res) => {
                console.log('Employee successfully Updated');
                if (this.state.empEditIndex !== -1) {
                    this.state.sameCategoryEmployees.splice(this.state.empEditIndex, 1, employeeObject);
                }
                this.setState({empCreateSuccess: res.data.message, seleCategoryName: '', employeedistrict: '', seleEmployeeName: '',
                seleEmployeeContact: '', seleEmployeeEmail: ''
                , seleEmployeeDescription: '', seleEmployeeAvailable: '', addUpdateText: 'Add', empDelete: "hidden", setEmpCategory: ''});
                // window.location.reload(false);
               
            }).catch((error) => {
                console.log(error);
            })
        }
        
      }
      updateDataAccess() {
        const empUpdateArray = this.state.sameCategoryEmployees.filter(i=>
            i.seleCategoryName === this.state.setEmpCategory);
        const indexOfArray = this.state.sameCategoryEmployees.findIndex(i=>
            i.seleCategoryName === this.state.setEmpCategory);
            // console.log("data", empUpdateArray);
        if (empUpdateArray.length !== 0) {
             this.setState({
                empEditIndex: indexOfArray,
                editUserId: empUpdateArray[0]._id,
                seleCategoryName: empUpdateArray[0].seleCategoryName,
                employeedistrict: empUpdateArray[0].employeedistrict,
                seleEmployeeEmail: empUpdateArray[0].employeeEmail,
                seleEmployeeDescription: empUpdateArray[0].employeeDescription,
                seleEmployeeAvailable: empUpdateArray[0].employeeAvailable,
                addUpdateText:'Update',
                noAddedEmpCate: '',
                empDelete: "visible",
                });
        } else {
            this.setState({empAddedStatus: 'Select a added category', noAddedEmpCate: ''})
        }
      }
    deleteEmployee() {
    axios.delete('http://localhost:4000/employees/delete-employee/' + this.state.editUserId)
        .then((res) => {
            console.log('Employee successfully deleted!');
            if (this.state.empEditIndex !== -1) {
                this.state.remainingCategories.push(this.state.setEmpCategory);
                this.state.sameCategoryEmployees.splice(this.state.empEditIndex, 1);
            }
            // window.location.reload(false);
            this.setState({empCreateSuccess: res.data.message, seleCategoryName: '', employeedistrict: '', seleEmployeeName: '',
                seleEmployeeContact: '', seleEmployeeEmail: ''
                , seleEmployeeDescription: '', seleEmployeeAvailable: '', addUpdateText: 'Add', empDelete: "hidden", setEmpCategory: ''});
        }).catch((error) => {
            console.log(error)
        })
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
            formData.append('Creator', (this.state.name)?(this.state.name):this.state.username);
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
            formData.append('Creator', (this.state.name)?(this.state.name):this.state.username);
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
                            <Navbar.Brand><h4>Employee Profile</h4></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Navbar.Text>
                                Manage Posts: <a href="/EmployeeProfile"><h5>Manage</h5></a>
                            </Navbar.Text>
                                &nbsp; &nbsp; &nbsp;
                            <FcAdvertising size = {40} />
                            {/* <NotificationBadge count={this.state.count} effect={Effect.SCALE}/>  */}
                            </Navbar.Collapse>
                        </Navbar>
                        
                        <Router> 
                        
                        <div className="wrapper">
                        <Switch>
                                <Route exact path='/' component={EmployeeProfile}/>
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
                            <Col> 
                                <h5>Employee Added Categories</h5>
                                <span style={{color: '#f01616', float: 'right'}}> {(this.state.empAddedStatus) ? this.state.empAddedStatus : null}</span>
                                <span style={{color: '#f01616', float: 'right'}}> {(this.state.noAddedEmpCate) ? this.state.noAddedEmpCate : null}</span>
                                <br/>
                                <Form onSubmit={this.onSubmit}>
                                <Form.Group as={Row} controlId="validationFormikUsername">
                                    <Form.Label column sm={4}>
                                    Category Name:  
                                    </Form.Label>
                                    <Col sm={8}>
                                    <Form.Control as="select" type="text" 
                                    value={this.state.setEmpCategory} onChange={this.onChangesetEmpCategory} required>
                                    <option value="">select the added category</option>
                                    {this.state.sameCategoryEmployees.map((category, key) => (
                                        <option key={key}>
                                        {category.seleCategoryName}
                                        </option>
                                    ))}
                                    </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Button onClick={this.updateDataAccess} className="float-right"
                                 variant="outline-info">To Update Category Details</Button>
                                </Form>     
                            </Col>
                            <br/><br/>
                            <Col> 
                                <h5>Add Employee to Category and Update</h5>
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
                                    {((this.state.addUpdateText === 'Add') ? (this.state.remainingCategories) : (this.state.categories)).map((category, key) => (
                                        <option key={key}>
                                        {(this.state.addUpdateText === 'Add') ? (category) : category.categoryname}
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
                                        <Button type="submit" variant="outline-info">{this.state.addUpdateText}</Button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <Button variant="outline-danger" onClick={this.deleteEmployee}
                                        style={{visibility: this.state.empDelete}}>Delete</Button>
                                        </Col>
                                    </Form.Group>
                                </Form>    
                                </Col>
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

export default EmployeeProfile;