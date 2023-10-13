import "./create.css"
import styles from "./Navbar.module.css"
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from "react"
import { getGames, getGenres } from "../../redux/actions/action"
import axios from 'axios';
import NavBar from "../../components/navbar/navbar.component"

function Create() {

  const dispatch = useDispatch()

  const allGames = useSelector((state)=>state.allGames);
  console.log(allGames);

  const allGenres = useSelector((state)=>state.allGenres);
  console.log(allGenres, "soy generos");

  useEffect(()=>{
    dispatch(getGames());
    dispatch(getGenres());
  },[dispatch])

  
  let arrayPlatforms = []
    allGames?.map((g) => {
      arrayPlatforms = [...arrayPlatforms, ...g?.platforms] 
      return arrayPlatforms
    })
    arrayPlatforms = [...new Set(arrayPlatforms)]; //BORRA ELEMENTOS REPETIDOS

  const [state, setState] = useState({ //aca se acumula info de formulario
    name:"",
    description:"",
    platforms:[],
    image:"",
    released:"",
    rating:0,
    genres:[]
  })
  console.log(state)
  
  const [errors, setErrors] = useState({ //se acumula errores de formulario
    name:"",
    description:"",
    platforms:[],
    genres: [],
    image:"",
    released:"",
    rating:0
  })

  const validate = (state, name) => {
    switch (name) {
      case "name":
        if(state.name === ""){
          setErrors({...errors, name: "campo requerido."})
        }else{
          setErrors({...errors, name: ""})

        }
        break;

      case "description":

      break;

      case "platforms":

     break;

      default:
       break;
    }
  }

  const handleChange = (event) => {
    const key = event.target.name
    switch (key) {
      case "platforms":

      setState((copiaState)=>{
        const verification = copiaState.platforms.filter((p)=>p===event.target.value)
        const newPlatforms = !verification.length
        ?{...state, platforms: [...copiaState.platforms, event.target.value]}
        :{...state, platforms: copiaState.platforms.filter((p)=>p!==event.target.value)}
        return newPlatforms;

        
      })
      break;

      case "genres":
        
        setState((copiaState)=>{
          const verification = copiaState.genres.filter((p)=>p===event.target.value)
          const newGenres = !verification.length
          ?{...state, genres: [...copiaState.genres, event.target.value]}
          :{...state, genres: copiaState.genres.filter((p)=>p!==event.target.value)}
          return newGenres;

        })
        
        break
    
      default:
        setState({
          ...state,
          [event.target.name]: event.target.value
        })
    
        validate(state, event.target.name)
        break;
    }
   
  }

  // const disabledFunction = () => {
  //   let disabledAux = true;
  //   for(let error in errors){
  //     if(errors[error]==="") disabledAux = false
  //     else{
  //       disabledAux = true;
  //       break;
  //     }
  //   }
  //   return disabledAux
  // }

  // const hanldeSubmit = (event) => {
  //   event.preventDefautl();  
  //   dispatch(postGame(state));
  // }

  const hanldeSubmit = (event) => {
    event.preventDefault()
    const response = axios.post("http://localhost:3001/videogames", state)
    .then(res=>alert("Posted successfully!"))
    .catch(err=>alert("We were unable to post your activity, please try again or review the data you entered"))
}  



  return (
    <div className={styles.Container}>
      <form onSubmit={hanldeSubmit}>
        <label>Name:</label>
         <input name= "name" onChange={handleChange} type="text"/>
        <label>Description:</label>
         <input name= "description"onChange={handleChange} type="text"/>
        <label>Platforms:</label>
         <select name="platforms" onChange={handleChange}>
           {arrayPlatforms?.map(p => <option key={p} value={p}>{p}</option>)}
         </select>
           {state.platforms.map(p => (<p>{p}</p>) )}

           <label>Genres:</label>
         <select name="genres" onChange={handleChange}>
           {allGenres?.map((g,i)=> <option key={i} value={g.id}>{g.name}</option>)} 
         </select>
           <h4>GENRES SELECTED:{state.genres.length}</h4>
        <label>image:</label>
         <input name= "image" onChange={handleChange} type="text"/>
        <label>Released:</label>
         <input name = "released" onChange={handleChange} type="date"/>
        <label>Rating:</label>
         <input name="rating"onChange={handleChange} type="number"/>
         <button type="submit">Enviar</button>
         

      <div className={styles.button}><NavBar/></div>
         
      </form>

    </div>
  );



//   return(
//     <div className={styles.Container}>
//       <div className={styles.card}>
//       <div className={styles.button}><NavBar/></div>

//       <h1 className={styles.text}>Create a new videogame</h1>
//       <form onSubmit={hanldeSubmit}>
//           <div>
//               <label className={styles.text} htmlFor="">Game title: </label>
//               <input type="text" value={state.name} onChange={handleChange} name="name"/>
//              {errors.name && <span className={styles.text} >{errors.name}</span>} 
//            </div>
//           <div>
//               <label  className={styles.text} htmlFor="">Short description: </label>
//               <input type="textarea" value={state.description} onChange={handleChange} name="description"/>
//              {errors.description && <span  className={styles.text} >{errors.description}</span> } 
//           </div>
//           <div>
//               <label  className={styles.text}  htmlFor="">Platforms: </label>
//               {/* <input type="text" value={state.platforms} onChange={handleChange} name="platforms"/> array de opciones varias */}
//               <select name="platforms" onChange={handleChange}>
//   //          {arrayPlatforms?.map(p => <option key={p} value={p}>{p}</option>)}
//   //        </select>
//   //          {state.platforms.map(p => (<p>{p}</p>) )}
//           </div>
//           <div>
//               <label   className={styles.text} htmlFor="">Image URL: </label>
//               <input type="text" value={state.image} onChange={handleChange} name="image"/>
//           </div>
//           <div>
//               <label   className={styles.text} htmlFor="">Released data: </label>
//               <input type="date" value={state.released} onChange={handleChange} name="released"/>
//           </div>
//           <div>
// <label   className={styles.text} htmlFor="">Rating: </label>
// <select value={state.rating} onChange={handleChange} name="rating">
//   <option value="">-- Select a rating --</option>
//   <option value="1">1</option>
//   <option value="2">2</option>
//   <option value="3">3</option>
//   <option value="4">4</option>
//   <option value="5">5</option>
// </select>
// </div>

//           <div>
//               <label   className={styles.text} htmlFor="">Genre: </label>
//               <input type="text" value={state.genre} onChange={handleChange} name="genre"/>
//           </div>
//           <div>
//               <button   className={styles.button} type="submit">submit</button>
//           </div>
//       </form>
//       </div>
//       </div>

//   )
}

export default Create;