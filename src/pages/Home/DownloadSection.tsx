import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import { Grid } from '@mui/material'
function DownloadSection() {
    return (
        <section className='w-full bg-secondary'>
            <div className='container mx-auto px-4'>
                <div className='py-16 px-16 bg-download-back bg-no-repeat bg-cover'>
                    <h1 className='font-bold text-[40px] text-black'>Download Our Super App</h1>
                    <h3 className='text-[25px] text-black mb-5'>Available for iOS and Android</h3>
                    <tr>
                        <td>
                            <img src='./images/Home/Download/google.png' alt='Google Play'></img>
                        </td>
                        <td>
                            <img src='./images/Home/Download/apple.png' alt='App Store'></img>
                        </td>
                    </tr>
                </div>
            </div>
        </section>
    )
}

export default DownloadSection
