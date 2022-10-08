import React, { useEffect, useState } from 'react';
import _ from 'loadsh'
import Header from './../Common/Header';
import Footer from './../Common/Footer';
import Slider from './../Elements/Slider';
import Specialization from './../Elements/Specialization';
import About from './../Elements/About';
import OurMission from './../Elements/OurMission';
import OurServices from './../Elements/OurServices';
import Testimonials from './../Elements/Testimonials';


import { HOST } from '../../constants/defaultSetting';

import Loader from "../../components/Elements/Loader";

const Home = () => {

    const [loading, setLoading] = useState(true);
    const [flagLogo, setFlagLogo] = useState(false);
    const [logo, setLogo] = useState("");
    const [carousel, setCarousel] = useState([]);
    const [products, setProducts] = useState([]); 
    const [aboutCompany, setAboutCompany] = useState([]); 
    const [ourmission, setOurMission] = useState([]); 
    const [clientTestimonials, setClientTestimonials] = useState([]); 
    const [ourservices, setOurServices] = useState([]); 
    const [contactus, setContactUs] = useState([]);
    const [footer, setFooter] = useState([]);

      const getDataLogoAndSlogan = async () => {
        const getDataLogoAndSlogan = await fetch(`${HOST}logoAndSlogan`)
          .then(response => response.json())
          .then(data => { return data.data });
        if (getDataLogoAndSlogan) {
            setLogo(getDataLogoAndSlogan);
            setFlagLogo(true);
        }
      };

      const getDataCarousel = async () => {
        const getDataCarousel = await fetch(`${HOST}carousel/pageUsed/Inicio`)
          .then(response => response.json())
          .then(data => { return data.data });
          console.log("****",getDataCarousel)
        if (getDataCarousel) {
            setCarousel(getDataCarousel);
        }
      };

      const getDataProducts = async () => {
        const getDataProducts = await fetch(`${HOST}products/mvp/true`)
          .then(response => response.json())
          .then(data => { return data.data });
        if (getDataProducts) {
            setProducts(_.sortBy(getDataProducts, 'order'));
        }
      };

      const getDataAboutCompany = async () => {
        const getDataAboutCompany = await fetch(`${HOST}carousel/pageUsed/Sobre La Compañia`)
          .then(response => response.json())
          .then(data => { return data.data })
        if (getDataAboutCompany) {
            setAboutCompany(getDataAboutCompany);
            
        }
      };

      const getDataOurMission = async () => {
        const getDataOurMission = await fetch(`${HOST}ourmission`)
          .then(response => response.json())
          .then(data => { return data.data })
        if (getDataOurMission) {
          setOurMission(_.sortBy(getDataOurMission, 'order'));
        }
      };

      const getDataClientTestimonials = async () => {
        const getDataClientTestimonials = await fetch(`${HOST}clientTestimonials/page/Testimonio de clientes`)
          .then(response => response.json())
          .then(data => { return data.data })
          console.log("/",getDataClientTestimonials)
        if (getDataClientTestimonials) {
          setClientTestimonials(getDataClientTestimonials);
        }
      };

      const getDataOurServices = async () => {
        const getDataOurServices = await fetch(`${HOST}ourservices/type/Nuestros Servicios`)
          .then(response => response.json())
          .then(data => { return data.data })
        if (getDataOurServices) {
          setOurServices(getDataOurServices);
        }
      };

      const getDataContactUs = async () => {
        const getDataContactUs = await fetch(`${HOST}contactus`)
          .then(response => response.json())
          .then(data => { return data.data })
          console.log(getDataContactUs)
        if (getDataContactUs) {
          setContactUs(getDataContactUs);
        }
      };

      const getDataFooter = async () => {
        const getDataFooter = await fetch(`${HOST}footer`)
          .then(response => response.json())
          .then(data => { return data.data })
        if (getDataFooter) {
          setFooter(getDataFooter);
        }
      };

      useEffect(()=>{
       getDataLogoAndSlogan()
       getDataCarousel()
       getDataProducts()
       getDataAboutCompany()
       getDataOurMission()
       getDataClientTestimonials()
       getDataOurServices()
       getDataContactUs()
       getDataFooter()
       setTimeout(() => {
        setLoading(false)
       }, 3000);
      },[loading])
      
    return(
        <>
        {loading ? <Loader/>:(<> 
          <Header logo={logo} flag={flagLogo} dataContactUs={contactus} active={1}/>
            <div className="page-content">
                <Slider data={carousel} />
                <Specialization data={products} />
                <About data={aboutCompany} />
                <OurMission data={ourmission} />
                <Testimonials data={clientTestimonials} />
                <OurServices data={ourservices} />
            </div>
            <Footer logo={logo} flag={flagLogo} dataContactUs={contactus} dataFooter={footer}/>
        </>)}
            
        </>
    )
};

export default Home;