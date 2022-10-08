import React from 'react';

class Banner extends React.Component {
    render() {
        return (
            <>
                <div className="mt-bnr-inr overlay-wraper bg-parallax bg-top-center" data-stellar-background-ratio="0.5" style={{ backgroundImage: 'url(' + this.props.data[0]?.imgName + ')' }}>
                        <div className="overlay-main bg-black opacity-07" />
                        <div className="container">
                            <div className="mt-bnr-inr-entry">
                                <div className="banner-title-outer">
                                    <div className="banner-title-name">
                                        <h2 className="m-b0">{this.props.data[0]?.frase}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
            </>
        );
    }
};

export default Banner;