
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
function FindJobSection() {
    return (
        <div className="mt-[85px] bg-find-job-back h-[412px] rounded-[10px] bg-cover">
            <Grid container>
                <Grid item xs={6} md={8}>
                    <h1 className="pt-16 pl-16 font-bold text-[50px] text-white" >
                        Find the perfect <br/> professional for you.
                    </h1>
                    <h5 className='pt-4 pl-16 text-xl text-white'>
                        Connects with talents that gts you, and hire them to take <br/>your business to the next level.
                    </h5>
                    <Button color="secondary" variant="contained" style={{ margin: '2rem 4rem', padding:'0.5rem 3.5rem', textTransform: 'none', fontSize: '20px', color:'white' }} size='large'>Get Started</Button>
                </Grid>
                <Grid item xs={6} md={4}>
                    <img className='float-right m-3 rounded-[10px] w-[435px] h-[389]' src='./images/Home/FindJob/logo.png'></img>
                </Grid>
            </Grid>
        </div>
    )
}

export default FindJobSection
