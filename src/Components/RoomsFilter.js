import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from "../Components/Title"

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext)
    const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets} = context
    const getUnique = (items,value)=> {
        return [...new Set(items.map(item => item[value]))]
    }
    // Get uniqe types
    let types = getUnique(rooms,"type")
    //get All
    types = ['all',...types]
    //map to jsx
    types = types.map((item,index)=> {
    return (<option value={item} key={index}>{item}</option>)
    })
    let people = getUnique(rooms,"capacity")
    people = people.map((item,index) => <option value={item} key={index}>{item}</option>)

    return (
        <section className="filter-container">
            <Title title="Search Rooms"></Title>
                <form className="filter-form">
                    {/*select type*/}
                        <div className="form-group">
                            <label htmlFor="type">Room Type</label>
                                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                                    {types}
                                </select>
                        </div>
                    {/*end select guest*/}
                    {/*select type*/}
                    <div className="form-group">
                            <label htmlFor="capacity">Guest </label>
                                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                                    {people}
                                </select>
                        </div>
                    {/*end select type*/}
                    {/*select room price*/}
                    <div className="form-group">
                            <label htmlFor="price">Room Price ${price}</label>
                            <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"/>
                        </div>
                    {/*end room price*/}
                    {/*size*/}
                    <div className="form-group">
                            <label htmlFor="size">Room Size</label>
                            <div className="size-inputs">
                                <input type="number" name="minSize" value={minSize} onChange={handleChange} className="size-input"/>
                                <input type="number" name="maxSize" value={maxSize} onChange={handleChange} className="size-input"/>
                            </div>
                        </div>
                    {/*size*/}
                    {/* extras */}
                    <div className="form-group">
                        <div className="single-extra"> 
                            <input type="checkbox" value={breakfast} onChange={handleChange} name="breakfast" id="breakfast"></input>
                            <label htmlFor="breakfast">breakfast</label>
                        </div>
                        <div className="single-extra"> 
                            <input type="checkbox" value={pets} onChange={handleChange} name="pets" id="pets"></input>
                            <label htmlFor="pets">Pets Allowed?</label>
                        </div>
                    </div>
                    {/* extras */}
                </form>
        </section>
    )
}
