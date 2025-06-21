import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import VideoComponent from '../../components/video/video'
import Categorya from '../../components/Category/categorya'
import Category2 from '../../components/Category2'
import MobileBottomNav from '../Footer/Footer'

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <Hero/>
                <Category2/>
                <VideoComponent/>
                <Categorya/>
                <MobileBottomNav/>
            </div>
        </>
    )
}

export default Home