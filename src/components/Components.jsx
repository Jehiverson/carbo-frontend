import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import BlogGrid from './Pages/BlogGrid';
import BlogListing from './Pages/BlogListing';
import BlogMasonary from './Pages/BlogMasonary';
import Faq from './Pages/Faq';
import Error from './Pages/Error';
import ContactUs from './Pages/ContactUs';
import PostImage from './Pages/PostImage';
import PostGallery from './Pages/PostGallery';
import PostVideo from './Pages/PostVideo';
import PostSidebar from './Pages/PostSidebar';

import ProjectCarousel from './Pages/ProjectCarousel';
import ProjectClassic1 from './Pages/ProjectClassic1';
import ProjectClassic2 from './Pages/ProjectClassic2';
import ProjectDetail from './Pages/ProjectDetail';
import ProjectGrid from './Pages/ProjectGrid';
import ProjectMasonary from './Pages/ProjectMasonary';

import Accordian from './Pages/Accordian';
import Button from './Pages/Button';
import IconBoxStyle from './Pages/IconBoxStyle';
import IconFont from './Pages/IconFont';
import ListGroup from './Pages/ListGroup';
import ModalPopup from './Pages/ModalPopup';
import Table from './Pages/Table';
import Tabs from './Pages/Tabs';
import Video from './Pages/Video';
import Location from './Pages/Location';

class Components extends React.Component {
    render() {
        return (
            <BrowserRouter basename="/">
                <div className="page-wraper">
                        <Switch>
                            
                            <Route path='/' exact component={Home} />
                            <Route path='/Home' exact component={Home} />
                            <Route path='/about' exact component={About} />
                            <Route path='/products' exact component={Services} />
                            <Route path='/location' exact component={Location} />

                            <Route path='/blog-grid' exact component={BlogGrid} />
                            <Route path='/blog-listing' exact component={BlogListing} />
                            <Route path='/blog-masonary' exact component={BlogMasonary} />
                            <Route path='/faq' exact component={Faq} />
                            <Route path='/error' exact component={Error} />
                            <Route path='/contactus' exact component={ContactUs} />

                            <Route path='/post-image' exact component={PostImage} />
                            <Route path='/post-gallery' exact component={PostGallery} />
                            <Route path='/post-video' exact component={PostVideo} />
                            <Route path='/post-sidebar' exact component={PostSidebar} />

                            <Route path='/project-carousel' exact component={ProjectCarousel} />
                            <Route path='/project-classic1' exact component={ProjectClassic1} />
                            <Route path='/project-classic2' exact component={ProjectClassic2} />
                            <Route path='/project-detail' exact component={ProjectDetail} />
                            <Route path='/project-grid' exact component={ProjectGrid} />
                            <Route path='/project-masonary' exact component={ProjectMasonary} />

                            <Route path='/accordian' exact component={Accordian} />
                            <Route path='/button' exact component={Button} />
                            <Route path='/iconboxstyle' exact component={IconBoxStyle} />
                            <Route path='/iconfont' exact component={IconFont} />
                            <Route path='/listgroup' exact component={ListGroup} />
                            <Route path='/modalpopup' exact component={ModalPopup} />
                            <Route path='/table' exact component={Table} />
                            <Route path='/tabs' exact component={Tabs} />
                            <Route path='/video' exact component={Video} />
                            <Route component={Error} />
                        </Switch>
                </div>
            </BrowserRouter>
        );
    };
};

export default Components;