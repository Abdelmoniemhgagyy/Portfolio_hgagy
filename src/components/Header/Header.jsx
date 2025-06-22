import { useEffect } from 'react'
import Navbar from './Navbar'
import "./Header.css"
import logo from "../../assest/logo.png"

import PersonalImg from "../../assest/me.png"
import Aos from "aos"
import "aos/dist/aos.css"
function Header() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div className='header'>


<div className="top_header " data-aos="fade-down">
          <div className="logo"><img src={logo}/><span className='h-full mt-[17px]'>Abdelmoniem</span>
          
          </div>
          <Navbar/>
      </div>
      <div className="bottom_header">
        <div className="img-me" data-aos="fade-left">
        <img src={PersonalImg} alt="my photo" />
        </div>
        
        <div className="personal_info">
          <div className="personal_info_top">
            <h2 data-aos="fade-right">Abdelmoniem Hgagy</h2>
            <p data-aos="fade-right">I'm Full Stack Developer </p>
          </div>
          <div className="personal_info_bottom" data-aos="fade-up">
            <div className="personal_info_bottom_key">
            <p>Age: </p>
            <p>Phone: </p>
            <p>Email: </p>
            </div>
            <div className="personal_info_bottom_values">
            <p>24</p>
           <p>01557221816</p>
           <p>moniemhgagy@gmail.com</p>
            </div>
       
          </div>
          <div className="social-links" data-aos="fade-up" >
        
        <a href="https://github.com/Abdelmoniemhgagyy?tab=projects" target=' _blank '><i className="bi bi-github"></i></a>
            <a href="https://api.whatsapp.com/send?phone=%2B201557221816&amp;dat
                a=ARD0Zh9NsRHYnFZYHPG8McNvfVgQa7rFk5Fn08mKrUOWkySeHej6NE-C6pt0t6RZL3YKrf-8-6AWiG60BCsvLbucbRbhDcRGsDpLGpsQO7MV1m5Thm9saVqj-
                -W-Ds253VJy7XHdxJGto3oKIWNxILbmgg&amp;source=FB_Page&amp;app=facebook&amp;entry_point=page_cta" target=" _blank ">
                    <i className="bi bi-whatsapp"></i>
                </a>
                <a href="https://www.linkedin.com/in/abdelmoniem-ahmed-3751761b7/" target=' _blank '>
            <i className="bi bi-linkedin"></i></a>
            <a href="https://www.facebook.com/profile.php?id=100007656874900" target=' _blank '><i className="bi bi-facebook"></i></a>
          <a href="https://t.me/hgagq" target=' _blank '><i className="bi bi-telegram"></i></a>
          {/* <i class="bi bi-file-person-fill"></i> */}
      
         <a href="https://drive.google.com/file/d/1-VVcYFpGwv-gmhpbuo4n6Pt_su46_YEI/view?usp=drive_link" target=' _blank '><i className="bi bi-eye-fill"></i> </a>
         <a href="https://docs.google.com/uc?export=download&id=1-VVcYFpGwv-gmhpbuo4n6Pt_su46_YEI" target=' _blank '> <i className="bi bi-download" ></i></a>
         
         
        
         
        
      </div>
        </div>
      </div>
      </div>
    
  )
}

export default Header
