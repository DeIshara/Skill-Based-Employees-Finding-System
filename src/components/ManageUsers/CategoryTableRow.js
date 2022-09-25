import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class CategoryTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteCategory = this.deleteCategory.bind(this);
    }

    deleteCategory() {
        axios.delete('http://localhost:4000/categories/delete-category/' + this.props.obj._id)
            .then((res) => {
                console.log('Category successfully deleted!');
                window.location.reload(false);
            }).catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <tr>
                <td>{this.props.obj.categoryname}</td>
                <td>{this.props.obj.categorydescription}</td>
                <td>
                    <Link className="edit-link" to={"/categories/edit-category/" + this.props.obj._id}>
                        Edit
                    </Link>
                    &nbsp;&nbsp;
                    <Button onClick={this.deleteCategory} size="sm" variant="danger">Delete</Button>
                </td>
            </tr>
        );
    }
}

export default CategoryTableRow;