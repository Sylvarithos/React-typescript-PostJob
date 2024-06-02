import { Button, Box, Tooltip } from '@mui/material'
import { Person } from '@mui/icons-material'
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { Link } from 'react-router-dom'
import React, { useState, useRef, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ListItemButton from '@mui/material/ListItemButton';


interface Props {
    theme?: 'light' | 'dark'
}


function Header(props: Props) {
    const { theme = 'light' } = props
    const bgColor = theme === 'light' ? 'bg-white' : 'bg-primary'
    const color = theme === 'light' ? '#07242B' : 'white'
    const imgsrc = theme === 'light' ? './images/logo_white.png' : './images/logo_black.png'

    const [isHovered, setIsHovered] = useState(false);
    const hoverTimeoutRef = useRef<number>();

    useEffect(() => {
        if (!isHovered) {
            clearTimeout(hoverTimeoutRef.current);
        }
    }, [isHovered])

    const handleMouseEnter = () => {
        clearTimeout(hoverTimeoutRef.current);
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = window.setTimeout(() => {
            setIsHovered(false);
        }, 500); // Adjust the delay time here (in milliseconds)
    };

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
                        <div className={`flex items-center text-${color} hover:cursor-pointer font-extralight text-[15px] ml-9 font`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}>
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
                    </div>
                </div>
            </nav>

            {isHovered && (
                <div
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-[267px] top-32 rounded-lg "
                >
                    <Paper sx={{ color: 'black' }} elevation={3}>
                        <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                            <div className='px-12 pt-7'>
                                <Typography sx={{ mt: 1, fontSize: 16, fontWeight: 'bold' }} component="div">
                                    Services
                                </Typography>
                                <List sx={{ width: 450 }}>
                                    <ListItemButton >
                                        <ListItemAvatar>
                                            <BusinessCenterIcon />
                                        </ListItemAvatar>
                                        <ListItemText primary="business" />
                                        <IconButton edge="end"  >
                                            <ArrowCircleRightIcon sx={{ color: '#07242B' }} />
                                        </IconButton>
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemAvatar>
                                            <BusinessCenterIcon />
                                        </ListItemAvatar>
                                        <ListItemText primary="business" />
                                        <IconButton edge="end"  >
                                            <ArrowCircleRightIcon sx={{ color: '#07242B' }} />
                                        </IconButton>
                                    </ListItemButton>
                                </List>
                            </div>
                            <div className='px-12 pt-7'>
                                <Typography sx={{ mt: 1, fontSize: 16, fontWeight: 'bold' }} component="div">
                                    Services
                                </Typography>
                                <List sx={{ width: 450 }}>
                                    <ListItemButton >
                                        <ListItemAvatar>
                                            <BusinessCenterIcon />
                                        </ListItemAvatar>
                                        <ListItemText primary="business" />
                                        <IconButton edge="end"  >
                                            <ArrowCircleRightIcon sx={{ color: '#07242B' }} />
                                        </IconButton>
                                    </ListItemButton>
                                    <ListItemButton >
                                        <ListItemAvatar>
                                            <BusinessCenterIcon />
                                        </ListItemAvatar>
                                        <ListItemText primary="business" />
                                        <IconButton edge="end"  >
                                            <ArrowCircleRightIcon sx={{ color: '#07242B' }} />
                                        </IconButton>
                                    </ListItemButton>
                                </List>
                            </div>
                        </Stack>
                    </Paper>
                </div>
            )}
            {/* </div> */}
        </header >
    )
}

export default Header
