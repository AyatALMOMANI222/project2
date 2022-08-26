import axios from "axios";
import {Home} from "../home"
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useSelector , useDispatch } from "react-redux/es/exports";
import { loginAction  } from "../../redux/reducers/auth";
import "./style.css";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
const navegate = useNavigate()


  const login = () => {
    console.log({email , password});
    axios.post("http://localhost:5000/login" , {
        email , password
    }).then((result)=>{
      if(result.data.success==true){
dispatch(loginAction(result.data.token))
        navegate('/Home')
      }
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    })
  };
  return (
    <div>
      <input
        placeholder="Email"
        onChange={(e) => {
          setemail(e.target.value);
        }}
      />

      <input
        placeholder="Password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
};
export default Login;
