import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Grid } from '@mui/material'
import Button from '@mui/material/Button'

interface Props {
    theme?: 'light' | 'dark'
}

function Footer(props: Props) {
    const { theme = 'light' } = props
    const bordercolor = theme === 'light' ? 'border-secondary' : ''
    return (
        <section className={`w-full bg-primary border-t-[14px] ${bordercolor}`} >
            <div className='container mx-auto px-4'>
                <div className='px-16 py-12 bg-footer-back bg-no-repeat bg-cover '>
                    <div className=' flex gap-16 items-start relative bg-transparent'>
                        <h5 className='font-bold text-[20px] text-white'>Terms of Service</h5>
                        <h5 className='font-bold text-[20px] text-white'>Privacy Policy</h5>
                        <h5 className='font-bold text-[20px] text-white'>Site Map</h5>
                    </div>
                    <hr className='my-10' />
                    <Grid container>
                        <Grid item xs={3}>
                            <h5 className='font-bold text-[20px] text-white mb-6'> About </h5>
                            <p className='text-[15px] text-white leading-10'>
                                About Us <br />
                                Become Seller Jobs on Whatworks <br />
                                Pricing <br />
                                Services Whatworks <br />
                                Terms of Service <br />
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <h5 className='font-bold text-[20px] text-white mb-6'> Categories </h5>
                            <p className='text-[15px] text-white leading-10'>
                                Design & Creative <br />
                                Development & IT Music & Audio <br />
                                Programming & Tech <br />
                                Digital Marketing <br />
                                Finance & Accounting <br />
                                Writing & Translation <br />
                                Trending <br />
                                Lifestyle <br />
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <h5 className='font-bold text-[20px] text-white mb-6'> Support </h5>
                            <p className='text-[15px] text-white leading-10'>
                                Help & Support <br />
                                FAQ Whatworks
                                <br />
                                Contact Us <br />
                                Services <br />
                                Terms of Service <br />
                            </p>
                        </Grid>
                        <Grid item xs={3}>
                            <h5 className='font-bold text-[20px] text-white mb-6'> Subscribe </h5>
                        </Grid>
                    </Grid>
                    <hr className='my-10' />
                    <p className='text-[15px] text-white inline'>© Whatworks. 2024 DominionServices. All rights reserved.</p>
                    <Button
                        variant='contained'
                        style={{
                            float: 'right',
                            padding: '0.5rem 3.5rem',
                            textTransform: 'none',
                            fontSize: '15px',
                            color: 'white',
                            backgroundColor: 'rgba(0,0,0,0.6)',
                        }}
                        size='large'
                    >
                        English
                    </Button>
                </div>
            </div>
        </section >
    )
}

export default Footer
