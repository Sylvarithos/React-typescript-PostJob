import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

function FindJobSection() {
    return (
        <div className='container mx-auto px-[83px] pb-12'>
            <div className='bg-find-job-back2 bg-contain relative h-[585px] py-16'>
                <div className='pl-20'>
                    <div className='pt-16 font-bold text-[40px] text-white leading-tight'>
                        Find services for your business on <br /> Whatworks
                    </div>
                    <div className='pt-4 text-xl font-thin text-white'>
                        Most businesses could be getting a better deal on the services they use <br />
                        day to day. We've got thousands of suppliers ready and waiting to <br />quote.
                    </div>
                    <div className='pt-8 text-xl text-white'>
                        Find everything from web designers to bookkeepers and <br />
                        telephone systems to office stationery.
                    </div>
                    {/* <Button
                    color='secondary'
                    variant='contained'
                    sx={{ margin: '2rem 6rem', padding: '1rem 4rem', textTransform: 'none', fontSize: '15px', color: 'white' }}
                    size='large'
                >
                    Place new request
                </Button> */}

                    <button className="bg-secondary hover:bg-yellow-600 text-black font-bold py-[22px] px-[100px] mt-8 rounded-md shadow-md transition duration-300 ease-in-out">
                        Place new request &nbsp;&nbsp;
                        <RocketLaunchIcon />
                    </button>
                </div>

            </div>

        </div>
    )
}

export default FindJobSection
