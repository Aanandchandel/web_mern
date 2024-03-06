import "./Nav.css"
import { useNavigate } from "react-router-dom"
import React from "react"
import {Link} from "react-router-dom"
const Nav=()=>{
    const navigate=useNavigate();
    const auth=localStorage.getItem("user");

    const logOut=()=>{
        localStorage.clear();
        navigate("./Login")
    }

    return(
        <div id="nav">
<ul>


<li><Link className="nav-link" to="/">HOME </Link></li>
<li><Link className="nav-link"to="/add">Add Products </Link></li>
<li><Link className="nav-link"to="/products">Products </Link></li>
<li><Link className="nav-link"to="/update">Update Products </Link></li>
<li><Link className="nav-link"to="/Profile">Profile</Link></li>
<li>{auth?<Link className="nav-link"to="/Login" onClick={logOut}>LogOut</Link>:
<Link className="nav-link"to="/Login">Login</Link>
    
}</li>


</ul>

        </div>
    )
}
export default Nav;