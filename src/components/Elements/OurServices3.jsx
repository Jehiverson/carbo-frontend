import React from 'react';

var img1 = require('./../../images/background/bg-5.png');

class OurServices3 extends React.Component {
    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
            var script = document.createElement('script');
            script.src = src;
            script.addEventListener('load', function () {
              resolve();
            });
            script.addEventListener('error', function (e) {
              reject(e);
            });
            document.body.appendChild(script);
            document.body.removeChild(script);
          })
        };

        loadScript('./assets/js/masonary.js');
    };
    render() {
        return (
            <>
                <div className="section-full p-t80 p-b50 bg-white mobile-page-padding" style={{ backgroundImage: 'url(' + img1.default + ')' }}>
                    <div className="container">
                        <div className="section-head">
                            <div className="mt-separator-outer separator-center">
                                <div className="mt-separator">
                                    <h2 className="text-uppercase sep-line-one "><span className="font-weight-300 text-primary">Formas </span>De Envio</h2>
                                </div>
                            </div>
                        </div>
                        <div className="section-content">
                            <div className="row">
                            {this.props.data.map((item, index) => (
                                <div key={index} className="col-md-4 col-sm-6">
                                    <div className="mt-icon-box-wraper p-a30 center m-b30 box-shadow bg-white">
                                        <div className="mt-icon-box-sm inline-icon text-primary  m-b20 radius bg-primary  scale-in-center bg-moving" style={{ backgroundImage: 'url(' + item.imgName + ')' }}>
                                            <span className="icon-cell text-secondry"><i className={item.flaticon} /></span>
                                        </div>
                                        <div className="icon-content">
                                            <h4 className="mt-tilte text-uppercase font-weight-600 m-b20">{item.title}</h4>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default OurServices3;