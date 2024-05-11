import "./Education.css"
import MapDateArray from "./MapDataArray"
import {objectives,education,experiences, cources} from "../../data/data"
function Education() {
  return (
    <div className='education-container'>
    
    <MapDateArray title="objectives" data={objectives}/>
    <MapDateArray title="educations" data={education}/>
    <MapDateArray title="experiences" data={experiences}/>
    <MapDateArray title="cources" data={cources}/>
    <h5 className="mt-2 h-[40px]"></h5>

    </div>
  )
}

export default Education