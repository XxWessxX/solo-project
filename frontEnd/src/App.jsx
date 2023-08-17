import React from 'react'
// import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './Home';
import Card from './Card';
import Profile from './Profile';
import {BrowserRouter ,Routes , Route} from 'react-router-dom'
import CreatePost from './CreatePost';
import UpdatePost from './UpdatePost';
function App() {
  return (
<div>
  <BrowserRouter>
  <Home />
 <Routes>
  <Route path='/Card' element={<Card />}></Route>
  <Route path='/Profile' element={<Profile />}></Route>
  <Route path='/Create' element={<CreatePost />}></Route>
  <Route path='/Update' element={<UpdatePost />}></Route>
  

 </Routes>
  </BrowserRouter>
</div>
  )
}

export default App
