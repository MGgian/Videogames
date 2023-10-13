// import './card.css';
// import styles from "./card.module.css"
// import React from 'react'

// const Card = ({name, description, platforms, image, released, rating, genres }) => {
//   return (
//     <div className='card-cont'>
//     <div className='card-title-cont'>
//       <h4>{name}</h4>
//     </div>
//     <div className='card-info-cont'>
//       <div className='card-info-cont'>
//       <img src={image} alt="image" />
//       </div>
//       <h2>Géneros: {genres?.join(", ")}</h2>
//       <h5>Description:{description}</h5>
//       <h5>Platforms:{platforms}</h5>
//       <h5>Released:{released}</h5>
//       <h5>Rating:{rating}</h5>
//     </div>
//     </div>
    
//   )
// }

// export default Card;
import styles from './card.module.css';
import {Link} from "react-router-dom";

const Card = (props)=>{
    const id = props.id
    return(
        <div className={styles.Container}>
            <Link to={`/detail/${id}`}>
                <button className={styles.button}>{props.name}</button>
            </Link>
            <img className={styles.image} src={props.image} alt="" />
            <p className={styles.text}>Release date:{props.released}</p>
            <p className={styles.text}>Rating: {props.rating}</p>
        </div>
    )
};
 

export default Card;
