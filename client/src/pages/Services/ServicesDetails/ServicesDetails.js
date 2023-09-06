import React from 'react';
import { useLocation } from "react-router-dom";
import CommonPageHeader from '../../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../../components/Shared/Footer';
import HomeHeader from '../../Home/Home/HomeHeader/HomeHeader';
import ServicesDetailsArea from './ServicesDetailsArea/ServicesDetailsArea';
import HomeFooter from '../../Home/Home/HomeFooter/HomeFooter';

const ServicesDetails = () => {
    const location = useLocation();
    const { filteredData } = location.state;
    return (
        <>
            <HomeHeader/>
            {/* <CommonPageHeader title="Our Services" subtitle="Details" /> */}
            <ServicesDetailsArea title={filteredData[0].title} content={filteredData[0].content} />
            {/* <Footer/> */}
            <HomeFooter />
        </>
    );
};

export default ServicesDetails;