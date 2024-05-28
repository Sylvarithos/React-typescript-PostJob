import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Grid } from '@mui/material';
function DownloadSection() {
    return (
        <div className="mt-10 py-16 px-16 bg-download-back bg-no-repeat bg-cover">
            <h1 className='font-bold text-[40px] text-black'>Download Our Super App</h1>
            <h3 className='mb-6 text-[25px] text-black'>Available for iOS and Android</h3>
            <tr>
                <td><img src='./images/Home/Download/google.png' alt="Google Play"></img></td>
                <td><img src='./images/Home/Download/apple.png' alt="App Store"></img></td>
            </tr>
        </div >
    )
}

export default DownloadSection
