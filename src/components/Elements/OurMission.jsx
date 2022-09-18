import React from 'react';

var img1 = require('./../../images/left-men.png');
var img2 = require('./../../images/background/bg-4.png');
var img3 = require('./../../images/background/bg-site.png');

class OurMission extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding mission-outer-section  p-t80 p-b30 bg-gray bg-no-repeat bg-right-center" style={{ backgroundImage: 'url(' + img1.default + '), url(' + img2.default + ')' }}>
                    <div className="section-content">
                        <div className="container">
                            <div className="section-head">
                                <div className="mt-separator-outer separator-center">
                                    <div className="mt-separator">
                                        <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Nuestra</span> Misión</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            {
                                this.props.data.map(mission =>{
                                    return(
                                        mission.type === false ? (
                                            
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="mission-left bg-white m-b30 p-a30 bg-no-repeat bg-bottom-left" style={{ backgroundImage: 'url(' + img3.default + ')' }}>
                                                        <h3 className="m-t0">{mission.title}</h3>
                                                        <p>{mission.subtitle}</p>
                                                        <div className="text-right">
                                                    </div>
                                                </div>
                                            </div>
                                        ):(
                                            
                                                <div className="col-md-4 col-sm-6">
                                                    <div className="mission-mid bg-no-repeat bg-cover m-b30" style={{ backgroundImage: 'url(' + mission.imgName + ')' }} />
                                                </div>
                                            
                                        ) 
                                    )   
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurMission;