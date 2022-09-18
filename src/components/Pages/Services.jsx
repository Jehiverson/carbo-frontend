import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import ProjectGrid from './ProjectGrid';
import { HOST } from '../../constants/defaultSetting';
import Loader from "../../components/Elements/Loader";

const Services = () => {

    const [loading, setLoading] = useState(true);
    const [flagLogo, setFlagLogo] = useState(false);
    const [logo, setLogo] = useState("");
    const [footer, setFooter] = useState([]);
    const [products, setProducts] = useState([]);
    const [contactus, setContactUs] = useState([]);

    const getDataLogoAndSlogan = async () => {
        const getDataLogoAndSlogan = await fetch(`${HOST}logoAndSlogan`)
          .then(response => response.json())
          .then(data => { return data.data });
        if (getDataLogoAndSlogan) {
            setLogo(getDataLogoAndSlogan);
            setFlagLogo(true);
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

      const getDataContactUs = async () => {
        const getDataContactUs = await fetch(`${HOST}contactus`)
          .then(response => response.json())
          .then(data => { return data.data })
          console.log(getDataContactUs)
        if (getDataContactUs) {
          setContactUs(getDataContactUs);
        }
      };

      const getDataProducts = async () => {
        const getDataProducts = await fetch(`${HOST}products`)
          .then(response => response.json())
          .then(data => { return data.data });
        if (getDataProducts) {
            setProducts(getDataProducts);
        }
      };

      useEffect(()=>{
        getDataLogoAndSlogan()
        getDataProducts()
        getDataFooter()
        getDataContactUs()
        setTimeout(() => {
         setLoading(false)
        }, 3000);
       },[loading])

    return (
        <>
            {loading ? <Loader/>:(
                <>
                    <Header logo={logo} flag={flagLogo} dataContactUs={contactus} active={3}/>
                        <div className="page-content">
                            <ProjectGrid data={products} />
                            <Footer logo={logo} flag={flagLogo} dataContactUs={contactus} dataFooter={footer}/>
                        </div>
                </>
            )}
        </>
    );
};

export default Services;