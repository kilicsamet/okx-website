"use client";
import React, { useState } from 'react'
import HeroSection from './HeroSection';
import Ticker from './Ticker';
import ProfessionalTrading from './ProfessionalTrading';
import UnlimitedFeatures from './UnlimitedFeatures';
import GuidanceSection from './GuidanceSection';
import WhatIsOKX from './WhatIsOKX';
import FooterSection from './FooterSection';
import VideoGallery from './VideoGallery';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions';
const HomePage = () => {
    const [activeButton, setActiveButton] = useState({
        "OKX hangi ürüleri satıyor?": false,
        "OKX’te nasıl Bitcoin satın alırım?": false,
        "OKX nerede kuruldu?": false,
        "OKX’te kripto al-sat işlemleri nasıl yapılır?": false
    });
    const handleButtonClick = (url) => {
        setActiveButton((prev) => ({
            ...prev,
            [url]: !prev[url]
        }));
    };

    return (
        <>
            <HeroSection/>
           <Ticker/>
           <ProfessionalTrading/>
           <UnlimitedFeatures/>
           <GuidanceSection/>
          <WhatIsOKX/>
          <FooterSection/>
           <VideoGallery/>
        <FrequentlyAskedQuestions
         handleButtonClick={handleButtonClick}
          activeButton={activeButton}
          />
        </>
    )
}

export default HomePage
