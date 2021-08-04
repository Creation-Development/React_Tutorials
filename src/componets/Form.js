import React from 'react'

export const Form = () => {
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
                <button type="submit" onClick={e=>show(e)} className="btn btn-success w-100 my-4">Submit</button>
            </form>
        </div>
    )
}
var details = []
var data = {}


var show = (e) => {
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
    data.name = fullname
    data.email = email
    data.phone = phone
    data.password = pass
    details.push(data)
    console.log(details);
}
}