import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditEmployee extends Component {

  constructor(props) {
    super(props)

    this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
    this.onChangeEmployeeEmail = this.onChangeEmployeeEmail.bind(this);
    this.onChangeEmployeeEmpID = this.onChangeEmployeeEmpID.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      name: '',
      email: '',
      empid: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/employees/edit-employee/' + this.props.match.params.id)
      .then(res => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  onChangeEmployeeName(e) {
    this.setState({ name: e.target.value })
  }

  onChangeEmployeeEmail(e) {
    this.setState({ email: e.target.value })
  }

  onChangeEmployeeEmpID(e) {
    this.setState({ empid: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const EmployeeObject = {
      name: this.state.name,
      email: this.state.email,
      empid: this.state.empid
    };

    axios.put('http://localhost:4000/employees/update-employee/' + this.props.match.params.id, EmployeeObject)
      .then((res) => {
        console.log(res.data)
        console.log('Employee successfully updated')
      }).catch((error) => {
        console.log(error)
      })

    // Redirect to employee List 
    this.props.history.push('/employees-list')
  }


  render() {
    return (<div className="form-wrapper">
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
          Update employee
        </Button>
      </Form>
    </div>);
  }
}