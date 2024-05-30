import { Button } from '@mui/material'
import { Person } from '@mui/icons-material'
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { Link } from 'react-router-dom'



interface Props {
    theme?: 'light' | 'dark'
}

function Header(props: Props) {
    const { theme = 'light' } = props
    const bgColor = theme === 'light' ? 'bg-white' : 'bg-primary'
    const color = theme === 'light' ? '#07242B' : 'white'
    const imgsrc = theme === 'light' ? './images/logo_white.png' : './images/logo_black.png'

    return (
        <header className={`${bgColor} sticky border-b-[1px]  top-0 z-40 pt-[29px] pb-[25px] w-full border-b-slate-600  pm-[84px] 2xl:pl-[269px] 2xl:pr-64`}>
            {/* <div className='container mx-auto px-4'> */}
            <nav className=' '>
                <div className='flex flex-wrap items-center justify-between  align-middle'>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <img src={imgsrc} className='xl:h-[54px]' alt='Landwind Logo' />
                        </Link>
                        <span className='ml-[1px] w-4 h-10 border-r border-slate-600'>&nbsp;</span>

                        <div className={`flex items-center text-${color} hover:cursor-pointer font-extralight text-[15px] ml-9 font`}>
                            <GridViewOutlinedIcon style={{ width: '1.3rem', marginRight: '0.5rem' }} />
                            <span>Categories</span>
                        </div>
                        <Link to='/howitworks' className={`text-${color} self-center font-thin whitespace-nowrap`}>
                            <div className={`flex items-center text-${color} hover:cursor-pointer font-extralight text-[15px] ml-9 font`}>
                                <HowToVoteIcon style={{ width: '1.3rem', marginRight: '0.5rem' }} />
                                <span>How it Works</span>
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <Link to='/login' className={`text-${color} self-center font-thin whitespace-nowrap px-10 hover:text-secondary`}>
                            Login
                        </Link>
                        <Button color='secondary' variant='contained' startIcon={<Person />} style={{ textTransform: 'none', borderRadius: '10px', height: '35px' }}>
                            <span className='text-[16px]'>Join as a Server Provider</span>
                        </Button>
                        {/* 
                        <button className="bg-secondary hover:bg-yellow-600 text-black h-9 w-60 rounded-md shadow-md transition duration-300 ease-in-out">
                            <PersonIcon />Place new request
                        </button> */}
                        <QuestionMarkOutlinedIcon style={{ height: '1.3rem', color: `${color}` }} />
                        {/* <button
                            data-collapse-toggle='mobile-menu-2'
                            type='button'
                            className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                            aria-controls='mobile-menu-2'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open main menu</span>
                            <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fill-rule='evenodd'
                                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                                    clip-rule='evenodd'
                                ></path>
                            </svg>
                            <svg className='hidden w-6 h-6' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    fill-rule='evenodd'
                                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                                    clip-rule='evenodd'
                                ></path>
                            </svg>
                        </button> */}
                    </div>
                </div>
            </nav>
            {/* </div> */}
        </header>
    )
}

export default Header
