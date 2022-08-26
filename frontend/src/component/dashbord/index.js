import React from "react"
import { Routes,Route, Link} from 'react-router-dom'
import Personal from "../Personal"
import Home from "../home"
import Friend from "../friend"
import Login from "../login"
import Register from "../Register"
import Users from "../allUser"
import "./style.css"
const Dashbord=()=>{


    return <div className="l">
 {/* <Link to="/category/man">man</Link> */}
 <Link to="/register">Register</Link>
 <Link to ="/login">Login</Link>
 <Link to="/home">Home</Link>
 <Link to="/personal">Personal Page</Link>
 <Link to="/friend">Friends</Link>
 <Link to ="/user">All Users</Link>

 <Routes>

 {/* <Route path="/product" element={<Product/>}/>; */}
<Route path="/home" element={<Home/>}/>
{/* <Route path="/personal" element={<Personal/>}/> */}
<Route path="/personal" element={<Personal/>}/>
<Route path="/friend" element={<Friend/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/user"  element={<Users/>}/>
 </Routes>
    </div>
}

export default Dashbord