import axios from "axios";
import React from "react";
// import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import "./style.css";


const Home = () => {
  const [post, setpost] = useState("");
//   const{ id} = useParams()
  const getpost = ()=>{
    axios
      .get("http://localhost:5000/post" )
      .then((result) => {
        console.log(result.data.result);
        setpost(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

 useEffect(getpost, []);

  return (
    <div>
      {post.length && post.map((element, index)=>{
          return (
            <div key={index}>
                <h1>{element.post}</h1>
              
              <img src={`${element.img}`} /> 
            
            </div>
          );
        })}
    </div>
  );
};

export default Home;
