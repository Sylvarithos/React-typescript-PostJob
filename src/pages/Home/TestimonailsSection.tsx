import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Grid } from '@mui/material';
function TestimonailsSection() {
    return (
        <div className=" py-16 px-16 bg-no-repeat">
            <h1 className="text-center font-bold text-[50px] text-black mt-10">
                Testimonails
            </h1>
            <h3 className='text-[25px] text-black text-center mt-6'>
                Interdum et malesuada fames ac ante ipsum
            </h3>
            <h1 className='font-bold text-[200px] text-[#07242b] text-center'>
                “
            </h1>
            <h3 className='text-center text-[25px] text-black'>
                Interdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsumInterdum et malesuada fames ac ante ipsum
            </h3>
            <h2 className='mt-16 text-center font-bold text-3xl text-black'>
                Thomil Kalus
            </h2>
            <h3 className='mt-4 mb-10 text-center text-[25px] text-black'>
                Bank Manager, United Arab.
            </h3>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={8}
            >
                <Grid item >
                    <img src='./images/Home/Testimonails/1.png'></img>
                </Grid>
                <Grid item >
                    <img src='./images/Home/Testimonails/2.png'></img>
                </Grid>
                <Grid item >
                    <img src='./images/Home/Testimonails/3.png'></img>
                </Grid>
                <Grid item >
                    <img src='./images/Home/Testimonails/4.png'></img>
                </Grid>
                <Grid item >
                    <img src='./images/Home/Testimonails/5.png'></img>
                </Grid>
            </Grid>
        </div >
    )
}

export default TestimonailsSection
