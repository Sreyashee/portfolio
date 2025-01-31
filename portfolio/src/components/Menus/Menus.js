import React from 'react'
import "./Menus.css"
import { IoHomeOutline, IoCodeWorking, IoPeopleOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineWorkOutline, MdOutlineSchool } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";

import { Link} from 'react-scroll';

const Menus = ({toggle}) => {
  return (
    <>
        {toggle ? (
            <>
                <div className='navbar-profile-pic'>
                    <img src="/images/DSC_3596-01-01.jpeg" alt="profile-pic" />

                </div>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-link'>
                            <Link to='home'><IoHomeOutline/>Home</Link>
                            
                            </div>
                        <div className='nav-link'>
                        <Link to='about' ><IoMdInformationCircleOutline />About</Link></div>
                       
                    
                        <div className='nav-link'>
                        <Link to='education' ><MdOutlineSchool/>Education</Link></div>

                        <div className='nav-link'>
                        <Link to='projects'>   <MdOutlineWorkOutline />Projects</Link></div>
                   
                        <div className='nav-link'>
                        <Link to='techstack'>   <IoCodeWorking/>Tech Stack</Link></div>
                    
                       
                   
                       
                   
                        <div className='nav-link'>
                        <Link to='contacts'>    <RiContactsBook3Line/>Contact</Link></div>
                    </div>

                </div>
            </>
        ) : (
            <>
                 <div className='nav-items'>
                    <div className='nav-item'>
                        <div className='nav-link'>
                        <Link to='home'>  <IoHomeOutline title='Home'/></Link></div>
                    
                        <div className='nav-link'>
                        < Link to='about'><IoMdInformationCircleOutline title='About'/></Link></div>
                    
                        <div className='nav-link'>
                        <Link to='education' ><MdOutlineSchool title='Education'/></Link></div>
                        <div className='nav-link'>
                        <Link to='projects'>   <MdOutlineWorkOutline title='Projects' /></Link></div>
                   
                        <div className='nav-link'>
                        <Link to='techstack'>   <IoCodeWorking title='TechStack'/></Link></div>
                    
                
                   
                        <div className='nav-link'>
                        <Link to='contacts'>  <RiContactsBook3Line title='Contact'/></Link></div>
                    </div>

                </div>
            </>
        )}
    </>
  )
}

export default Menus
