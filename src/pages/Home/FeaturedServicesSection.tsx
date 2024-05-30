import { Grid } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
function FeaturedServicesSection() {
    return (
        <div className='container mx-auto px-20 my-12'>
            <div className='mt-[90px]'>
                <div className='font-bold text-3xl text-blank'>
                    Featured Services
                    <span className='text-xl text-[#07242b] float-right'>
                        View all
                        <PlayArrowIcon style={{ paddingBottom: '0.3rem', marginTop: '0.2rem', fontSize: '1.8rem' }} />
                    </span>
                </div>
                <Grid container spacing={4}>
                    <Grid item xs={6} md={4}>
                        <div className='rounded-[10px] bg-[#07242B]'>
                            <img src='./images/Home/FeaturedServices/1.png' alt='Marketing' width={'100%'}></img>
                            <h2 className='py-6 text-center text-3xl text-white'>Marketing</h2>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <div className='rounded-[10px] bg-[#07242B]'>
                            <img src='./images/Home/FeaturedServices/2.png' alt='Marketing' width={'100%'}></img>
                            <h2 className='py-6 text-center text-3xl text-white'>Web Development</h2>
                        </div>
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <div className='rounded-[10px] bg-[#07242B]'>
                            <img src='./images/Home/FeaturedServices/3.png' alt='Marketing' width={'100%'}></img>
                            <h2 className='py-6 text-center text-3xl text-white'>Construction</h2>
                        </div>
                    </Grid>
                </Grid>
                <hr className='mt-12' style={{ borderTop: '1px dashed black' }} />
            </div>
        </div>
    )
}

export default FeaturedServicesSection
