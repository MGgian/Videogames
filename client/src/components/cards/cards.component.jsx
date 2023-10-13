import "./cards.css"

import React from 'react';
import Card from "../card/card.component";

const Cards = ({allGames}) => {
  return (
    <div className='cards-container'>
      {allGames.map(g=> <Card 
      name={g.name} 
      description={g.description} 
      platforms={g.platforms} 
      image={g.image} 
      released={g.released} 
      rating={g.rating} 
      genres={g.genre}/>)}
    </div>
  )
}

export default Cards;
