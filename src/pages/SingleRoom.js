import React, { Component } from 'react'
import defaultBcg from "../images/room-1.jpeg"
import Hero from "../Components/Hero"
import Banner from "../Components/Banner"
import {Link} from "react-router-dom"
import {RoomContext} from "../context"
import StyledHero from "../Components/StyledHero"


export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            slug: this.props.match.params.slug,
            defaultBcg
        }
    }

    componentDidMount(){
        
    }

    static contextType = RoomContext

    render() {
        const {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if(!room){
            return <div className="error">
                <Hero>
                    <Banner title="No Room found :(">
                        <Link className="btn-primary" to="/">
                            Home
                        </Link> 
                    </Banner>
                </Hero>
            </div>
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room
        const [mainImg,...defaultImg] = images
        return (
            <>
            <StyledHero img={mainImg}>
                <Banner title={name}>
                    <Link to="/rooms" className="btn-primary">
                        Back to Rooms
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="single-room-images">
                    {defaultImg.map((item,index) => <img key={index} src={item} alt={name}/>)}
                    
                </div>
                <div className="single-room-info">
                    <article className="desc">
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>Info</h3>
                        <h6>price : ${price}</h6>
                        <h6>size : {size}SQFT</h6>
                        <h6>Max Capacity : {capacity} {capacity > 1? "People" : "Person"}</h6>
                        <h6>Pet : {pets? "Allowed" : "Not Allowed"}</h6>
                        <h6>{breakfast? "Free Breakfast included" : ""}</h6>
                    </article>
                </div>
            </section>
            <section className="room-extras">
                <h6>Extras</h6>
                <ul className="extras">
                    {extras.map((item,index)=> <li key={index}>{item}</li>)}
                </ul>
            </section>
            </>
        )
    }
}