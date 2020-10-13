import React from 'react';
import FullFeedBack from '../FullFeedBack/FullFeedBack';
import img1 from '../../images/customer-1.png';
import img2 from '../../images/customer-2.png';
import img3 from '../../images/customer-3.png';
const FeedBackData = [
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

const FeedBack = () => {
    return (
        <div>
            <section className="services-conteiner mt-5">
             
            <div className="text-center">
            <h2 className=" text-center" style={{paddingBottom:'20px'}}>Clients <span style={{color:'#7AB259'}}>Feedback</span></h2>
            </div>
            <div className="d-flex justify-content-center">
            <div className="w-75 row mt-5 pt-5">
            {
                FeedBackData.map(Feedback => <FullFeedBack Feedback={Feedback}></FullFeedBack>)
            }
            </div>
        </div>
        </section>
        </div>
    );
};

export default FeedBack;