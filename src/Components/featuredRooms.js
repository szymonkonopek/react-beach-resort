import React, { Component } from 'react'
import {RoomContext} from '../context'
import Loading from "./loading"
import Room from "./Room"
import Title from "./Title"

export default class featuredRooms extends Component {
    static contextType = RoomContext
    render() {
        let {loading,featuredRooms} = this.context
        featuredRooms = featuredRooms.map(room => <Room key={room.id} room={room}/>)

        return (
            <section className="featuredRooms">
                <Title title="featured Rooms"/>
                <div className="featured-rooms-center">
                    {loading? <Loading/> : featuredRooms}
                </div>
            </section>
        )
    }
}
