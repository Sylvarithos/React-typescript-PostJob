import { RocketLaunch } from '@mui/icons-material'
import { Button } from '@mui/material'

function MarketPlaceSection() {
    return (
        <section className='w-full bg-primary bg-marketing-logo bg-cover'>
            <div className='container mx-auto px-20 pt-6 pb-12'>
                <div className='py-24 ml-[790px]'>
                    <h1 className='font-bold text-[49px] text-white leading-tight'>Join World's Best Marketplace for Workers</h1>
                    <h3 className='my-[40px] text-[24px] text-white leading-tight'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do ametsint. Velit Officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt nostrud amet.
                    </h3>
                    <p className='text-[24px] text-white leading-tight indent-[-15px] ml-[15px] mb-4'>
                        • Connect to freelancers with proven business experience
                    </p>
                    <p className='text-[24px] text-white leading-tight indent-[-15px] ml-[15px] mb-4'>
                        • Get matched with the perfect talent by a customer success manager
                    </p>
                    <p className='text-[24px] text-white leading-tight indent-[-15px] ml-[15px] mb-8'>
                        • Unmatched quality of remote, hybrid, and flexible jobs
                    </p>
                    <Button
                        color='secondary'
                        variant='contained'
                        sx={{ padding: '1.3rem 6rem', textTransform: 'none', fontSize: '15px', color: 'white' }}
                        size='large'
                        endIcon={<RocketLaunch />}
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default MarketPlaceSection
