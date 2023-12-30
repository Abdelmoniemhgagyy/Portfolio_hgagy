import React from 'react'
import "./Home.css"
import Projects from "../Projects/Projects"
import data from "../../data/projects"
import { useState } from 'react'
function Home() {
   const [selectValue,setSelectValue]=useState("all")

    const dataSelection =
    selectValue === "all"
      ? data
      : selectValue === "react"
      ? data.filter((item) => item.used.includes("react"))
      : selectValue === "js"
      ? data.filter((item) => item.used.includes("Js"))
      : selectValue === "html"
      ? data.filter((item) => item.used.includes("Html") && !item.used.includes("Js"))
      : selectValue === "bootstrap"
      ? data.filter((item) => item.used.includes("Bootstrap" ))
      : selectValue === "tailwind"
      ? data.filter((item) => item.used.includes("tailwind" ))
      : null;
    


console.log(dataSelection)
  return (
    <div className='home-container' onChange={(e)=>setSelectValue(e.target.value)}>

{/* ({dataSelection.length}) */}

      <select >
        
        <option value="all">All Projects </option>
        <option value="react">React</option>
        <option value="js">Js</option>
        <option value="bootstrap">Bootstrap</option>
        <option value="tailwind">Tailwind</option>
        <option value="html">Html&Css</option>
      </select>
      <Projects  dataSelection={dataSelection} />

    </div>
  )
}

export default Home