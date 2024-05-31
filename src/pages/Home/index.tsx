import Header from '../common/Header'
import HeroSection from './HeroSection'
import ClientSection from './ClientSection'
import ServiceSection from './ServiceSection/'
import FindJobSection from './FindJobSection'
import FeaturedServicesSection from './FeaturedServicesSection'
import MarketPlaceSection from './MarketPlaceSection'
import TestimonailsSection from './TestimonailsSection'
import DownloadSection from './DownloadSection'
import Footer from '../common/Footer'
import ScrollToTopButton from '../components/ScrolltotopButton'

function Home() {
    return (
        <div>
            <Header theme='dark' />
            <HeroSection />
            <ClientSection />
            <ServiceSection />
            <FindJobSection />
            <FeaturedServicesSection />
            <MarketPlaceSection />
            <TestimonailsSection />
            <DownloadSection />
            <Footer theme='dark' />
            {/* <ScrollToTopButton /> */}
        </div>
    )
}

export default Home
