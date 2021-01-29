import React from 'react'
import "./App.css"

const Film = ({name, url, rating, id }) => {
    return (
        <div className="film" key={id}>
            <img src={url} alt={name}  className="film--image"/>
            <div className="film--text">
            <h3>{name}</h3>
            <p>Rating - {rating}</p>
            </div>
        </div>
    )
}

export default Film
