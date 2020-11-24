import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class CreateEmployee extends Component {

    constructor(props) {
        super(props)
    
        // Setting up functions
        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
        this.onChangeEmployeeEmpID = this.onChangeEmployeeEmpID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        // Setting up state
        this.state = {
          name: '',
          email: '',
          empid: ''
        }
      }
    
      onChangeEmployeeName(e) {
        this.setState({name: e.target.value})
      }
    
      onChangeEmployeeEmail(e) {
        this.setState({email: e.target.value})
      }
    
      onChangeEmployeeEmpID(e) {
        this.setState({empid: e.target.value})
      }
    
      onSubmit(e) {
        e.preventDefault()
    
        // console.log(`Employee successfully created!`);
        // console.log(`Name: ${this.state.name}`);
        // console.log(`Email: ${this.state.email}`);
        // console.log(`EmpID: ${this.state.rollno}`);
    
        // this.setState({name: '', email: '', empid: ''})
        const employeeObject = {
          name: this.state.name,
          email: this.state.email,
          empid: this.state.empid
        };
        axios.post('http://localhost:4000/employees/create-employee', employeeObject)
          .then(res => console.log(res.data));
    
        this.setState({ name: '', email: '', empid: '' })
      }
    

  render() {
    return (
      <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={this.state.name} onChange={this.onChangeEmployeeName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={this.state.email} onChange={this.onChangeEmployeeEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>EmpID</Form.Label>
          <Form.Control type="text" value={this.state.empid} onChange={this.onChangeEmployeeEmpID} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Create Employee
        </Button>
      </Form>
    </div>);
    
  }
}
