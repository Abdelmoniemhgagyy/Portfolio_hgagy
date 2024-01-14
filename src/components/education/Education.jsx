import "./Education.css"
import MapDateArray from "./MapDataArray"
import {objectives,education,experiences} from "../../data/data"
function Education() {
  return (
    <div className='education-container'>
    
    <MapDateArray title="objectives" data={objectives}/>
    <MapDateArray title="educations" data={education}/>
    <MapDateArray title="experiences" data={experiences}/>

    <div className="cources" data-aos="fade-right">
      <h3>cources</h3>
      <p data-aos="fade-up">React with Unique Coderz Academy & Simple Arab Code & Youssef Abbas</p>
      <p data-aos="fade-up">Redux with Kimzcode</p>
      <p data-aos="fade-up">React Material UI</p>
      <p data-aos="fade-up">Python with Rekwan & Abdelrhman gmall (2022-2023)</p>
      <p data-aos="fade-up">Front End with Elzero Web School (May 2023)</p>
      <p data-aos="fade-up">C with Udmey</p>
      <p data-aos="fade-up">C++</p>
      <p data-aos="fade-up">Cmd with Elzero Web School</p>
      <p data-aos="fade-up">Eduvate Distribution course "3rd best member & best team" (July 2022)</p>
      <p data-aos="fade-up">Programmable logic controllers "PLC" with Abdul Rahman Hashish (2021)</p>
      <p data-aos="fade-up">Classic control with Go ahead</p>
      <p data-aos="fade-up">Solar Energy with Solar all energy & Ahmed Abu Tayeb</p>
      <p data-aos="fade-up">Excel with Go ahead</p>
      <p data-aos="">Light Current with Udmey</p>
    </div>


    </div>
  )
}

export default Education