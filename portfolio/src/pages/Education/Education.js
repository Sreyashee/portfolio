import React from 'react'
import { IoSchool } from "react-icons/io5";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Education.css"

const Education = () => {
  return (
    <>
        <div className='container education' id='education'>
          
            <h2 className='col-12 mt-3 mb-1 text-center'>Education</h2>
  
             <p className='pd-3 text-center'>Explore the foundation of my knowledge and skills, built through academic achievements and a passion for continuous learning.</p>
             <VerticalTimeline className='vertical-timeline vertical-timeline-custom-line'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#6f5942', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #6f5942' }}
                    date="2022 - present"
                    iconStyle={{ background: '#BBA58F', color: '#fff' }}
                    icon={<IoSchool />}
                    position="right"
                >
                    <h3 className="vertical-timeline-element-title">B.TECH (Computer Science and Technology)</h3>
                    <h4 className="vertical-timeline-element-subtitle">Heritage Institute of Technology, Kolkata</h4>
                    <h2 className='percentage'>8.26 CGPA</h2>
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline className='vertical-timeline vertical-timeline-custom-line'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#6f5942', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #6f5942' }}
                    date="2020 - 2022"
                    iconStyle={{ background: '#BBA58F', color: '#fff' }}
                    icon={<IoSchool />}
                >
                    <h3 className="vertical-timeline-element-title">Higher Secondary ( CBSE )</h3>
                    <h4 className="vertical-timeline-element-subtitle">Delhi Public School, Siliguri</h4>
                    <h2 className='percentage'>94%</h2>
                    
                </VerticalTimelineElement>
            </VerticalTimeline>

            <VerticalTimeline className='vertical-timeline vertical-timeline-custom-line'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#6f5942', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #6f5942' }}
                    date="2010 - 2020"
                    iconStyle={{ background: '#BBA58F', color: '#fff' }}
                    icon={<IoSchool />}
                    position="right"
                >
                    <h3 className="vertical-timeline-element-title">Secondary ( ICSE )</h3>
                    <h4 className="vertical-timeline-element-subtitle">Auxilium Convent School, Siliguri</h4>
                    <h2 className='percentage'>97%</h2>
                </VerticalTimelineElement>
            </VerticalTimeline>
        
        
        
        </div>
    </>
  )
}

export default Education
