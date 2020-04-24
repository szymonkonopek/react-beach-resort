import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import {Link} from 'react-router-dom'
import Services from "../Components/Services"
import FeaturedRooms from '../Components/featuredRooms'


export default function Home(){
    return(
        <>
        <Hero>
            <Banner title="Beach houses" subtitle="Fell the breeze">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
            </Banner>
        </Hero>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}