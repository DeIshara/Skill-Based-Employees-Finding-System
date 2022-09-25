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
                console.log('Employee successfully deleted!');
                window.location.reload(false);
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.employeeName}</td>
                <td>{this.props.obj.employeedistrict}</td>
                <td>{this.props.obj.employeeContact}</td>
                <td>{this.props.obj.employeeEmail}</td>
                <td>{this.props.obj.employeeDescription}</td>
                <td>{this.props.obj.employeeAvailable}</td>
                <td>{this.props.obj.seleCategoryName}</td>
                <td>
                    <Link className="edit-link" to={"/employees/edit-employee/" + this.props.obj._id}>
                        Edit
                    </Link>
                    &nbsp;&nbsp;
                    <Button onClick={this.deleteEmployee} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}