import React from 'react';
import axios from 'axios';
import './createpost.css';
import { useNavigate, useParams }  from 'react-router-dom';
function UpdatePost() {
    const[title,setTitle]=useState('')
const[image,setImage]=useState('')
const[desc,setDesc]=useState('')
const {id}=useParams()
    const navigate=useNavigate
    axios.put('http://localhost:5471/update/'+id,{title , image, desc}).then((res)=>{
        console.log(res)
       navigate('/Card')
    }).catch((err)=>{
        console.log(err)
    })
  return (
    
         <div style={{width:"500px",height:"800px",backgroundColor:"black"}}>
            heey
            </div>
  )
}

export default UpdatePost;
