import { useState } from 'react'
import {NavLink} from "react-router-dom"
import SwitchMood from "../SwithMood/SwithMood"
function Navbar() {
  const [list, setList] = useState(false);
  const screenWidth = window.innerWidth;
  return (
  <>
{/* top navbar  */}
  <nav  style={list&&screenWidth< 590 ? { transform: "translate(0%, 0px)"}:null}>
        <ul className='navbar'>
          <li onClick={()=> setList(!list)}><NavLink to="/">Home</NavLink></li>
          <li onClick={()=> setList(!list)}><NavLink to="/skills">Skills</NavLink></li>
          <li onClick={()=> setList(!list)}><NavLink to="/educations">Educations</NavLink></li>
        </ul>
      
  </nav>
  {/* End top navbar  */}
  
  <SwitchMood/>

  {list?<i className="bi bi-x-lg" onClick={()=> setList(!list)}></i>:<i className="bi bi-list " onClick={()=> setList(!list)}></i>}



{/* right nav  */}
 <nav className='fixed left-[50%] transform translate-x-[-50%]   top-[320px] sm:top-[320px] md:top-[330px] '>
          <div className='flex space-x-2 bg-[#511be7] text-xl px-6 rounded-full text-white text-center'>
          <NavLink to="/" className='p-1 hover:scale-[1.15] transition duration-150 text-white' >
          <i className="bi bi-cast hover:text-green-400"></i>
           </NavLink>
          <NavLink to="/skills" className='p-1  hover:scale-[1.15] transition duration-200 text-white'>
          <i className="bi bi-stars hover:text-green-400"></i>
           </NavLink>
          <NavLink to="/educations" className='p-1  hover:scale-[1.15] transition duration-150 text-white'>
          <i className="bi bi-duffle hover:text-green-400"></i>
           </NavLink>
          </div>
  </nav>
 {/*End right nav  */}
 
 </> 

   
  )
}

export default Navbar