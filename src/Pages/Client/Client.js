import React from 'react'
import './Client.css'

const Client = () => {
   const clients = [
    {
        logo: "https://img.freepik.com/free-photo/business-finance-employment-female-successful-entrepreneurs-concept-smiling-professional-female-office-manager-ceo-e-commerce-company-looking-pleased-camera-white-background_1258-59171.jpg?ga=GA1.1.1599299043.1744103523&semt=ais_items_boosted&w=740",
        name: 'Marry M',
        profile:'Founder & CEO',
        description: 'Innovative Tech Solution'
    },
    {
        logo: "data:image/jpeg;base64,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",
        name: 'Alex B',
        profile:'Founder & CEO',
        description: 'IPCS Global'
    },
    {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjDGMp734S91sDuUFqL51_xRTXS15iiRoHew&s',
        name: 'Carry S',
        profile:'Founder & CEO',
        description:'6Solve IT Labs'
    },
    {
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcg4Y51XjQ-zSf87X4nUPTQzsF83eFdZswTg&s",
        name: 'Michel',
        profile:'Founder & CEO',
        description: 'Fire Bee'
    },
];
  return (
    <div className='Client'>
        <h2 className='client-head'>Our Top Client Details</h2>
        <div className='client-cont'>
            {
                clients.map((item,index)=>(
                    <div className='client-cont-main'>
                        <div className='client-img-container'>
                            <img className='client-img' src={item.logo} alt='Logo' height='250px' width='250px' />
                        </div>
                        <div className='client-details'>
                            <h1 className='client-name'>{item.name}</h1>
                            <p className='client-pro'>{item.profile}</p>
                            <h3 className='client-desc'>{item.description}</h3>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Client