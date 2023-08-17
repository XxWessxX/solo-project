

import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';



import './App.css';

function Card() {
    const[data,setData]=useState([])
    const [trigger,setTrigger] = useState(false)
    useEffect(() => {
    axios.get('http://localhost:5471/').then((res)=>{
        setData(res.data)
     })
    .catch((err) =>{ 
          console.log(err)
        })
      },[trigger])

const handleDelete= ( id ) => {
 axios.delete(`http://localhost:5471/posts/${id}`).then((result)=>{
  console.log(result);
  setTrigger(!trigger)
 }).catch(err=>console.log(err))


}


  return (
        <div>  
     {data.map((el,i)=>{ 

      return (
<div key={i}>
         <div>
         
    <div class="card" >
  

<div class="card-image"><img style={ {width:"100%",height:"530px"}} src={el.ImageUrl}/></div>
<div class="category">{el.Title}</div>
<div className='size'>
<div class="heading">{el.Description}</div>
</div>
<br />
<Link to={`Update/${el.idposts}`} class="btn2" >UPDATE</Link>
<a class="btn3" onClick={(e)=>{
  console.log(e);
  handleDelete(el.idposts)}}>DELETE</a>
<br />
<br />
</div>
</div>
</div>
 ) })}
 </div>
)}

export default Card
