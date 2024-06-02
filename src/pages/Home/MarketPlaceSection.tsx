import { RocketLaunch } from '@mui/icons-material'
import { Button } from '@mui/material'

function MarketPlaceSection() {
    return (
        <section className=' bg-primary '>
            <div className='mx-[185px] container'>
                <div className='bg-marketing-logo bg-no-repeat bg-contain relative h-[911px] py-16'>
                    <div className='py-16 ml-[870px]'>
                        <h1 className='font-bold text-[49px] text-white leading-tight'>Join World's Best Marketplace for Workers</h1>
                        <h3 className='mt-[40px] mb-[30px] text-[24px] text-white leading-tight'>
                            Amet minim mollit non deserunt ullamco est sit<br />
                            aliqua dolor do ametsint. Velit Officia consequat <br />
                            duis enim velit mollit. Exercitation veniam <br />
                            consequat sunt nostrud amet.
                        </h3>
                        <p className='text-[24px] text-white leading-tight indent-[-15px] ml-[15px] mb-4'>
                            • Connect to freelancers with proven business<br /> experience
                        </p>
                        <p className='text-[24px] text-white leading-tight indent-[-15px] ml-[15px] mb-4'>
                            • Get matched with the perfect talent by a <br /> customer success manager
                        </p>
                        <p className='text-[24px] text-white leading-tight indent-[-15px] ml-[15px] mb-8'>
                            • Unmatched quality of remote, hybrid, and <br /> flexible jobs
                        </p>
                        <Button
                            color='secondary'
                            variant='contained'
                            sx={{ padding: '1.3rem 6rem', marginTop: '1rem', textTransform: 'none', fontSize: '15px', color: 'black', fontWeight: 'bold' }}
                            size='large'
                            endIcon={<RocketLaunch />}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>

            {/* <div className='container mx-auto px-[83px] pb-12'>
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

                        <button className="bg-secondary hover:bg-yellow-600 text-black font-bold py-[22px] px-[100px] mt-8 rounded-md shadow-md transition duration-300 ease-in-out">
                            Place new request &nbsp;&nbsp;
                            {/* <RocketLaunchIcon /> */}
            {/* </button>
                    </div >

                </div >

            </div > * /} */}
        </section >
    )
}

export default MarketPlaceSection
