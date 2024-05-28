import Grid from '@mui/material/Grid'

function ClientSection() {
    return (
        <div className='w-full bg-[#F2F2F2]'>
            <div className='container mx-auto px-20 py-12'>
                <Grid
                    container
                    direction='row-reverse'
                    justifyContent='center'
                    alignItems='center'
                    // spacing={12}
                    className='bg-[#07242B] bg-opacity-20 py-8 m-0 z-0'
                >
                    <Grid item className='px-10'>
                        <img src='./images/Home/Clients/4.png' alt='Client' />
                    </Grid>
                    <Grid item className='px-10'>
                        <img src='./images/Home/Clients/3.png' alt='Client' />
                    </Grid>
                    <Grid item className='px-10'>
                        <img src='./images/Home/Clients/2.png' alt='Client' />
                    </Grid>
                    <Grid item className='px-10'>
                        <img src='./images/Home/Clients/1.png' alt='Client' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default ClientSection
