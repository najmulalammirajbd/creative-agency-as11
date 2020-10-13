import React from 'react';
import '../Footer/Footer.css'

const Footer = () => {
    return (
        <main style={{height:'600px' , backgroundColor:'#FBD062' , marginTop:'140px'  }} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1 ">
                <h1 style={{color:'#111430'}}> Let us handle your <br/> project, professionally. </h1>
                <p style={{color:'#000000'}}>With well written codes, we build amazing apps for all <br/> platforms, mobile and web apps in general. </p>

            </div>
            <div className="col-md-6 ">
                <form action="" >
                <input type="email" name="" id="" placeholder="Your email address" className="email form-m"/> <br/>
                <input type="text" name="" id="" placeholder="Your name / company’s name" className="company form-m"/> <br/>
                <input type="text" name="" id="" placeholder="Your message" className="message form-m"/> <br/>
                <button className="form-m">SEND</button>
                </form>
            </div>
        </main>
    );
};

export default Footer;