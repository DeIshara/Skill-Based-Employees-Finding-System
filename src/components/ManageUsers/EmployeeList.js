import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
class EmployeeList extends Component {
    render() {
        return (
            <div className="table-wrapper">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>EmpID</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.DataTable()}
                    </tbody>
                </Table>
            </div>
  

        );
    }
}

export default EmployeeList;