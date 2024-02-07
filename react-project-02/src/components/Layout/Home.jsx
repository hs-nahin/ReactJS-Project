import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header.jsx';

const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Home;
