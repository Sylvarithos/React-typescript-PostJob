import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Grid } from '@mui/material'
function TestimonailsSection() {
    return (
        <section className='w-full'>
            <div className='container mx-auto px-20 pt-6 pb-2'>
                <div className=' py-16 px-16 bg-no-repeat'>
                    <div className='text-center font-bold text-[51px] text-black mt-10'>Testimonails</div>
                    <div className='text-[25px] text-black text-center mt-6'>Interdum et malesuada fames ac ante ipsum</div>
                    <div className='font-bold text-[195px] text-[#07242b] text-center'>“</div>
                    <div className='text-center text-[25px] text-black'>
                        Interdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et
                        malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada
                        fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsum
                    </div>
                    <h2 className='mt-20 text-center font-bold text-3xl text-black'>Thomil Kalus</h2>
                    <div className='mt-1 mb-10 text-center text-[25px] text-black'>Bank Manager, United Arab.</div>
                    <Grid container direction='row' justifyContent='center' alignItems='center' spacing={6}>
                        <Grid item>
                            <img src='./images/Home/Testimonails/1.png'></img>
                        </Grid>
                        <Grid item>
                            <img src='./images/Home/Testimonails/2.png'></img>
                        </Grid>
                        <Grid item>
                            <br />
                            <img src='./images/Home/Testimonails/3.png'></img>
                        </Grid>
                        <Grid item>
                            <img src='./images/Home/Testimonails/4.png'></img>
                        </Grid>
                        <Grid item>
                            <img src='./images/Home/Testimonails/5.png'></img>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </section>
    )
}

export default TestimonailsSection
