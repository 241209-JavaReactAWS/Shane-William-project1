

import { Link } from 'react-router-dom';
import './Header.css'
import { Component } from 'react';
export class Header extends Component {
  render() {
    return (
             <nav className="navbar navbar-expand-lg mocha">
            <div className="container-fluid new_font">
                <a className="navbar-brand"><Link to ="/" className = "nav-link new_font">Brew and Bean Café</Link></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page">
                            <Link to="/" className = "nav-link new_font">Home</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/login" className = "nav-link new_font">Login</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/createaccount" className = "nav-link new_font">Create Your Account</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/menu" className = "nav-link new_font">Menu</Link></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><Link to="/admin" className = "nav-link new_font">Admin</Link></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
  

    )
  }
}

export default Header
