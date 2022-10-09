import React, { useEffect, useState } from 'react';
import GoogleMaps from "simple-react-google-maps"

import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
import Banner from './../Elements/Banner';
import OurSpecialization from './../Elements/OurSpecialization';
import OurServices3 from './../Elements/OurServices3';


import { HOST } from "../../constants/defaultSetting";
import Loader from "../../components/Elements/Loader";


const Location = () => {

    const [loading, setLoading] = useState(true);
    const [flagLogo, setFlagLogo] = useState(false);
    const [logo, setLogo] = useState("");
    const [description, setDescription] = useState("");
    const [contactus, setContactUs] = useState([]);
    const [footer, setFooter] = useState([]);
    const [ourservices, setOurServices] = useState([]); 
    const [shipping, setShipping] = useState([]);
    const [location, setLocation] = useState([]);

    const getDataLogoAndSlogan = async () => {
        const getDataLogoAndSlogan = await fetch(`${HOST}logoAndSlogan`)
            .then(response => response.json())
            .then(data => { return data.data });
        
        if (getDataLogoAndSlogan) {
            setLogo(getDataLogoAndSlogan);
            setFlagLogo(true);
        }
    };

    const getDataContactUs = async () => {
        const getDataContactUs = await fetch(`${HOST}contactus`)
            .then(response => response.json())
            .then(data => { return data.data });
    
        if (getDataContactUs) {
            setContactUs(getDataContactUs);
        }
    };

    const getDataDescriptionLocation = async () => {
        const getDataContactUs = await fetch(`${HOST}locationdescription`)
            .then(response => response.json())
            .then(data => { return data.data });
        console.log("-----------------------",getDataContactUs)
        if (getDataContactUs) {
            setDescription(getDataContactUs);
        }
    };

    const getDataOurServices = async () => {
        const getDataOurServices = await fetch(`${HOST}ourservices/type/Formas De Pago`)
          .then(response => response.json())
          .then(data => { return data.data })
        if (getDataOurServices) {
          setOurServices(getDataOurServices);
        }
      };

    const getDataSendMethod = async () => {
        const getDataSendMethod = await fetch(`${HOST}sendmethods`)
            .then(response => response.json())
            .then(data => { return data.data });

        if (getDataSendMethod) {
            setShipping(getDataSendMethod);
        }
    };

    const getDataLocation = async () => {
        const getDataLocation = await fetch(`${HOST}location`)
            .then(response => response.json())
            .then(data => { return data.data });
            
        if (getDataLocation) {
            setLocation(getDataLocation);
        }
    };

    const getDataFooter = async () => {
        const getDataFooter = await fetch(`${HOST}footer`)
            .then(response => response.json())
            .then(data => { return data.data });

        if (getDataFooter) {
            setFooter(getDataFooter);
        }
    };

    useEffect(() => {
    getDataLogoAndSlogan();
    getDataContactUs();
    getDataDescriptionLocation();
    getDataFooter();
    getDataOurServices();
    getDataSendMethod();
    getDataLocation();
    setTimeout(() => {
        setLoading(false);
    }, 3000);
    },[loading]);

  return (
    <>
        {loading?(
            <Loader />
        ):(
            <>
                <Header logo={logo} flag={flagLogo} dataContactUs={contactus} active={4}/>
                    <div className="page-content">
                        <Banner data={description} pagename="Contact Us" />
                        <div className="container">
                            <br />
                            <div className="mt-post-text">
                                <p>{description.length > 0 ? description[0].description:""}</p>
                            </div>

                            <div className="gmap-outline">
                                <GoogleMaps
                                apiKey={"AIzaSyAfY1DRbspf6E3jYUso-PeI_tdfRXA59i0"}
                                style={{height: "400px", width: "100%"}}
                                zoom={12}
                                center={{lat: Number(location.length > 0?location[0].latitud:"14.573380915641735"), lng: Number(location.length > 0?location[0].longuitud:"-90.5571222557638")}}
                                markers={{lat: Number(location.length > 0?location[0].latitud:"14.573380915641735"), lng: Number(location.length > 0?location[0].longuitud:"-90.5571222557638")}} //optional
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <OurSpecialization data={ourservices} />
                    <OurServices3 data={shipping}/>
                <Footer logo={logo} flag={flagLogo} dataContactUs={contactus} dataFooter={footer}/>
            </>
        )}
        
    </>
  )
}

export default Location