import React from 'react';

var bnr1 = require('./../../images/background/bg-5.png');
class Specialization extends React.Component {
    render() {
        return (
            <>
                <div className="section-full mobile-page-padding bg-white p-t80 p-b30 bg-repeat square_shape1" style={{backgroundImage:"url(" + bnr1.default + ")"}}>
                    <div className="container">
                        {/* IMAGE CAROUSEL START */}
                        <div className="section-content">
                            <div className="row">
                               {
                                this.props.data.map((product,index) => {
                                    return product.reverse === false ? (
                                    <div className="col-lg-3 col-md-4 col-sm-6 m-b30" key={index}>
                                        <div className="image-effect-one hover-shadow">
                                            <img src={product.imgName} alt=""/>
                                                <div className="figcaption">
                                                    <h4>{product.title}</h4>
                                                    <p>{product.subtitle}</p>
                                                </div>
                                        </div>
                                    </div>
                                    ):(
                                    <div className="col-lg-3 col-md-12 col-sm-6 m-b30">
                                        <div className="mt-box our-speciallization-content">
                                            <h3 className="m-t0">{product.title}</h3>
                                            <p>{product.subtitle}</p>
                                        </div>
                                    </div>
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

export default Specialization;