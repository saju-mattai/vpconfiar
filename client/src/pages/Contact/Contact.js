import React from 'react';
import CommonPageHeader from '../../components/CommonPageHeader/CommonPageHeader';
import Footer from '../../components/Shared/Footer';
import HomeHeader from '../Home/Home/HomeHeader/HomeHeader';
import ContactArea from './ContactArea/ContactArea';
import ContactFormArea from './ContactFormArea/ContactFormArea';
import ContactMap from './ContactMap/ContactMap';
import HomeFooter from '../Home/Home/HomeFooter/HomeFooter';

const Contact = () => {
    return (
        <>
            <HomeHeader/>
            {/* <CommonPageHeader title="Contact Us" subtitle="Contact" /> */}
            <ContactFormArea/>
            <ContactArea/>
            {/* <ContactMap/> */}
            {/* <Footer/> */}
            <HomeFooter/>

        </>
    );
};

export default Contact;