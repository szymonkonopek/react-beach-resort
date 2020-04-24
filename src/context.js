import React, { Component } from 'react'
import items from "./data"
import Client from "./contentful"

const RoomContext = React.createContext()



class RoomProvider extends Component {
    state={
        rooms:[],
        sortedRoms:[],
        featuredRooms:[],
        loading:true,
        type:"all",
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    }

    getData = async () => {
        try {
            let response = await Client.getEntries({
                content_type:"beachResortRoom",
                order: "fields.price"
            })
        
        let rooms = this.formatData(response.items)
        let featuredRooms = rooms.filter(room =>
            room.featured === true)
        let maxPrice = Math.max(...rooms.map(item => item.price))
        let maxSize = Math.max(...rooms.map(item => item.size))
            this.setState({
                rooms:rooms
                ,featuredRooms:featuredRooms
                ,sortedRooms:rooms
                ,loading:false,
                price:maxPrice,
                maxPrice:maxPrice,
                maxSize:maxSize
                })
            
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const target = event.target
        const value = target.type === "checkbox"? target.checked : target.value
        const name = event.target.name
        this.setState({
            [name]:value
        },this.filterRooms) //callback func, only when state changed
        //console.log(`this is type: ${type}, name: ${name}, value: ${value} `)
    }
    filterRooms = () => {
        let {
            rooms,type,capacity,price, minSize, maxSize, breakfast, pets
        } = this.state
        let tempRooms = [...rooms]  //????????
        //capacity = parseInt(capacity)

        //filter by type
        if (type !== "all"){
            tempRooms = tempRooms.filter(room => room.type === type)
        }
        //filter by capacity
        if (capacity !== 1){
            tempRooms = tempRooms.filter(room =>room.capacity >= capacity)
        }
        //filter by price
        if(price !== 0){
            tempRooms = tempRooms.filter(room => room.price <= price)
        }
        //filter by size
            tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)
        //filter by breakfast
            if(breakfast)
                tempRooms = tempRooms.filter(room => room.breakfast === true)
            
        //filter by pets
            if(pets)
                tempRooms = tempRooms.filter(room => room.pets === true)
                console.log(tempRooms)
            this.setState({
            sortedRooms:tempRooms
        })
    }

    componentDidMount(){
        this.getData()
    }

    formatData(items){
        let tempItems = items.map(item => {
        let id = item.sys.id
        let images = item.fields.images.map(image => image.fields.file.url)
        let room = {...item.fields,images:images,id:id}

        
            return room
        })
        return tempItems
    }

    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms]
        const room = tempRooms.find((room) => room.slug === slug)
        return room
    }

    render() {
        return (
        <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>{this.props.children}</RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value}/>}
        </RoomConsumer>
    }
}

export {RoomProvider,RoomConsumer,RoomContext}