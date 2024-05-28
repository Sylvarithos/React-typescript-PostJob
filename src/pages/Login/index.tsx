import Header from '../../features/Home/Header'

import { Paper, Typography, TextField, Checkbox, Button, Divider, Box } from '@mui/material'
import { FacebookOutlined } from '@mui/icons-material'
import { Google } from '@mui/icons-material'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <>
            <Header />
            <div>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh', // Make sure the container spans the entire viewport height
                    }}
                >
                    <Paper
                        sx={{
                            width: '600px',
                            padding: 4,
                            textAlign: 'center',
                        }}
                        elevation={3}
                    >
                        <Typography variant='h4' gutterBottom>
                            Login
                        </Typography>
                        <TextField sx={{ marginBotom: 2 }} label='Email' fullWidth />
                        <TextField sx={{ marginBotom: 2 }} label='Password' type='password' fullWidth />
                        <div>
                            <Checkbox defaultChecked />
                            <Typography>Remember me</Typography>
                        </div>
                        <Button variant='text' color='primary'>
                            Forgot Password
                        </Button>
                        <Button size='large' variant='contained' color='secondary' fullWidth sx={{ fontWeight: 'bold', textTransform: 'none' }}>
                            Login
                        </Button>
                        <Divider sx={{ marginY: 3 }}>
                            <Typography>OR</Typography>
                        </Divider>
                        <Button
                            sx={{ fontWeight: 'bold', textTransform: 'none', marginBottom: 2 }}
                            size='large'
                            variant='contained'
                            color='primary'
                            fullWidth
                            startIcon={<FacebookOutlined />}
                        >
                            Continue with Facebook
                        </Button>
                        <Button
                            sx={{ fontWeight: 'bold', textTransform: 'none', marginBottom: 2 }}
                            size='large'
                            variant='outlined'
                            color='primary'
                            fullWidth
                            startIcon={<Google />}
                        >
                            Continue with Google
                        </Button>
                        <Typography variant='body2' mb={1}>
                            Offerin a service?{' '}
                            <Link to='' style={{ textDecoration: 'underline' }}>
                                Join as professional
                            </Link>
                        </Typography>
                        <Typography variant='body2'>
                            Looking for a service?{' '}
                            <Link to='' style={{ textDecoration: 'underline' }}>
                                Get Started
                            </Link>
                        </Typography>
                    </Paper>
                </Box>
            </div>
        </>
    )
}

export default Login
