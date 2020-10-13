import React from 'react';
import '../Clients/Clients.css'
import airbnb from '../../../images/logos/airbnb.png'
import google from '../../../images/logos/google.png'
import netflix from '../../../images/logos/netflix.png'
import slack from '../../../images/logos/slack.png'
import uber from '../../../images/logos/uber.png'

const Clients = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-2">
                    <img src={slack} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <img src={google} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <img src={uber} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <img src={netflix} alt=""/>
                    </div>
                    <div className="col-md-2">
                        <img src={airbnb} alt=""/>
                    </div>
                    <div className="col-md-2">
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Clients;