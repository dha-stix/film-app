import React from 'react'
import "./App.css"
import Film from './Film'

const Body = () => {
    
    const films = [
        {
            id : 1,
            name : "Jaws",
            url : "https://images.moviesanywhere.com/246283329b6fbec9158c89d2c8a76bfe/3f2f72c0-6820-413f-a347-173d330d27ed.jpg",
            rating : "8.0/10"
        },
        {
            id : 2,
            name : "Aliens",
            url : "https://upload.wikimedia.org/wikipedia/en/f/fb/Aliens_poster.jpg",
            rating : "8.3/10"
        }, 
        {
            id : 3,
            name : "Bad Santa",
            url : "https://gonewiththetwins.com/new/wp-content/uploads/2016/11/badsanta.jpg",
            rating : "7/10"
        }, {
            id : 4,
            name : "Casablanca",
            url : "https://miro.medium.com/max/5682/1*wS2bkULLvzW_IIke_R9iyg.jpeg",
            rating: "8.5/10"      
        }, {
            id : 5,
            name : "Ghost",
            url : "https://www.clearplay.com/MovieBattle/images/tt0099653-1.jpg",
            rating : "7.1/10"
        }, {
            id : 6,
            name : "Twister",
            url : "https://m.media-amazon.com/images/M/MV5BODExYTM0MzEtZGY2Yy00N2ExLTkwZjItNGYzYTRmMWZlOGEzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
            rating : "6.4/10"
        }, {
            id : 7,
            name : "Legally Blonde",
            url : "https://images-na.ssl-images-amazon.com/images/I/81DSXEfOZUL._RI_.jpg",
            rating : "6.3/10"
        }, {
            id : 8,
            name: "Elf",
            url : "https://images.hungama.com/c/1/85b/93f/22902712/22902712_1280x800.jpg",
            rating : "7/10"
        },
        {
            id : 9,
            name : "Zoolander",
            url : "https://image.tmdb.org/t/p/w500/g2wyjq8Ug7NJSpeht4BBOhsTObC.jpg",
            rating : "6.5/10"
        }
    ]
    return (
        <div className="body">
            <h2>Film App</h2>
            <div className="films">
                {films.map(film =>  <Film  
                name={film.name} 
                url={film.url} 
                rating={film.rating} 
                id={film.id}/> )}
            </div>
        </div>
    )
}

export default Body
