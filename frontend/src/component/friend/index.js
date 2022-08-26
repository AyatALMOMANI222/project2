import React from "react"
import axios from "axios"
import { useState , useEffect} from "react"

const Friend =()=>{
const [frien,setfrien] = useState([])


const friend =()=>{

axios.get("http://localhost:5000/friend/").then((result)=>{
console.log(result.data.result);
setfrien(result.data.result)
}).catch((err)=>{
    console.log(err);
})
}





useEffect(friend,[])
return(
<div>
{
frien.length && frien.map((index,element)=>{
    return(
<div>

</div>
    )
})

}
</div>
)
}
export default Friend