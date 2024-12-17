import React from 'react'
import './User-Creation.css'
function UserCreation() {
  return (
    <body >
    
<div className="container min-vh-100 d-flex justify-content-center align-items-center new_font col-md-6">
    <form className="mochaa form-control-lg form-control-sm">
        <h1> Create Your Account </h1>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn moch new_font">Create Account</button>
    </form>
</div>

</body>
  )
}

export default UserCreation
