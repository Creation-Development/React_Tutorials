import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

const FunctionState = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [phone, setPhone] = useState("")
    return (
        <>
            <div>
                <div className="text-center">
                    <h1 className="text-center my-4">Function State Form</h1>
                </div>
                <form className="container-sm my-4" onSubmit={(e) => validation(e, name, email, pass, phone)}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} id="name" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-Mail Address</label>
                        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} id="email" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Mobile Number</label>
                        <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)} id="phone" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pass" className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={(e) => setPass(e.target.value)} id="pass" />
                    </div>
                    <button type="submit" onClick={(e) => validation(e, name, email, pass, phone)} className="btn btn-success w-100 my-4">Submit</button>
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
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{phone}</td>
                            <td>{pass}</td>
                        </tr>
                    </tbody>
                </Table>
        </>
    )
}

export default FunctionState;


var validation = (e, name, email, pass, phone) => {
    e.preventDefault()
    if (name.length <= 2) {
        alert("name is too short...!!")
    }
    else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        alert("email is not valid...!!")
    }
    else if(!phone.match(/[0-9]{10}/) ){
        alert("mobile number is invalid")
    }
    else if (pass.length <= 8) {
        alert("Password is too short....!!")
    }
    else{
        show(e,name,email,pass,phone)
    }
}

function show(e, name, email, pass, phone) {
    e.preventDefault()
    console.log(`Name : ${name}`);
    console.log(`E-Mail : ${email}`);
    console.log(`Phone : ${phone}`);
    console.log(`Password : ${[pass]}`);
    alert("check the console for output..")
}
