
import { useState } from "react";
function Nav() {

  const[mainColor,setMainColor]=useState("white")

  return (
    <>
<div className=' w-screen h-screen' style={{backgroundColor:mainColor}}> 
        {/* //////Y////// */}
        <nav className='fixed top-[70px] right-2 md:right-4'>
          <div className='flex flex-col bg-blue-900 px-1 py-4 rounded-full text-sm text-white text-center'>
          <a to="/" className='p-2  hover:scale-[1.15] transition duration-150 ' >
            Projects
           </a>
          <a to="/skills" className='p-2  hover:scale-[1.15] transition duration-200'>
              Skills
           </a>
          <a to="/educations" className='p-2  hover:scale-[1.15] transition duration-150'>
              Educations
           </a>
          </div>
        </nav>
      </div>

      {/* /////// colors ///////////////// */}
      <nav className='fixed bottom-3 left-4 md:left-4'>
          <div className='flex  bg-blue-900 p-2 rounded-full text-2xl '>
          <div  title="home" className='p-2  hover:scale-[1.15] transition duration-150 ' onClick={()=>setMainColor("#fca5a5")} >
              <p className="w-[20px] h-[20px] bg-red-300 rounded-full"></p>
           </div>
          <div  title="home" className='p-2  hover:scale-[1.15] transition duration-150 '  onClick={()=>setMainColor("#3b82f680")}>
              <p className="w-[20px] h-[20px] bg-blue-300 rounded-full"></p>
           </div>
          <div  title="home" className='p-2  hover:scale-[1.15] transition duration-150 ' onClick={()=>setMainColor("#86efac")} >
              <p className="w-[20px] h-[20px] bg-green-300 rounded-full"></p>
           </div>
          <div  title="home" className='p-2  hover:scale-[1.15] transition duration-150 '  onClick={()=>setMainColor("rgba(255, 230, 34)")}>
              <p className="w-[20px] h-[20px] bg-yellow-300 rounded-full"></p>
           </div>
         
        {console.log(mainColor)}
          </div>
        </nav>



    </>


  )
}

export default Nav