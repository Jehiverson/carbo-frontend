import React from 'react';
import Navigation from '../Common/Navigation';
import { NavLink } from 'react-router-dom';

const Header = ({flag, logo, dataContactUs, active}) => {

    const logoImg = flag?logo[0].navbar:require('./../../images/logo-image.png')

    return (
        <>

            <header className="site-header header-style-1">
                <div className="top-bar bg-gray">
                    <div className="container">
                        <div className="row">
                            <div className="mt-topbar-left clearfix">
                                <ul className="list-unstyled e-p-bx pull-right">
                                    <li><i className="fa fa-envelope" /> {dataContactUs.length > 0?dataContactUs[0]?.email:""}</li>
                                    <li><i className="fa fa-phone" />{dataContactUs.length > 0?dataContactUs[0]?.phone1:""}</li>
                                    <li><i className="fa fa-clock-o" />{dataContactUs.length > 0?dataContactUs[0]?.schedule:""}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-header main-bar-wraper">
                    <div className="main-bar bg-white">
                        <div className="container">
                            <div className="logo-header">
                                <div className="logo-header-inner logo-header-one">
                                    <NavLink to={"./"}>
                                        <img src={flag?logoImg:logoImg.default} alt="Shapen"/>
                                    </NavLink>
                                </div>
                            </div>
                            {/* NAV Toggle Button */}
                            <button data-target=".header-nav" data-toggle="collapse" type="button" className="navbar-toggle collapsed">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            {/* MAIN Vav */}
                            <Navigation active={active}/>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
}

export default Header;

