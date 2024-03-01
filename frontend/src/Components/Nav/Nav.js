import "./Nav.css"
import React from "react"
import {Link} from "react-router-dom"
const Nav=()=>{
    return(
        <div id="nav">
<ul>
<li><Link className="nav-link" to="/">HOME </Link></li>
<li><Link className="nav-link"to="/add">Add Products </Link></li>
<li><Link className="nav-link"to="/update">Update Products </Link></li>
<li><Link className="nav-link"to="/Profile">Profile</Link></li>
<li><Link className="nav-link"to="/Login">Login</Link></li>

</ul>

        </div>
    )
}
export default Nav;