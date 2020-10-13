import React from 'react';
import { useHistory } from 'react-router-dom';
import photo1 from '../../../images/logos/Frame.png'
import '../HeaderMain/HeaderMain.css'

const HeaderMain = () => {
    const history = useHistory () 
    const orderNow = () => {
        history.push('/order');
    }
    return (
        <main style={{height:'600px' , backgroundColor:'#FBD062'  }} className="row d-flex align-items-center ">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#111430'}}> <b>Let’s Grow Your <br/> Brand To The <br/> Next Level</b> </h1>
                <p style={{color:'#000000'}}>Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br/> laoreet maecenas. Feugiat </p>
                <button onClick={orderNow} >Hire us</button>

            </div>
            <div className="col-md-6">
                <img src={photo1} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;