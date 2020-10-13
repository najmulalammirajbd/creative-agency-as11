import React from 'react';
import { useHistory } from 'react-router-dom';

const ServiceDetail = ({service}) => {
    const history = useHistory () 
    const orderNow = () => {
        history.push('/order');
    }
    return (
        <div className="col-md-4 text-center">
            <img onClick={orderNow} style={{height:'50px'}} src={service.img} alt=""/>
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <p className="text-secondary">{service.description}</p>
        </div>
    );
};

export default ServiceDetail;