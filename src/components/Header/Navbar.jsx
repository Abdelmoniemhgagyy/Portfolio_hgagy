import React, { useState } from 'react'
import {NavLink} from "react-router-dom"
import SwitchMood from "../SwithMood/SwithMood"
function Navbar() {
  const [list, setList] = useState(false);
  const screenWidth = window.innerWidth;
  return (
  <>
  <nav  style={list&&screenWidth< 590 ? { transform: "translate(0%, 0px)"}:null}>
        <ul className='navbar'>
          <li onClick={()=> setList(!list)}><NavLink to="/">Home</NavLink></li>
          <li onClick={()=> setList(!list)}><NavLink to="/skills">Skills</NavLink></li>
          <li onClick={()=> setList(!list)}><NavLink to="/educations">Educations</NavLink></li>
        </ul>
      
      </nav>

      <SwitchMood/>
  {list?<i class="bi bi-x-lg" onClick={()=> setList(!list)}></i>:<i class="bi bi-list" onClick={()=> setList(!list)}></i>}
  </> 

   
  )
}

export default Navbar