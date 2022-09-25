import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class EmployeePostTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteEmployeePost = this.deleteEmployeePost.bind(this);
    }

    deleteEmployeePost() {
        axios.delete('http://localhost:4000/employeesposts/delete-post/' + this.props.obj._id)
            .then((res) => {
                console.log('Employee post successfully deleted!');
                window.location.reload(false);
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.Creator}</td>
                <td>{this.props.obj.Create_Admin}</td>
                <td>{this.props.obj.Description}</td>
                <td>
                    <Link className="edit-link">
                        Edit
                    </Link>
                    &nbsp;&nbsp;
                    <Button onClick={this.deleteEmployeePost} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}

export default EmployeePostTableRow;