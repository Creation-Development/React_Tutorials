import React, { useState } from 'react'

export const Form = () => {
    const [flag, setFlag] = useState("false")
    return (
        <div>
            <div className="text-center">
                <h1 className="text-center my-4">Registeration Form</h1>
            </div>
            <form className="container-sm my-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-Mail Address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Mobile Number</label>
                    <input type="number" className="form-control" id="phone" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pass" className="form-label">Password</label>
                    <input type="password" className="form-control" id="pass"/>
                </div>
                <button type="submit" onClick={e=>show(e,setFlag)} className="btn btn-success w-100 my-4">Submit</button>
            </form>

            {
                flag === "true"?
                <>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="row">{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                            </tr>
                        </tbody>
                    </table>
                </>
                :
                <h1 className="text-center text-danger">No Data To Display</h1>
            }
        </div>
    )
}
var details = []
var data = {}


var show = (e,setFlag) => {
    e.preventDefault();
    var fullname = document.getElementById('name').value
    var email = document.getElementById('email').value
    var phone = document.getElementById('phone').value
    var pass = document.getElementById('pass').value
    if(fullname === ''  ||fullname === null){
        alert("Fields can't be empty....")
    }
    else if(email === '' || email === null){
        alert("Fields can't be empty....")
    }
    else if(phone === '' || phone === null){
        alert("Fields can't be empty....")
    }
    else if(pass === '' || pass === null){
        alert("Fields can't be empty....")
    }
    else{
        setFlag('true')
        data.name = fullname
        data.email = email
        data.phone = phone
        data.password = pass
        details.push(data)
        console.log(details);
    }
}