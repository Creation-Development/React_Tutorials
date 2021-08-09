import React, { useState } from 'react'

const FunctionState = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [pass , setPass] = useState("")
    const [phone , setPhone] = useState("")
    return (
        <>
            <div>
                <div className="text-center">
                    <h1 className="text-center my-4">Function State Form</h1>
                </div>
                <form className="container-sm my-4">
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
                    <button type="submit" onClick={(e) => show(e, name,email,pass,phone)} className="btn btn-success w-100 my-4">Submit</button>
                </form>
            </div>
        </>
    )
}

export default FunctionState;

function show(e,name,email,pass,phone){
    e.preventDefault()
    console.log(`Name : ${name}`);
    console.log(`E-Mail : ${email}`);
    console.log(`Phone : ${phone}`);
    console.log(`Password : ${[pass]}`);
}
