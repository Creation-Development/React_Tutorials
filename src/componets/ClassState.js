import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

export default class ClassState extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            pass: ""
        }
    }
    render() {
        return (
            <>
                <div>
                    <div className="text-center">
                        <h1 className="text-center my-4">Class State Form</h1>
                    </div>
                    <form className="container-sm my-4">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" onChange={(e) => this.setState({ name: e.target.value })} id="name" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">E-Mail Address</label>
                            <input type="email" className="form-control" onChange={(e) => this.setState({ email: e.target.value })} id="email" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Mobile Number</label>
                            <input type="number" className="form-control" onChange={(e) => this.setState({ phone: e.target.value })} id="phone" aria-describedby="emailHelp" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass" className="form-label">Password</label>
                            <input type="password" className="form-control" onChange={(e) => this.setState({ pass: e.target.value })} id="pass" />
                        </div>
                        <button type="submit" onClick={(e) => validation(e, this.state)} className="btn btn-success w-100 my-4">Submit</button>
                    </form>
                </div>
                <Table className="container my-4 text-center" striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>E-Mail</th>
                            <th>Mobile Number</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{this.state.name}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.phone}</td>
                            <td>{this.state.pass}</td>
                        </tr>
                    </tbody>
                </Table>
            </>
        )
    }
}

var validation = (e, data) => {
    e.preventDefault()
    if (data.name.length <= 2) {
        alert("name is too short...!!")
    }
    else if (!data.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        alert("email is not valid...!!")
    }
    else if (!data.phone.match(/[0-9]{10}/)) {
        alert("mobile number is invalid")
    }
    else if (data.pass.length <= 8) {
        alert("Password is too short....!!")
    }
    else {
        show(e, data)
    }
}

function show(e, data) {
    e.preventDefault()
    console.log(`Name : ${data.name}`);
    console.log(`E-Mail : ${data.email}`);
    console.log(`Phone : ${data.phone}`);
    console.log(`Password : ${data.pass}`);
    alert("check the console for output..")
}
