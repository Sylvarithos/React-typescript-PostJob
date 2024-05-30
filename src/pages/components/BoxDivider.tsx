
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'

export default function FlexDivider() {
  return (
    <div style={{ width: 'fit-content' }} >
      <Box
        component="form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          bgcolor: 'rgba(0,0,0,0.6)',
          // padding: '8px',
          '& svg': {
            m: 1,
            color: 'inherit'
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField type='email' placeholder='Your email address' sx={{
          '& input': {
            color: 'white'
          },
        }} />
        {/* <input placeholder='Your email address' /> */}
        <Divider orientation="vertical" variant="middle" flexItem sx={{ background: 'gray', marginY: '5px' }} />
        <Button variant="text" style={{ color: 'white', padding: '0rem 1.5rem', }}>Send</Button>
      </Box>
    </div>

  );
}
