import React from 'react'
import RoomsFilter from "./RoomsFilter"
import RoomList from "./RoomList"
import {withRoomConsumer} from "../context"
import Loading from "./loading"

function RoomContainer({context}){
    const {loading,sortedRooms,rooms} = context
if(loading)
    return <Loading/>
        return(
            <div>
                
                <RoomsFilter rooms={rooms}/>
                <RoomList rooms={sortedRooms}/>
            </div>)
        
}

export default withRoomConsumer(RoomContainer)

// import React from 'react'
// import RoomsFilter from "./RoomsFilter"
// import RoomList from "./RoomList"
// import {RoomConsumer} from "../context"
// import Loading from "./loading"

// export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const {loading, sortedRooms, rooms} = value
//                     if(loading)
//                         return <Loading/>
//                     else{
//                         console.log(value)
//                         return(
//                         <div>
//                             Hello from Rooms Container
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomList rooms={sortedRooms}/>
//                         </div>)
//                     }
//                 }
//             }
//         </RoomConsumer>
//     )
// }
