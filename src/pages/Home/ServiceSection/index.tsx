import React from "react";
import Grid from '@mui/material/Grid';
import MyCarousel from "./Carousel";
function ServiceSection() {
    return (
        <div className="mt-16">
            <h2 className="font-bold text-3xl text-blank mb-8">
                Popular professional services
            </h2>
            <MyCarousel />
        </div>
    )
}

export default ServiceSection;
