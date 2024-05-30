import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import { ArrowForward } from '@mui/icons-material'
import ServiceImage from '../../components/serviceImage'

function FeaturedServicesSection() {
    return (
        <div className='container mx-auto px-20 pb-12'>
            <div className='text-slate-800'>
                <h2 className='font-bold text-3xl text-blank mb-9'>
                    Featured Services
                </h2>
                <div className="grid grid-cols-4 gap-5">
                    <ServiceImage src='./images/Order/service_washing.jpg' alt='Cleaning' content='Get professional cleaning service swiftly anytime you want' />
                    <ServiceImage src='./images/Order/service_graphicdesign.png' alt='Graphics Design' content='Get professional cleaning service swiftly anytime you want' />
                    <ServiceImage src='./images/Order/service_drycleaning.jpg' alt='Dry Cleaning' content='Get professional cleaning service swiftly anytime you want' />
                    <ServiceImage src='./images/Order/service_web.jpg' alt='Web Development' content='Get professional cleaning service swiftly anytime you want' />
                </div>
            </div>
        </div>
    )
}

export default FeaturedServicesSection
