import React from 'react';
import Header from '../Header/Header/Header';
import Clients from '../Header/Clients/Clients';
import Service from '../Header/Service/Service';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Clients></Clients>
            <Service></Service>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;