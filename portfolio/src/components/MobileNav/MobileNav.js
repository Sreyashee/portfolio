import {useState, React} from 'react'
import './MobileNav.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { IoHomeOutline, IoCodeWorking } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineWorkOutline, MdOutlineSchool } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";

import { Link} from 'react-scroll';
const MobileNav = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open)
    }
    const handleMenuClick = () =>{
        setOpen(false);
    }
  return (
    <>
      <div className='mobile-nav'>
        <div className='mobile-nav-header'>
            {open ? (<AiOutlineMenuFold size={30} className='nav-header-icon' onClick={handleOpen}></AiOutlineMenuFold>) : (
            <GiHamburgerMenu size={30} className='nav-header-icon' onClick={handleOpen}></GiHamburgerMenu>
            )}
            </div>
            {open && (
                <div className='mobile-nav-menu'>
                <div className='nav-items'>
                                    <div className='nav-item'>
                                        <div className='nav-link'>
                                            <Link onClick={handleMenuClick} to='home'><IoHomeOutline/>Home</Link>
                                            
                                            </div>
                                        <div className='nav-link'>
                                        <Link onClick={handleMenuClick} to='about' ><IoMdInformationCircleOutline />About</Link></div>
                                       
                                    
                                        <div className='nav-link'>
                                        <Link onClick={handleMenuClick} to='education' ><MdOutlineSchool/>Education</Link></div>
                
                                        <div className='nav-link'>
                                        <Link onClick={handleMenuClick} to='projects'>   <MdOutlineWorkOutline />Projects</Link></div>
                                   
                                        <div className='nav-link'>
                                        <Link onClick={handleMenuClick} to='techstack'>   <IoCodeWorking/>Tech Stack</Link></div>
                                    
                                       
                                   
                                       
                                   
                                        <div className='nav-link'>
                                        <Link onClick={handleMenuClick} to='contacts'>    <RiContactsBook3Line/>Contact</Link></div>
                                    </div>
                               
                                </div>
              </div> 
            )}
        
      </div>  
   
    </>
  )
}

export default MobileNav
