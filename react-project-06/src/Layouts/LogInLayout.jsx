import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../Pages/NavigationBar/NavigationBar';

const LogInLayout = () => {
    return (
        <div>
            <NavigationBar/>
            <Outlet/>
        </div>
    );
};

export default LogInLayout;