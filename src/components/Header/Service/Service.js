import React from 'react';
import '../Service/Service.css'
import img1 from '../../../images/icons/service1.png'
import img2 from '../../../images/icons/service2.png'
import img3 from '../../../images/icons/service3.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const ServicesData = [
    {
        name:'Web And Mobile design',
        img:img1,
        description:'We craft stunning and amazing  web UI, using a well drrafted UX to fit your product.'
    },
    {
        name:'Graphic design',
        img:img2,
        description:'Amazing flyers, social media posts and brand representations that would make your brand stand out.'
    },
    {
        name:'Web development',
        img:img3,
        description:'With well written codes, we build amazing apps for all platforms, mobile and web apps in general.'
    }
]

const Service = () => {
    return (
        <section className="services-conteiner mt-5">
            <div className="text-center">
            <h2 className=" text-center" style={{paddingBottom:'20px'}}>Provide awesome <span style={{color:'#7AB259'}}>services</span></h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                ServicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </div>
        </div>
        </section>
    );
};

export default Service;