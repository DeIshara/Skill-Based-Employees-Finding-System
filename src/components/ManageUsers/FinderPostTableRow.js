import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class FinderPostTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteFinderPost = this.deleteFinderPost.bind(this);
    }

    deleteFinderPost() {
        axios.delete('http://localhost:4000/finderposts/delete-post/' + this.props.obj._id)
            .then((res) => {
                console.log('Finder post successfully deleted!');
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
                    <Button onClick={this.deleteFinderPost} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}

export default FinderPostTableRow;