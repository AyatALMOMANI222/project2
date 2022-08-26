import axios from "axios"
import { useState } from "react"
import Login from "../login"

import {useNavigate} from "react-router-dom"
import "./style.css"
const Register =()=>{
const [firstName,setfirstname]=useState("")
const [lastName,setlastname]=useState("")
const [age,setage]=useState("")
const [country,setcountry]=useState("")

const [email,setemail]=useState("")
const [password,setpassword]=useState("")
const [sex,setsex]=useState("")
const [role,setrole]=useState("") 
const [education,seteducation]=useState("")

const navegate=useNavigate()



const register =()=>{
axios.post("http://localhost:5000/user" , {
    firstName,
    lastName,
    age,
    country,
    email,
    password,
    sex,
    role,
    education
},{}).then((result)=>{
    console.log(result);
    
    // navegate('/Login')
}).catch((err)=>{
    console.log(err);
})

}


return(
<div className="lo">

<input placeholder="firstname" onChange={(e)=>{
    setfirstname(e.target.value)
}}/>
<input placeholder="lastname" onChange={(e)=>{
    setlastname(e.target.value)
}}/>
<input placeholder="email" onChange={(e)=>{
    setemail(e.target.value)
}}/>
<input placeholder="password" onChange={(e)=>{
    setpassword(e.target.value)
}}/>
<input placeholder="age" onChange={(e)=>{
    setage(e.target.value)
}}/>
<input placeholder="country" onChange={(e)=>{
    setcountry(e.target.value)
}}/>
<button onClick={()=>{
    register()
}}>Register</button>


</div>
)
}

export default Register