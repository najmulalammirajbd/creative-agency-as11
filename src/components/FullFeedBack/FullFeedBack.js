import React from 'react';
import FeedBack from '../FeedBack/FeedBack';

const FullFeedBack = ({Feedback}) => {
    return (
        <div style={{border:'1px solid black' , borderRadius:'5px '}} className="col-md-4 text-center">
            <img style={{height:'50px'}} src={Feedback.img} alt=""/>
            <h5 className="mt-3 mb-3">{Feedback.name}</h5>
            <p className="text-secondary">{Feedback.description}</p>
        </div>
    );
};

export default FullFeedBack;