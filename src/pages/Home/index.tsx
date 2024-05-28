import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../features/Home/Header'
import HeroSection from './HeroSection'

function Home() {
    return (
        <div>
            <Header theme='dark' />
            <HeroSection />
        </div>
    )
}

export default Home
