import React from 'react'
import "./Projects.css"

function Projects({dataSelection}) {

  return (
    <>
    

      {dataSelection.map((item)=>
      <div className="project-content" key={item.id} data-aos="fade-up">

      <img src={item.image} alt="" />
      
      <div className="project-info">
      <h2 >{item.title}</h2>
      <p><i class="bi bi-caret-right-fill"></i>{item.description}</p>

      <ul>
      {item.used.map((ele => <li>#{ele}</li>))}
      </ul>

      <div className="project_links">
          <div className="project_link">
            <a href={item.url_live} target= "_blank" ><i class="bi bi-globe"></i><span>Live Site</span></a>  
          </div>
          <div className="project_link">
            <a href={item.url_repo} target= "_blank"><i class="bi bi-github"></i><span>Client Side</span></a>
          </div>
        </div>


      </div>

     
      
      </div>)}

  

    

   
    </>
  )
}

export default Projects