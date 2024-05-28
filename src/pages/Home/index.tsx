import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../features/Home/Header'
import HeroSection from './HeroSection'
import ClientSection from './ClientSection'
import ServiceSection from './ServiceSection/'
import FindJobSection from './FindJobSection'
import FeaturedServicesSection from './FeaturedServicesSection'
import MarketPlaceSection from './MarketPlaceSection'
import TestimonailsSection from './TestimonailsSection'
import DownloadSection from './DownloadSection'
import Footer from './Footer'

function Home() {
    return (
        <div>
            <Header theme='dark' />
            <HeroSection />
            <div className={`mx-32 mb-12 relative`}>
                <ClientSection />
                <ServiceSection />
                <FindJobSection />
                <FeaturedServicesSection />
            </div>
            <MarketPlaceSection />
            <TestimonailsSection />
            <DownloadSection />
            <Footer />
        </div>
    )
}

export default Home
