/* eslint-disable react/jsx-key */
import "./Projects.css"

// eslint-disable-next-line react/prop-types
function Projects({dataSelection}) {

  const newLocal = "_blank"
  return (
    <>
    

      {dataSelection.map((item)=>
      <div className="project-content" key={item.id} data-aos="fade-up">

      <img src={item.image} alt="" />
      
      <div className="project-info">
      <h2 >{item.title}</h2>
      <p><i className="bi bi-caret-right-fill"></i>{item.description}</p>

      <ul>
      {item.used.map((ele => <li># {ele}</li>))}
      </ul>

      <div className="project_links">
          <div className="project_link">
            <a href={item.url_live} target= {newLocal} rel="noreferrer" ><i className="bi bi-globe"></i><span>Live Site</span></a>  
          </div>
          <div className="project_link">
            <a href={item.url_repo} target= "_blank" rel="noreferrer"><i className="bi bi-github"></i><span>Client Side</span></a>
          </div>
        </div>
      </div>

      </div>)}
   
    </>
  )
}

export default Projects