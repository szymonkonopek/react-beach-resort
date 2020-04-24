import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"

export default class Services extends Component {
    state ={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free coctails",
                info: "info coctails"
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info: "Endless possibilities" 
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free Shuttle",
                info: "Free and quick"
            },
            {
                icon:<FaBeer/>,
                title:"Free Alcohol",
                info: "free and quick"
            }
        ]
    }

    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((arg,index)=>{
                        return <article key={index} className="service">
                                    <span>{arg.icon}</span>
                                    <h6>{arg.title}</h6>
                                    <p>{arg.info}</p>
                                </article>
                    })}
                </div>
            </section>
        )
    }
}
