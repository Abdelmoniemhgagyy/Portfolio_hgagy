import React from 'react'
import "./Skills.css"
import data from "../../data/skills"
function Skills() {
  return (
    <div className='skills-container'>
      <div className="skills">
        {data.map((item)=> 
          <div key={item.id} className='skill' data-aos="fade-right">
            <img src={item.image} alt={item.name} />
            {item.name}
          </div>
         )}
      </div>
      
    </div>
  )
}

export default Skills