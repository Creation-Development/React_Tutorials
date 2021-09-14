import React, { Component } from 'react'
import Input from './Input'

export class ClassForm extends Component {
    state = {name:'',email:"",pass:"",phone:""}
    user = []
    render() {
        return (
            <div>
                <div className="text-center">
                    <h1 className="text-center my-4">Class Component Form</h1>
                </div>
                <form className="container-sm my-4">
                    <Input type="text" state={this.state} field="name" fieldname="Full Name"/>
                    <Input type="email" state={this.state} field="email" fieldname="E-Mail"/>
                    <Input type="number" state={this.state} field="phone" fieldname="Mobile Number"/>
                    <Input type="password" state={this.state} field="pass" fieldname="Password"/>
                    <button type="submit" onClick={(e) => validation(e, this.state,this.user)} className="btn btn-success w-100 my-4">Submit</button>
                </form>
            </div>
        )
    }
}

var validation = (e, data,user) => {
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
        show(e, data,user)
        user.push(data)
    }
}

function show(e, data,user) {
    e.preventDefault()
    console.log(user);
    alert("check the console for output..")
}

export default ClassForm
