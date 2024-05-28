import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
function FindJobSection() {
    return (
        <div className='w-full bg-[#F2F2F2]'>
            <div className='container mx-auto px-20 pt-6 pb-12'>
                <div className='bg-find-job-back h-[412px] rounded-[10px] bg-cover'>
                    <Grid container>
                        <Grid item xs={6} md={8}>
                            <h1 className='pt-16 pl-24 font-bold text-[50px] text-white leading-tight'>
                                Find the perfect <br /> professional for you.
                            </h1>
                            <h5 className='pt-4 pl-24 text-xl text-white'>
                                Connects with talents that gts you, and hire them to take <br />
                                your business to the next level.
                            </h5>
                            <Button
                                color='secondary'
                                variant='contained'
                                sx={{ margin: '2rem 6rem', padding: '1rem 4rem', textTransform: 'none', fontSize: '15px', color: 'white' }}
                                size='large'
                            >
                                Get Started
                            </Button>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <img className='float-right m-3 rounded-[10px] w-[435px] h-[389]' src='./images/Home/FindJob/logo.png'></img>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default FindJobSection
