import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return(
            <div className="header margin-style">
                <nav>
                    <ul className="nav nav-pills">
                        <li className="strong-style"><NavLink to="/">React Router Demo</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;