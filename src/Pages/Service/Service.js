import React from 'react'
import './Service.css'
import { CgWebsite } from "react-icons/cg";
import { SiCssdesignawards } from "react-icons/si";
import { RiSeoLine } from "react-icons/ri";


export const Service = () => {
    const services = [
  {
    icon: <CgWebsite className='icon'/>,
    title: 'Web Development',
    description: 'Responsive and scalable websites using modern technologies.',
  },
  {
    icon: <SiCssdesignawards className='icon'/>,
    title: 'UI/UX Design',
    description: 'User-centered interfaces that are clean, intuitive, and elegant.',
  },
  {
    icon: <RiSeoLine className='icon'/>,
    title: 'SEO Optimization',
    description: 'Improve your website’s visibility and rank on search engines.',
  },
];
  return (
    <> 
     <h2 className='client-head'>Our Services</h2>
    <div id='service'>
       
      {
        services.map((item,index)=>(
          <div className='service-cont'>
            <div className='service-details'>
              <h2><span>{item.icon}</span> {item.title}</h2>
              <p className='service-desc'>{item.description}</p>
            </div>
          </div>
        ))
      }
    </div></>
   
  )
}

export default Service