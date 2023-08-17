import React from 'react'
import './Profile.css'
import { useNavigate } from 'react-router-dom';
function Profile() {
  const navigate=useNavigate()
  return (
    <div>
       
      <div class="cardse">
      <div class="cardP">
<div class="card_load"> <img src="https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863"  style={{borderRadius:"800px", width:"270px",height:"270px"}} /></div>
<div class="card_load_extreme_title"> Gadouur</div>
<h1 style={{marginLeft:"1050px",marginTop:"20px" ,fontFamily:"Arial"}} onClick={()=>{ navigate('/Card') }}>X</h1>
</div>
</div>
    </div>
  )
}

export default Profile
