import React from 'react'
import Grid from '@mui/material/Grid'
import MyCarousel from './Carousel'
import CustomCarousel from './Carousel1'


function ServiceSection() {
    return (
        <div className='w-full bg-[#F2F2F2]'>
            {/* <div className='container mx-auto px-20 pb-12'> */}
            <h2 className='font-bold text-3xl text-blank mb-8 pl-[84px] 2xl:pl-[269px]'>Popular professional services</h2>
            <MyCarousel />
            {/* </div> */}
            {/* <CustomCarousel items={items} /> */}
        </div>
    )
}

export default ServiceSection
