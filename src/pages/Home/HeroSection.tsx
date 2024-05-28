import { Paper, TextField, InputAdornment, Button, Typography } from '@mui/material'
import Divider from '@mui/material/Divider'
import { Search, Place } from '@mui/icons-material'

function HeroSection() {
    return (
        <section className='w-full'>
            <div className='bg-heroSection-back bg-cover border-gray-200 py-5 px-16'>
                <div className='py-36'>
                    <h1 className='text-8xl text-white'>
                        Find the perfect
                        <br />
                        professional for you.
                    </h1>
                    <p className='text-4xl text-white my-14'>Get free quotes within minutes</p>
                    <div style={{ display: 'inline-block' }}>
                        <Paper component='form' sx={{ p: '5px 16px', display: 'flex', alignItems: 'center' }}>
                            <TextField
                                id='input-where'
                                placeholder='Where are you looking for?'
                                InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Search />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        fontSize: '20px',
                                        width: '350px',
                                    },
                                }}
                                variant='standard'
                            />
                            <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
                            <TextField
                                id='input-postcode'
                                placeholder='Postcode'
                                InputProps={{
                                    disableUnderline: true,
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Place />
                                        </InputAdornment>
                                    ),
                                    style: {
                                        fontSize: '20px',
                                        width: '250px',
                                    },
                                }}
                                variant='standard'
                            />
                            <Button color='secondary' variant='contained' style={{ padding: '10px 30px', textTransform: 'none', fontSize: '20px' }}>
                                Search
                            </Button>
                        </Paper>
                    </div>
                    <p className='text-4xl text-white my-14'>Popular: House Cleaning, Web Design, Personal Trainers</p>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
