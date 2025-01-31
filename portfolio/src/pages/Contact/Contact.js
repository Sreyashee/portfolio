import React,{useState} from 'react'
import {toast} from 'react-toastify';
import axios from "axios";
import "./Contact.css"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  const [name, setname] = useState("") 
  const [email, setemail] = useState("") 
  const [msg, setmsg] = useState("") ;

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if(!name || !email || !msg){
        toast.error("Please provide all fields");

      }
      const res = await axios.post("/api/v1/portfolio/sendEmail",{name, email, msg})
      if(res.data.success){
        toast.success(res.data.message);
      }
      else{
        toast.error(res.data.message);
      }
    }catch(error){
      console.log(error);
    }
  }
  return (
    <>
      <div className='container contact' id='contacts'>
        <div className='card card0 border-0'>
            <div className='row'> 
                <div className='col-md-6 col-lg-6 col-xl-6 col-sm-12'>
                    <div className='card1'>
                        <div className='row border-line'>
                            <img className="image" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPGXyvim82QeA1h9szfTF-s7ysTZljhO_dKg&s' alt='contact'></img>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6'>
                    <div className='card2 d-flex card border-0 px-4 py-5'>
                        <div className='row'>
                        <div className='col social-icons'>
                           <a href="https://www.linkedin.com/in/sreyashee-sarkar-588521261/"> <CiLinkedin color=' #523D35' size={34} className='icon'> </CiLinkedin></a>
                           <a href="https://github.com/Sreyashee"> <FaGithub color=' #523D35' size={34} className='icon'/></a>
                           <a href='https://api.whatsapp.com/send?phone=7477846172'> <FaWhatsapp color=' #523D35' size={34} className='icon'/></a>
                           <a href=""> <MdOutlineEmail color=' #523D35' size={34} className='icon'/></a>
                        
                        
                        </div>
                    
               
                    <div className='row px-3 mb-4 line-container'>
                        
                            <div className='or text-center'>OR</div>
                        
                    </div>
                    <div className='row px-3'>
                        <input type='text' name='name' placeholder='Write your name' className='ab-3' value={name} onChange={(e) => setname(e.target.value)}></input>
                        <input type='text' name='email' placeholder='Write your email address' className='ab-3' value={email} onChange={(e) => setemail(e.target.value)}></input>
                        <textarea type='text' name='msg' placeholder='Write your message' className='ab-3' value={msg} onChange={(e) => setmsg(e.target.value)}></textarea>
                        <button className='button' onClick={handleSubmit}>Send Message</button>
                    
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Contact
