import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import NavbarSkills from "./NavbarSkills";
import black from "../photoes/black.jpg";
import leftside from "../photoes/leftside.jpg";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onChangeUserConPassword = this.onChangeUserConPassword.bind(this);
    this.onChangeUserUsername = this.onChangeUserUsername.bind(this);
    this.onChangeUserAccType = this.onChangeUserAccType.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        signUpError: '',
        signUpEmail: '',
        signUpPassword: '',
        signUpConPassword: '',
        signUpUsername: '',
        signUpAccType: 'finder',
        isLoading: false,
        selectedOption: 'finder'
    }
}
  onChangeUserEmail(e) {
    this.setState({ signUpEmail: e.target.value })
  }
  onChangeUserPassword(e) {
    this.setState({ signUpPassword: e.target.value })
  }
  onChangeUserConPassword(e) {
    this.setState({ signUpConPassword: e.target.value })
  }
  onChangeUserUsername(e) {
    this.setState({ signUpUsername: e.target.value })
  }
  onChangeUserAccType(e) {
    this.setState({
      selectedOption: e.target.value,
      signUpAccType: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const { 
      signUpEmail,
      signUpPassword,
      signUpConPassword,
      signUpUsername,
      signUpAccType,
   } = this.state;
   this.setState({
     isLoading:true,
   });

   //post request to backends
   fetch('http://localhost:4000/signUp', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json'
     },
     body: JSON.stringify({
       username:signUpUsername,
       email:signUpEmail,
       password:signUpPassword,
       con_password:signUpConPassword,
       account_type:signUpAccType
     })
   }).then(res => res.json())
   .then(json => {
    if (json.success) {
      this.setState({
        signUpError:json.message,
        isLoading:false,
        signUpEmail: '',
        signUpPassword: '',
        con_password:'',
        signUpUsername: '',
        signUpConPassword: '',
        signUpAccType: '',
      })
      this.props.history.push('/signIn')
    } else {
      this.setState({
        signUpError:json.message,
        isLoading:false,
      })
    }
   })
  }
  render() {
    const { 
      signUpError,
      signUpEmail,
      signUpPassword,
      signUpUsername,
      signUpConPassword,
      isLoading
   } = this.state;
   if (isLoading) {
    return (<div><p>Loading...</p></div>);
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
              <br />
                <Card
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundImage: `url(${black})`,
                    color: "#fff",
                  }}
                  border="primary"
                >
                  <Col sm={9}>
                    <Form onSubmit={this.onSubmit}>
                      <br/>
                      <h3 className="text-center"> Sign Up</h3>
                      <br />
                      <div style={{color: '#f01616'}}> {(signUpError) ? (<p>{signUpError}</p>): null}</div><br/>
                      <Form.Group as={Row} controlId="validationFormikUsername">
                        <Form.Label column sm={4}>
                          Username
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control type="text" value={signUpUsername} 
                          onChange={this.onChangeUserUsername} placeholder="Userame" required/>
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formHorizontalEmail">
                        <Form.Label column sm={4}>
                          Email
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control type="email" value={signUpEmail} 
                          onChange={this.onChangeUserEmail} placeholder="Email" required />
                        </Col>
                      </Form.Group>

                      <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={4}>
                          Password
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control type="password" value={signUpPassword} 
                          onChange={this.onChangeUserPassword} placeholder="Password" required/>
                        </Col>
                      </Form.Group>
                      <Form.Group as={Row} controlId="formHorizontalPassword">
                        <Form.Label column sm={4}>
                          Confirm Password
                        </Form.Label>
                        <Col sm={8}>
                          <Form.Control type="password"value={signUpConPassword}
                          onChange={this.onChangeUserConPassword} placeholder="Confirm Password" required/>
                        </Col>
                      </Form.Group>
                      <fieldset>
                        <Form.Group as={Row}>
                          <Form.Label as="legend" column sm={4}>
                            Select Your Account
                          </Form.Label>

                          <Col sm={8} style={{ alignItems: "left" }}>
                            <div className="radio">
                              <label>
                                <input type="radio" value='finder'  checked={this.state.selectedOption === 'finder'}
                                              onChange={this.onChangeUserAccType} />
                                Finder Account
                              </label>
                            </div>
                            <div className="radio">
                              <label>
                                <input type="radio" value='employer'  checked={this.state.selectedOption === 'employer'}
                                              onChange={this.onChangeUserAccType} />
                                Employee Account
                              </label>
                            </div>
                          </Col>
                        </Form.Group>
                      </fieldset>

                      <Form.Group as={Row}>
                        <Col sm={{ span: 8, offset: 4 }}>
                          <Button type="submit">SignUp</Button>
                        </Col>
                      </Form.Group>
                      <Form.Group>
                        <Col sm={{ span: 10, offset: 4 }}>
                          <text>Already have an account</text>
                          &nbsp;
                          <Link to={"/SignIn"} className="signin-link">
                            SignIn
                          </Link>
                        </Col>
                      </Form.Group>
                    </Form>
                  </Col>
                </Card>
                <br />
              </Col>
        </Row>
      </div>
    );
   }
  }
}

export default SignUp;
