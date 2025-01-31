import React from 'react'
import { useTheme } from '../../Context/ThemeContext';
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/resume_Sreyashee.pdf";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
const Home = () => {
  const [theme, setTheme] = useTheme ();
  const handleTheme = () =>{
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }
  return (
    < >
     <div className='theme-btn ' onClick={handleTheme}>
          {theme === 'light' ? (<LuSun size={30} color='white'></LuSun>) : (<FaMoon size={30} color='white'></FaMoon>)}
        </div>
      <div className='container-fluid home-container ' id='home'>
       
        <div className='container home-content'>
          <h2>Sreyashee Sarkar</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["Full Stack Developer", "Mern Stack Developer"],
                autoStart: true,
                loop: true,
              }}>
            </Typewriter>
          </h1>
          <div className='home-buttons'>
            <a className='btn btn-hire' href='https://api.whatsapp.com/send?phone=7477846172'
            rel='noreferrer' target="_blank">Hire Me</a>
         
          <a className='btn btn-cv' href={Resume} download="Sreyashee_resume">My Resume</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
