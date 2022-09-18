import React from 'react';
import { NavLink } from 'react-router-dom';
import Switcher from '../Elements/Switcher';
import moment from 'moment';
class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.currentstate = {logo: this.props.flag?this.props.logo[0].footer:require('./../../images/logo-dark.png').default};
    }
    
    updateFooterLogo = (updatedlogo) => {this.currentstate.logo = updatedlogo.default;}

    render() {
        
        return (
            <>
                <footer className="site-footer footer-large  footer-dark	footer-wide">
                    {/* FOOTER BLOCKES START */}
                    <div className="footer-top overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                {/* ABOUT COMPANY */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget widget_about">
                                        <div className="logo-footer clearfix p-b15">
                                            <img src={this.currentstate.logo} alt="" />
                                        </div>
                                        <p className="max-w400">{this.props.logo[0]?.slogan}</p>
                                    </div>
                                </div>
                                {/* RESENT POST */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget widget_address_outer">
                                        <h4 className="widget-title">Contáctanos</h4>
                                        <ul className="widget_address">
                                            <li>Dirección: {this.props.dataContactUs[0]?.address}</li>
                                            <li>Celular: {this.props.dataContactUs[0]?.phone1}</li>
                                            <li>Teléfono: {this.props.dataContactUs[0]?.phone1}</li>
                                            <li>Correo: {this.props.dataContactUs[0]?.email}</li>
                                        </ul>
                                    </div>
                                </div>
                                
                                {/* TAGS */}
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="widget recent-posts-entry-date">
                                        <h4 className="widget-title">Información</h4>
                                        <div className="widget-post-bx">
                                            <div className="bdr-light-blue widget-post clearfix  bdr-b-1 m-b10 p-b10">
                                                <div className="mt-post-date text-center text-uppercase text-white p-tb5">

                                                    <strong className="p-date">{moment(this.props.dataFooter.length > 0? this.props.dataFooter[0].createdAt:new Date()).format("DD")}</strong>
                                                    <span className="p-month">{moment(this.props.dataFooter.length > 0? this.props.dataFooter[0].createdAt:new Date()).format("MM")}</span>
                                                    <span className="p-year">{moment(this.props.dataFooter.length > 0? this.props.dataFooter[0].createdAt:new Date()).format("YYYY")}</span>
                                                </div>
                                                <div className="mt-post-info">
                                                    <div className="mt-post-header">
                                                        <h6 className="post-title"><NavLink to={"/post-sidebar"}>{this.props.dataFooter[0]?.title}</NavLink></h6>
                                                    </div>
                                                    <div className="mt-post-meta">
                                                        <ul>
                                                            <li className="post-author"><i className="fa fa-user" />{this.props.dataFooter[0]?.description}</li>
                                                            
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* NEWSLETTER */}
                            </div>
                        </div>
                    </div>
                    {/* FOOTER COPYRIGHT */}
                    <div className="footer-bottom overlay-wraper">
                        <div className="overlay-main" />
                        <div className="container">
                            <div className="row">
                                <div className="mt-footer-bot-center">
                                    <span className="copyrights-text">© 2022 Carbografitos Edison. Desarrollado por TresaGT.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <Switcher updateFooterLogo={this.updateFooterLogo.bind(this)}/>

            </>
        );
    };
};

export default Footer;