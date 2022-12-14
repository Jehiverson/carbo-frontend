import React from 'react';
class ProjectGrid extends React.Component {
    
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
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
        setTimeout(() => {
            loadScript('./assets/js/masonary.js');    
        }, 1300);
        

    };
    
    render() {
        return (
            <>
                    <div className="section-full p-tb80 inner-page-padding ">
                        <div className="container">
                            <div className="portfolio-wrap mfp-gallery work-grid row">
                                {this.props.data.map((item, index) => (
                                    <div key={index} className={`${item.filter} masonry-item col-md-4 col-sm-6 m-b30`}>
                                        <div className="image-effect-two hover-shadow">
                                            <img src={item.imgName} alt="" />
                                            <div className="figcaption">
                                                <h4 className="mt-tilte">{item.title}</h4>
                                                <p>{item.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                
                            </div>
                        </div>
                    </div>
            </>
        );
    };
};

export default ProjectGrid;