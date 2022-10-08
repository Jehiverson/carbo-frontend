import React, { useEffect, useState } from "react";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Specialization4 from "./../Elements/Specialization4";
import Team3 from "./../Elements/Team3";
import PostImage from "./PostImage";

import { HOST } from "../../constants/defaultSetting";
import Loader from "../../components/Elements/Loader";

const About = () => {
  const [loading, setLoading] = useState(true);
  const [flagLogo, setFlagLogo] = useState(false);
  const [logo, setLogo] = useState("");
  const [carousel, setCarousel] = useState([]);
  const [ourservices, setOurServices] = useState([]); 
  const [clientTestimonials, setClientTestimonials] = useState([]);
  const [contactus, setContactUs] = useState([]);
  const [footer, setFooter] = useState([]);

  const getDataLogoAndSlogan = async () => {
    const getDataLogoAndSlogan = await fetch(`${HOST}logoAndSlogan`)
      .then((response) => response.json())
      .then((data) => {
        return data.data;
      });
    if (getDataLogoAndSlogan) {
      setLogo(getDataLogoAndSlogan);
      setFlagLogo(true);
    }
  };

  const getDataCarousel = async () => {
    const getDataCarousel = await fetch(`${HOST}carousel/pageUsed/Sobre Nosotros`)
      .then(response => response.json())
      .then(data => { return data.data });
    if (getDataCarousel) {
        setCarousel(getDataCarousel);
    }
  };

  const getDataContactUs = async () => {
    const getDataContactUs = await fetch(`${HOST}contactus`)
      .then((response) => response.json())
      .then((data) => {
        return data.data; 
      });
    console.log(getDataContactUs);
    if (getDataContactUs) {
      setContactUs(getDataContactUs);
    }
  };

  const getDataFooter = async () => {
    const getDataFooter = await fetch(`${HOST}footer`)
      .then((response) => response.json())
      .then((data) => {
        return data.data;
      });
    if (getDataFooter) {
      setFooter(getDataFooter);
    }
  };

  const getDataOurServices = async () => {
    const getDataOurServices = await fetch(`${HOST}ourservices/type/Nuestras Especializaciones`)
      .then(response => response.json())
      .then(data => { return data.data })
    if (getDataOurServices) {
      setOurServices(getDataOurServices);
    }
  };

  const getDataClientTestimonials = async () => {
    const getDataClientTestimonials = await fetch(`${HOST}clientTestimonials/page/Nuestro Equipo`)
      .then(response => response.json())
      .then(data => { return data.data })
      console.log("/",getDataClientTestimonials)
    if (getDataClientTestimonials) {
      setClientTestimonials(getDataClientTestimonials);
    }
  };

  useEffect(() => {
    getDataLogoAndSlogan();
    getDataCarousel();
    getDataContactUs();
    getDataOurServices();
    getDataClientTestimonials();
    getDataFooter();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header logo={logo} flag={flagLogo} dataContactUs={contactus} active={2}/>
          <PostImage data={carousel}/>
          <Specialization4 data={ourservices}/>
          <Team3 data={clientTestimonials} count={0}/>
          <Footer
            logo={logo}
            flag={flagLogo}
            dataContactUs={contactus}
            dataFooter={footer}
          />
        </>
      )}
    </>
  );
};

export default About;
