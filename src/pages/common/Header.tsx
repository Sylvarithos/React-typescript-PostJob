import { Button } from '@mui/material'
import { Category, Person, Diversity2 } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { ClassNames } from '@emotion/react'

interface Props {
    theme?: 'light' | 'dark'
}

function Header(props: Props) {
    const { theme = 'light' } = props
    const bgColor = theme === 'light' ? 'bg-white' : 'bg-primary'
    const color = theme === 'light' ? '#07242B' : 'white'
    const imgsrc = theme === 'light' ? './images/logo_white.png' : './images/logo_black.png'

    return (
        <header className={`${bgColor} sticky border-b-[1px]  top-0 z-40 py-[5.5px] w-full border-b-slate-300`}>
            <div className='container mx-auto px-4'>
                <nav className=' py-5 px-16'>
                    <div className='flex flex-wrap items-center justify-between px-3  align-middle'>
                        <div className='flex items-center'>
                            <Link to='/'>
                                <img src={imgsrc} className='h-6 mr-3 sm:h-14' alt='Landwind Logo' />
                            </Link>
                            <span className='w-4 h-8 border-r border-slate-500'>&nbsp;</span>
                            <Link to='/categories' className={`text-${color} self-center font-thin whitespace-nowrap px-12`}>
                                <div style={{ display: 'flex', alignItems: 'center' }} className='space-x-4'>
                                    {/* <Category /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                                    </svg>

                                    <Button style={{ color, textTransform: 'none' }}>Categories</Button>
                                </div>
                            </Link>
                            <Link to='/howitworks' className={`text-${color} self-center font-thin whitespace-nowrap`}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Diversity2 />
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
            </div>
        </header>
    )
}

export default Header
