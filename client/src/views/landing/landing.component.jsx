// import './create.styles.css';

// function Landing() {
//   return (
//     <div>
//       <h1>Estas en el Landing</h1>
//     </div>
//   );
// }

// export default Landing;

// import  style from "./landing.module.css";
// import { NavLink } from "react-router-dom";

// const LandingPage = () => {
//   return (
//     <div className={style.container}>
//       <div className={style.content}>
//         <div className={style.containerText}>
//           <div>
//             <h1 className={style.tittle}>VIDEOGAMES!</h1>
//             <p className={style.p}>
//             ¡Bienvenido un ATAQUE PESADO! Si eres amante de los videojuegos, 
//             este es el lugar perfecto para ti. Aquí encontrarás una amplia 
//             selección de géneros para que puedas encontrar el juego perfecto 
//             para ti. Además, cada género viene con su descripción y características 
//             para que puedas tomar la mejor decisión a la hora de elegir tu nuevo 
//             videojuego. Pero eso no es todo, también te damos la oportunidad de 
//             compartir tu juego favorito. Amantes caninos. Puedes subir fotos y 
//             detalles para que todos puedan ver las características de tu juego. 
//             Explora nuestra selección de razas y comparte la alegría de tener un 
//             perro en tu vida. ¡HEAVY ATTACK te da la bienvenida a esta comunidad 
//             llena de juegos.
//             </p>
//             <div className={style.buttonContainer}>
//               <NavLink to="/home" className={style.navlink}>
//                 <button className={style.button}>Home</button>
//               </NavLink>
//               <NavLink to="/create" className={style.navlink}>
//                 <button className={style.button}>Add your Game</button>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//         <div className={style.circleContainer}></div>
//         <img src="" alt="Dog" className={style.image} />
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


//////////////////////////////?//?
///////////////////
////////////////


import styles from "./landing.module.css"
import {Link} from "react-router-dom";

import { useState, useEffect } from 'react';

const Landing = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.landing}>
      {loading ? (
        <div className={styles.spinner}>
          <div className={styles.bounce1}></div>
          <div className={styles.bounce2}></div>
          <div className={styles.bounce3}></div>
          
        </div>
      ) : (
        <div className={styles.content}>
          <h1>Welcome to videogames APP</h1>


          <Link to="/home">
          <button className={styles.button}>Go to Home!</button>
          </Link>
          <Link to="/create">
            <button className={styles.button}> Go to Create!</button>
          </Link>

        </div>
      )}
    </div>
  );
};

export default Landing;