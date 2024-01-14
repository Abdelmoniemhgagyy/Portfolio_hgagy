import "./App.css"
import Home from './components/Home/Home'
import Skills from './components/skills/Skills'
import Education from "./components/education/Education"

import Header from "./components/Header/Header.jsx"
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  
  return (
    <BrowserRouter>
    <div  className="App">
      <Header/>
          <Routes>
            <Route path="/" element={<Home/>} exact/>
            <Route path="/skills" element={<Skills/>}/>
            <Route path="/educations" element={<Education/>}/>
          </Routes>
    </div>
    </BrowserRouter> 
  )
}

export default App









