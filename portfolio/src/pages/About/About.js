import React from 'react'
import "./About.css";
const About = () => {
  return (
   <>
    <div className='about' id='about'>
        <div className='row' >
            <div className='col-md-6 col-xl-6 col-lg-6 col-xs-6 about-img' >
            <img src="/images/DSC_3596-01-01.jpeg" alt="profile-pic" />
            </div>
            <div className='col-md-6 about-content'>
                <h1>
                    About me
                </h1>
                <p>
                  


Hello! I’m a passionate developer with experience in building full-stack applications that create seamless user experiences. My projects often combine innovative frontend designs in React with robust backend functionality. I enjoy tackling challenges like integrating Google Maps for address detection and building dynamic components for features like login, signup, and e-commerce workflows. Whether it's crafting a visually appealing shop page, managing complex cart functionality, or creating efficient admin tools, I thrive on turning ideas into reality. Always eager to learn and grow, I’m continually exploring new technologies to enhance my skills and deliver impactful solutions.


                </p>
            </div>

        </div>
      
    </div>
    </>
  )
}

export default About
