import { Button } from '@mui/material'
import { Category, Person } from '@mui/icons-material'
import { Link } from 'react-router-dom'

interface Props {
    theme?: 'light' | 'dark';
}

function Header(props: Props) {
    const { theme = 'light' } = props
    const bgColor = theme === 'light' ? 'white' : 'primary'
    const color = theme === 'light' ? '#07242B' : 'white'

    return (
        <header className='w-full border-b border-b-slate-500'>
            <nav className={`bg-${bgColor} border-gray-200 py-5 px-16`}>
                <div className='flex flex-wrap items-center justify-between px-4 mx-auto'>
                    <div className='flex items-center'>
                        <Link to='/'>
                            <img src='./images/logo.png' className='h-6 mr-3 sm:h-14' alt='Landwind Logo' />
                        </Link>
                        <span className='w-4 h-8 border-r border-slate-500'>&nbsp;</span>
                        <Link to='/categories' className={`text-${color} self-center font-thin whitespace-nowrap px-12`}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Category />
                                <Button style={{ color, textTransform: 'none' }}>Categories</Button>
                            </div>
                        </Link>
                        <Link to='/howitworks' className={`text-${color} self-center font-thin whitespace-nowrap`}>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Category />
                                <Button style={{ color, textTransform: 'none' }}>How it Works</Button>
                            </div>
                        </Link>
                    </div>
                    <div className='flex items-center lg:order-2'>
                        <Link to='/login' className={`text-${color} self-center font-thin whitespace-nowrap px-6`}>
                            Login
                        </Link>
                        <Button color='secondary' variant='contained' startIcon={<Person />} style={{ textTransform: 'none', borderRadius: '10px' }}>
                            Join as a Server Provider
                        </Button>
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
        </header>
    )
}

export default Header
