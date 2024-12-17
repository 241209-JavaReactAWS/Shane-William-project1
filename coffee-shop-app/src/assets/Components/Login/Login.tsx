
import './Login.css'
function Login() {

  return (
    <body id='adasdsada'>
    
<div className="container min-vh-100 d-flex justify-content-center align-items-center new_font col-md-6">
    <form className="mochaa form-control-lg form-control-sm">
        <h1> Log in </h1>
        <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
        <br/>
        <button type="submit" className="btn moch new_font">Log in</button>
        </div>
    </form>
</div>
</body>
  )
}

export default Login

