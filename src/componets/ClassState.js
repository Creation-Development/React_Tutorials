import React, { Component } from 'react'

export default class ClassState extends Component {
    constructor(){
        super()
        this.state = {
            name :"",
            email:"",
            phone:"",
            pass:""
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
                        <button type="submit" onClick={(e)=> show(e,this.state)} className="btn btn-success w-100 my-4">Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

function show(e,data) {
    e.preventDefault()
    console.log(data);
}
