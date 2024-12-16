

import './Header.css'
import { Component } from 'react';
export class Header extends Component {
  render() {
    return (
                  <nav className="navbar navbar-expand-lg mocha">
            <div className="container-fluid new_font">
                <a className="navbar-brand" href="index2.html">Brew and Bean Café</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="index2.html">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="login2.html">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="usercreation1.html">Create Your Account</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="menu.html">Menu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="coffeecreation1.html">Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav> 
  

    )
  }
}

export default Header
