import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Banner from './../Elements/Banner';
import ShortcodesNav from './../Elements/ShortcodesNav';
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.min.css';

var bnrimg = require('./../../images/banner/4.jpg');

class Video extends React.Component {
    
    constructor() {
        super()
        this.state = {
            isOpen: false,
            isOpen2: false
        }
        this.openModal = this.openModal.bind(this)
        this.openModal2 = this.openModal2.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }

    openModal2() {
        this.setState({ isOpen2: true })
    }
    
    render() {
        return (
            <>
                <Header />
                <div className="page-content">
                <Banner title="Building your dream house shouldn’t be a nightmare!" pagename="Video" bgimage={bnrimg.default}/>
                   
                    {/* SECTION CONTENTG */}
                    <div className="section-full inner-page-padding p-tb80">
                        <div className="container">
                            <div className="row">
                                <ShortcodesNav/>
                                <div className="col-md-9 col-sm-8">
                                    <div className="section-content">
                                        {/* Youtube Video */}
                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Youtube</span> video</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title="Youtube Video" src="https://www.youtube.com/embed/s3A7AK1K2hc" width={560} height={315}></iframe>
                                            </div>
                                            
                                        </div>
                                        {/* Vimeo Video */}
                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Vimeo</span> video</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="embed-responsive embed-responsive-16by9"><iframe title="Vimeo Video" src="https://player.vimeo.com/video/112734492" width={640} height={360}></iframe></div>
                                            
                                        </div>
                                        {/* Youtube Video With Popup */}
                                        <div className="m-b50">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Youtube video </span> with popup</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1 mt-img-effect yt-thum-box">
                                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='s3A7AK1K2hc' onClose={() => this.setState({ isOpen: false })} />
                                                    <img src="http://i3.ytimg.com/vi/s3A7AK1K2hc/maxresdefault.jpg" alt="" />
                                                    <NavLink to={"#"} className="play-now" onClick={this.openModal}>
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Vimeo Video With popup */}
                                        <div className="m-b10">
                                            {/* TITLE START */}
                                            <div className="section-head">
                                                <div className="mt-separator-outer separator-left">
                                                    <div className="mt-separator">
                                                        <h2 className="text-black text-uppercase sep-line-one "><span className="font-weight-300 text-primary">vimeo video </span> with popup</h2>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* TITLE END */}
                                            <div className="mt-box">
                                                <div className="mt-thum-bx mt-img-overlay1">
                                                <ModalVideo channel='vimeo' isOpen={this.state.isOpen2} videoId='112734492' onClose={() => this.setState({ isOpen2: false })} />
                                                    <img src="https://i.vimeocdn.com/video/497807626_590x332.jpg" alt="" />
                                                    <NavLink to={"#"} className="play-now" onClick={this.openModal2}>
                                                        <i className="icon fa fa-play" />
                                                        <span className="ripple" />
                                                    </NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        );
    };
};

export default Video;