import React from 'react'
import "./TechStack.css";
import { TechStackList } from '../../utils/TechStackList';

const TechStack = () => {
  return (
    <>
      <div className='container techstack' id='techstack'>
        <h2 className='col-12 mt-3 mb-1 text-center'> Technology Stack</h2>
  
        <p className='pd-3 text-center'> Here, you'll find a showcase of my technical expertise and the tools I use to bring ideas to life.</p>
      
        <div className='row'>
            {TechStackList.map((tech) => (
                <div key={tech._id} className='col-md-3'>
                    <div className='card m-2'>
                        <div className='card-content'>
                            <div className='card-body'>
                                <div className='media d-flex justify-content-center'>
                                   <div className='align-self-center'>
                                        <tech.icon className='tech-icon'></tech.icon>
                                   </div>
                                   <div className='media-body'>
                                        <h5>{tech.name}</h5>
                                   </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    
    </>
  )
}

export default TechStack
