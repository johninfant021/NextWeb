import React from 'react'
import './Whyus.css'

const Whyus = () => {
    const reasons = [
  {
    icon: "https://cdn.pixabay.com/photo/2017/07/04/10/57/quality-2470673_1280.png",
    title: 'High Quality',
    description: 'We deliver pixel-perfect, high-performance solutions tailored to your needs.',
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4087/4087743.png",
    title: '24/7 Support',
    description: 'Our team is always available to help you whenever you need assistance.',
  },
  {
    icon: "https://cdn-icons-png.flaticon.com/512/4075/4075912.png",
    title: 'Experienced Team',
    description: 'Our developers and designers have years of experience building top-tier products.',
  },
];

  return (
    <div id='why'>
        <h2 className='client-head'>Why Choose Us</h2>
        <div className='why-cont'>
            {
                reasons.map((item,index)=>(
                    <div className='why-cont-main'>
                        <img className='why-img' src={item.icon} alt='Logo' />
                        <div className='why-details'>
                            <h1 className='why-title'>{item.title}</h1>
                            <hr/>   
                            <p className='why-desc'>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Whyus