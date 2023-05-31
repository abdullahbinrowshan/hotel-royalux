import React from 'react'
import Availability from './Availability'
import Carousel from './Carousel'
import AboutSection from './AboutSection'

const Home = () => {
    return (
        <>
            <Carousel />
            <Availability />
            <AboutSection />
        </>
    )
}

export default Home