import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class EmployeesTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteFinder = this.deleteFinder.bind(this);
    }

    deleteFinder() {
        axios.delete('http://localhost:4000/users/delete-user/' + this.props.obj._id)
            .then((res) => {
                console.log('Finder successfully deleted!');
                window.location.reload(false);
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.contact}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.account_type}</td>
                <td>{this.props.obj.address}</td>
                <td>
                    <Link className="edit-link">
                        Edit
                    </Link>
                    &nbsp;&nbsp;
                    <Button onClick={this.deleteFinder} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}