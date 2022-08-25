import React from 'react';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider';
import Specialization from './../Elements/Specialization';
import About from './../Elements/About';
import OurValue from './../Elements/OurValue';
import OurMission from './../Elements/OurMission';
import OurServices from './../Elements/OurServices';
import Callus from './../Elements/Callus';
import OurProject from './../Elements/OurProject';
import Blogs from './../Elements/Blogs';
import Testimonials from './../Elements/Testimonials';

class Home extends React.Component {
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                    <Slider />
                    <Specialization />
                    <About />
                    <OurValue />
                    <OurMission />
                    <OurServices />
                    <Callus />
                    <OurProject />
                    <Blogs />
                    <Testimonials />
                </div>
                <Footer />
            </>
        );
    };
};

export default Home;