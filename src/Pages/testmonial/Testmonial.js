import React from 'react'
import './Testmonial.css'

const Testmonial = () => {
    const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Product Manager, Zenix Corp',
    photo: "https://img.freepik.com/free-photo/portrait-business-woman-office_1398-6.jpg?ga=GA1.1.1599299043.1744103523&semt=ais_items_boosted&w=740",
    message: 'Their attention to detail and commitment to deadlines is unmatched. Great experience!',
  },
  {
    name: 'Amit Patel',
    role: 'Founder, CodeLabs',
    photo: "https://img.freepik.com/free-photo/front-view-smiley-business-man_23-2148479583.jpg?ga=GA1.1.1599299043.1744103523&semt=ais_items_boosted&w=740",
    message: 'The team delivered an exceptional product with clean code and fantastic design!',
  },
  {
    name: 'Neha Reddy',
    role: 'CEO, TechBridge',
    photo: "https://img.freepik.com/free-photo/close-up-portrait-caucasian-unshaved-man-eyeglasses-looking-camera-with-sincere-smile-isolated-gray_171337-630.jpg?ga=GA1.1.1599299043.1744103523&semt=ais_items_boosted&w=740",
    message: 'Highly professional and responsive. We’re very happy with the results.',
  },
];
  return (
    <div id='test'>
        <h2 className='client-head'>Feedback</h2>
        <div className='test-container'>
        {
            testimonials.map((item,index)=>(
                <div className='test-cont'>
                    <div className='test-pic-cont'>
                        <img src={item.photo} alt={item.name} className='test-pic'/>
                    </div>
                    <div className='test-details'>
                        <h2 className='test-name'>{item.name}</h2>
                        <p className='test-role'>{item.role}</p>
                        <div className='test-message-cont'>
                             <h3 className='test-message'>" {item.message} "</h3>
                        </div>
                    </div>
                </div>

            ))
        }
        </div>
    </div>
  )
}

export default Testmonial