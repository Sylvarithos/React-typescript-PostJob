import { Paper, TextField, InputAdornment, Button, Divider, Grow, Popper, MenuItem, MenuList, ClickAwayListener } from '@mui/material'
import { Search, Place } from '@mui/icons-material'
import { useState, useRef, useEffect } from 'react'

const whereFields = [
    'Commercial Legal Services',
    'Debt Recovery & Collection',
    'Franchising',
    'Intellectual Property & Patent Lawyer',
    'Artist',
    'CNC Machine Services',
    '3D Modeling and CAD Services',
    'Advert Design',
    'Animation',
    'Binding',
    'Brand Design',
    'Brochure Design',
    'Business Card Design',
    'Arbitration Services',
    'Employment Law Specialists',
    'Bankruptcy Lawyer',
]

declare global {
    interface Window {
        google: typeof google
    }
}

function HeroSection() {
    const [open, setOpen] = useState(false)
    const [whereInput, setWhereInput] = useState('')

    const inputRef = useRef<HTMLInputElement>(null) // Create a ref to store the input element reference
    const anchorRef = useRef<HTMLButtonElement>(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event: Event | React.SyntheticEvent, field?: string) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return
        }

        if (field) {
            setWhereInput(field)
        }

        setOpen(false)
    }

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        } else if (event.key === 'Escape') {
            setOpen(false)
        }
    }

    useEffect(() => {
        if (window.google && window.google.maps) {
            searchEvent()
        }
    }, [])

    const searchEvent = () => {
        // Create a new instance of the Google Maps Places Autocomplete when the component mounts
        if (inputRef.current) {
            new window.google.maps.places.SearchBox(inputRef.current)
        }
    }

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
                                onClick={handleToggle}
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
                                value={whereInput}
                                variant='standard'
                                inputRef={anchorRef}
                            />
                            <Popper open={open} anchorEl={anchorRef.current} role={undefined} placement='bottom-start' transition disablePortal>
                                {({ TransitionProps, placement }) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{
                                            transformOrigin: placement === 'bottom-start' ? 'left top' : 'left bottom',
                                        }}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleClose}>
                                                <MenuList
                                                    autoFocusItem={open}
                                                    id='composition-menu'
                                                    aria-labelledby='composition-button'
                                                    onKeyDown={handleListKeyDown}
                                                >
                                                    {whereFields.map((field) => (
                                                        <MenuItem onClick={(event) => handleClose(event, field)}>{field}</MenuItem>
                                                    ))}
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
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
                                inputRef={inputRef}
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
