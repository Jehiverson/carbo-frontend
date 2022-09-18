import React from 'react';
class PostImage extends React.Component {
    
    render() {
        console.log(this.props.data)
        return (
            <>

              {/*  <Header /> */}
                {/*<div className="page-content "> */}
               {/* <Banner title="Putting a plan to action, to assure your satisfaction!." pagename="Post Image" bgimage={bnrimg.default}/>*/}
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 inner-page-padding">
                        <div className="container">
                            <div className="blog-post date-style-3 blog-detail text-black">
                                <div className="mt-post-media clearfix m-b30">
                                    <ul className="grid-post">
                                        <li> 
                                            
                                            <div className="portfolio-item">
                                                <img className="img-responsive" src={this.props.data[0]?.imgName} alt="" />
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-post-title ">
                                   {/* <h2 className="post-title font-weight-600">From complete turn key to project manager. Leave the building to the professionals.</h2> */}
                                </div>
                                <div className="mt-post-text">
                                    <p>
                                       {this.props.data[0]?.subtitle}
                                    </p>
                                </div> 
                            </div>
                           {/* <LatestBlogs bgcolor="bg-gray"/>
                            <BlogComments/> */}
                        </div>
                   {/* </div> */}
                    {/* SECTION CONTENT END */}
                </div>


              {/* <Footer />*/}

            </>
        );
    };
};

export default PostImage;