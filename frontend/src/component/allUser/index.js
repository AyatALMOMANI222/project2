import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
const Users = () => {
    const{token , isLoggedIn} = useSelector((state) => {
        return {
          token: state.auth.token,
          isLoggedIn: state.auth.isLoggedIn,
        };
      });
  const [all, setall] = useState([]);
  const user = () => {
    axios
      .get("http://localhost:5000/user/us")
      .then((result) => {
        console.log(result.data.result);
        setall(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

const  addFreind =(friendId)=>{
axios.post("http://localhost:5000/friend" , {friendId},  {
    headers: { authorization: `Bearer ${token}` }}
  ).then((result)=>{
    console.log({result});
  }).catch((err)=>{
    console.log({err});
  })

}







  useEffect(user, []);
  return (
    <div>
      <h1>hellllo</h1>
      {all.length &&
        all.map((element, index) => {
          return (
            <div>
              <h1>{element.firstName}</h1>
              <button onClick={()=>{
                addFreind(element._id)
              }}>add frenid</button>
            </div>
          );
        })}
    </div>
  );
};
export default Users;
