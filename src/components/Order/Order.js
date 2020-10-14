import React from 'react';
import '../Order/Order.css'
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart , faListAlt , faInbox} from '@fortawesome/free-solid-svg-icons'

const Order = () => {
    const { register, handleSubmit,  errors } = useForm();
  const onSubmit = data => {
      fetch('https://server-as11.herokuapp.com/servicecollotion',{
          method:'POST',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(data)
          })
          
          .then(res => res.json())
          .then( success => {
              if(success) {
                  alert('Submited')
              }
          })

      
    }
    return (
        <div>
            <div >
                <div className="row">
                <div className="col-md-3">
                <ul className="DeshBord-Item">
                    <button><FontAwesomeIcon icon={faShoppingCart} /> Order</button><br/>
                    <button><FontAwesomeIcon icon={faListAlt} /> Service list</button><br/>
                    <button><FontAwesomeIcon icon={faInbox} /> Review</button><br/>
                </ul>
            </div>
            <div className="col-md-9 order-now">
                <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Your name / company’s name" name="name" ref={register({ required: true })} />
                  {errors.name && <span>This field is required</span>}
                  <input placeholder="Your email address" name="email" ref={register({ required: true })} />
                  {errors.email && <span>This field is required</span>}
                  <input placeholder="Service" name="service" ref={register({ required: true })} />
                  {errors.service && <span>This field is required</span>}
                  <input className="Project" placeholder="Project Details" name="project" ref={register({ required: true })} />
                  {errors.project && <span>This field is required</span>}
                  <input  placeholder="Price" name="price" ref={register({ required: true })} />
                  {errors.price && <span>This field is required</span>}
                 <input className="submit" type="submit" />
                 </form>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Order;