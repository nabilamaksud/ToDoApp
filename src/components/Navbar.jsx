import {NavLink} from "react-router-dom"
import "./Navbar.css"

export
 const Navbar=()=>{
return(
<nav className="navBar">
    <div className="icon">
        <h1>ToDo</h1>
    </div>
    <div className="links">
        <NavLink className="nav__Item" to="/">Home</NavLink>
        <NavLink className="nav__Item" to="/todos">MyTodo</NavLink>
        <NavLink className="nav__Item" to="/about">About</NavLink>
    </div>
</nav>)
}
export default Navbar