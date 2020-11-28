import React from "react";
import "./Card.style.css"

export const Card=({monster})=>{
    return <div className={"card-container"}>
    <h2>{monster.name}</h2>
    <img alt ={monster.name} src={`https://robohash.org/${monster.id}?set=set2`}/>
    <p>{monster.email}</p>
    </div>
}