import React from 'react';
import { Outlet,useRouteLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;