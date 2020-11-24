import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class EmployeesTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }

    deleteEmployee() {
        axios.delete('http://localhost:4000/employees/delete-employee/' + this.props.obj._id)
            .then((res) => {
                console.log('Employee successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.empid}</td>
                <td>
                    <Link className="edit-link" to={"/edit-employee/" + this.props.obj._id}>
                        Edit
                    </Link>
                    &nbsp;&nbsp;
                    <Button onClick={this.deleteEmployee} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}