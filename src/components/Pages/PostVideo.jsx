import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import LatestBlogs from '../Elements/LatestBlogs';
import BlogComments from '../Elements/BlogComments';
import Banner from './../Elements/Banner';

var bnrimg = require('./../../images/banner/4.jpg');

class PostVideo extends React.Component {
    render() {
        return (
            <>

                <Header />
                <div className="page-content ">
                <Banner title="Creating quality urban lifestyles, building stronger communities." pagename="Post Video" bgimage={bnrimg.default}/>
                    
                    {/* SECTION CONTENT START */}
                    <div className="section-full p-tb80 square_shape1 square_shape3 inner-page-padding">
                        <div className="container">
                            {/* BLOG START */}
                            <div className="blog-post date-style-3 blog-detail text-black">
                                <div className="mt-post-media clearfix">
                                    <div className="grid-post row">
                                        <div className="col-md-6">
                                            <div className="portfolio-item mt-img-effect zoom-slow m-b30">
                                                <iframe title="Youtube Video" width={560} height={315} src="https://www.youtube.com/embed/7n6cpvIFdfY" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="portfolio-item mt-img-effect zoom-slow m-b30">
                                                <iframe title="Vimeo Video" src="https://player.vimeo.com/video/2215313" width={560} height={315} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-post-meta ">
                                    <ul>
                                        <li className="post-date"><strong>20 </strong> <span>April 2021</span> </li>
                                        <li className="post-author">By <span>Admin</span></li>
                                        <li className="post-category">Traditional</li>
                                    </ul>
                                </div>
                                <div className="mt-post-title ">
                                <h2 className="post-title font-weight-600">From complete turn key to project manager. Leave the building to the professionals.</h2>
                                </div>
                                <div className="mt-post-text">
                                    <p>Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus. Vestibulum eleifend nisl sed massa sagittis vestibulum. Vestibulum pretium blandit tellus, sodales volutpat sapien varius vel. Phasellus tristique cursus erat, a placerat tellus laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis. Vivamus sit amet lectus venenatis est rhoncus interdum a vitae velit.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae ipsa quae ab illo inventore dicta sunt explicabo.
          </p>
                                    <h4>"When it comes to your house, don’t mess with the rest, trust the best."</h4>
                                    <p> Proin tincidunt tellus ac porta volutpat. Cras mattis congue lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat sit amet enim in accumsan. Here, then, is what I wanted to tell you of my architecture. I created it with courage and idealism, but also with an awareness of the fact that what is important is life, friends, and attempting to make this unjust world a better place in which to live.</p>
                                    <blockquote className="bg-dark text-white author-quote">
                                        <h4 className="m-b0">We let our quality work and commitment to customer satisfaction be our slogan. quality you deserve and dependability you can count on.<i className="fa fa-quote-right" /> </h4>
                                        <div className="p-t15  text-white">
                                            <strong className="text-primary">Jessica Mcdade</strong>
                                            <span>Contractor</span>
                                        </div>
                                    </blockquote>
                                    <p>Duis vestibulum quis quam vel accumsan. Nunc a vulputate lectus. Vestibulum eleifend nisl sed massa sagittis vestibulum. Vestibulum pretium blandit tellus, sodales volutpat sapien varius vel. Phasellus tristique cursus erat, a placerat tellus laoreet eget. Fusce vitae dui sit amet lacus rutrum convallis. Vivamus sit amet lectus venenatis est rhoncus interdum a vitae velit. </p>
                                    <div className="row">
                                        <div className="col-md-4 col-sm-4">
                                            <div className="mt-box m-b30">
                                                <div className="mt-media">
                                                    <img src={require("./../../images/blog/large-blog.jpg").default} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="mt-box m-b30">
                                                <div className="mt-media">
                                                    <img src={require("./../../images/blog/large-blog2.jpg").default} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-4">
                                            <div className="mt-box m-b30">
                                                <div className="mt-media">
                                                    <img src={require("./../../images/blog/large-blog3.jpg").default} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged. It was popularised in the with the . Proin tincidunt tellus ac porta volutpat. Cras mattis congue lacus id bibendum. Mauris ut sodales libero. Maecenas feugiat sit amet enim in accumsan. Here, then, is what I wanted to tell you of my architecture. I created it with courage and idealism, but also with an awareness of the fact that what is important is life, friends, and attempting to make this unjust world a better place in which to live.</p>
                                </div>
                                <div className="autor-post-tag-share bdr-t-1 bdr-solid bdr-gray p-t20">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="widget widget_tag_cloud">
                                                <h4 className="tagcloud">Tags</h4>
                                                <div className="tagcloud">
                                                    <NavLink to={"#"}>First tag</NavLink>&nbsp;
                                                    <NavLink to={"#"}>Second tag</NavLink>&nbsp;
                                                    <NavLink to={"#"}>Three tag</NavLink>&nbsp;
                                                    <NavLink to={"#"}>Four tag</NavLink>&nbsp;
                                                    <NavLink to={"#"}>Five tag</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="mt-box">
                                                <div className="clearfix">
                                                    <h4>Share this Post:</h4>
                                                    <div className="widget_social_inks">
                                                        <ul className="social-icons social-md social-square social-dark m-b0">
                                                            <li><NavLink to={"#"} className="fa fa-facebook" /></li>
                                                            <li><NavLink to={"#"} className="fa fa-twitter" /></li>
                                                            <li><NavLink to={"#"} className="fa fa-rss" /></li>
                                                            <li><NavLink to={"#"} className="fa fa-youtube" /></li>
                                                            <li><NavLink to={"#"} className="fa fa-instagram" /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <LatestBlogs bgcolor="bg-gray"/>
                            <BlogComments/>
                        </div>
                    </div>
                    {/* SECTION CONTENT END */}
                </div>


                <Footer />

            </>
        );
    };
};

export default PostVideo;