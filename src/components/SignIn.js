import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import {setInStorage} from "../utils/storage.js";
import Home from './Home';
import NavbarSkills from "./NavbarSkills";
import black from "../photoes/black.jpg";
import leftside from "../photoes/leftside.jpg";

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            signInError: '',
            signInEmail: '',
            signInPassword: '',
            isLoading: false,
            toHome: false,
        }
    }
    onChangeUserEmail(e) {
        this.setState({ signInEmail: e.target.value })
    }
    onChangeUserPassword(e) {
        this.setState({ signInPassword: e.target.value })
    }
    onSubmit(e) {
    e.preventDefault();
    const { 
      signInEmail,
      signInPassword,
    } = this.state;
    this.setState({
        isLoading:true,
    });

    //post request to backends
    fetch('http://localhost:4000/signIn', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        email:signInEmail,
        password:signInPassword,
        })
    }).then(res => res.json())
    .then(json => {
        if (json.success) {
        setInStorage('the_main_app', {token: json.token,userId: json.userId,
            account_type: json.accType})
        this.setState({
            signInError:json.message,
            isLoading:false,
            signInEmail: '',
            signInPassword: '',
            token:json.token,
            toHome: true,
        })
        //  this.props.history.push('/NavbarSkills')
        } else {
        this.setState({
            signInError:json.message,
            isLoading:false,
        })
        }
    })
    }
    render() {
        const { 
            signInEmail,
            signInPassword,
            signInError,
            isLoading,
            toHome,
         } = this.state;
        if (isLoading) {
        return (<div><p>Loading...</p></div>);
        } 
        if (toHome) {
            return (<div><Home/></div>);
        }
        if (!isLoading) {
            return (
                <div>
                    <NavbarSkills/>
                    <Row>
                        <Col sm={3} style={{background: '#f5f5f5', backgroundImage: `url(${leftside})`}}>
                            {/* <LeftSlider/> */}
                        </Col> 
                        <Col sm={9}>
                        <br/>
                        <Card style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundImage: `url(${black})`,
                                color: "#fff",
                                }} border="primary">       
                                <Col style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"}} >
                                    <Form onSubmit={this.onSubmit}>
                                    <br/>   
                                    <h3 className="text-center"> Sign In</h3><br/>
                                    <div style={{color: '#f01616'}}> {(signInError) ? (<p>{signInError}</p>): null}</div><br/>
                                        <Form.Group as={Row} controlId="validationFormikUsername">
                                            <Form.Label column sm={4}>
                                            Email  
                                            </Form.Label>
                                            <Col sm={8}>
                                            <Form.Control type="email" value={signInEmail} 
                                            onChange={this.onChangeUserEmail}  placeholder="email address" required/>
                                            </Col>
                                        </Form.Group>
                                            <Form.Group as={Row} controlId="formHorizontalPassword">
                                                    <Form.Label column sm={4}>
                                                    Password 
                                                    </Form.Label>
                                                    <Col sm={8}>
                                                    <Form.Control type="password" value={signInPassword} 
                                                    onChange={this.onChangeUserPassword} placeholder="Password" required/>
                                                    </Col>
                                                </Form.Group>
                                                <Col  sm={{ span:8, offset:6}}>
                                                    <Link className="forgotpassword-link">
                                                    Forgot Psssword?
                                                </Link>
                                                </Col>
                                            
                                                <Form.Group as={Row} controlId="formHorizontalCheck">
                                                    <Col sm={{ span: 10, offset: 4 }}>
                                                    <Form.Check label="Remember me" />
                                                    </Col>
                                                </Form.Group>

                                                <Form.Group as={Row}>
                                                
                                                    <Col sm={{ span:10, offset: 4 }}>
                                                    {/* <Link to={"/Home"}>
                                                    <Button type="submit">SignIn</Button>
                                                    </Link> */}
                                                    <Button type="submit">SignIn</Button>
                                                    </Col>
                                                    <br/>
                                                    <Col  sm={{ span:10, offset:4}}>
                                                    <text>Not a Sign Up User</text>
                                                    &nbsp;
                                                    <Link to={"/SignUp"} className="signup-link">
                                                    SignUp
                                                    </Link>
                                                    </Col>
                                                    </Form.Group>
                                            </Form>
                                        </Col>
                                    </Card>
                                <br/>
                            </Col>
                    </Row>
                </div>    
             );
        }
    }
}

export default SignIn;           
                                    
                        