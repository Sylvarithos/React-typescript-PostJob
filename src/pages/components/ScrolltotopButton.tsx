// ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import './scrolltotop.css'

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Fab
      sx={{
        display: isVisible ? 'block' : 'none',
        position: 'fixed',
        bottom: '50px',
        right: '50px',
        zIndex: 99,
        width: '70px',
        height: '70px'
      }}
      aria-label="scroll-to-top"
      onClick={scrollToTop}
      className='fab-animated fab-button'
    >
      {/* <img src='./images/arrowup.png' /> */}
    </Fab>
  );
};

export default ScrollToTopButton;
