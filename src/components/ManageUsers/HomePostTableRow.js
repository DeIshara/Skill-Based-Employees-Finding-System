import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class HomePostTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteHomePost = this.deleteHomePost.bind(this);
    }

    deleteHomePost() {
        axios.delete('http://localhost:4000/homeposts/delete-post/' + this.props.obj._id)
            .then((res) => {
                console.log('Home post successfully deleted!');
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
                    <Button onClick={this.deleteHomePost} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}

export default HomePostTableRow;