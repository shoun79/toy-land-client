import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import BottomFooter from '../pages/Shared/BottomFooter/BottomFooter';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <BottomFooter></BottomFooter>
        </div>
    );
};

export default MainLayout;