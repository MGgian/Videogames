import axios from "axios"; 
import {DELETE_GAME, GET_BY_ID, ERROR_VIDEOGAME, FILTER, GET_GAMES,
        GET_GENRES, NAME_SEARCHED, CLEAN, CLEAN_OBJECT, EDIT_GAME, MOUNT, UNMOUNT,
        PAGINATE, GET_BY_NAME } 
        from "./action-types";

// export const GET_GAMES = "GET_GAMES" 
// export const GET_BY_NAME = "GET_BY_NAME"

// export function getGames(){
//     return async function(dispatch) {
//      const response = await axios("http://localhost:3001/videogames");

//     return dispatch({
//         type:"GET_GAMES",
//         payload: response.data
//     })
// }
// }

// export const getGames = ()=>{
//     return async function (dispatch){
//         const apiData = await axios.get("http://localhost:3001/videogames");
//         const videoGames = apiData.data;
//         dispatch({type:GET_GAMES,payload:videoGames})
//     };
// }

// export function getByName(name){
//     return async function (dispatch){
//         const response = await axios(`http://localhost:3001/videogames/?name=${name}`);
//         return dispatch({
//             type: "GET_BY_NAME",
//             payload: response.data,
//         })
//     };
// }

export function getGames(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/videogames")
            console.log(response)  
            dispatch({
                type: GET_GAMES,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
            
        }
    
    }
}
export function getGenres(){
    return async function(dispatch){
        try {
            const response = await axios.get("http://localhost:3001/genres")
            console.log(response)  
            dispatch({
                type: GET_GENRES,
                payload: response.data
            })
        } catch (error) {
            alert(error.response.data.error)
            
        }
    
    }
}

export const getByName = (name) => {
    return async (dispatch) => {
       try {
          const endpoint = `http://localhost:3001/videogames?name=${name}`;
          const response = await axios.get(endpoint)
             return dispatch({
                type: GET_BY_NAME,
                payload: response.data,
             });
       } catch (error) {
          console.log(error);
       }
    }
 }

export const getById = (id) => {
    return async (dispatch) => {
       try {
          const endpoint = `http://localhost:3001/videogames/${id}`;
          const response = await axios.get(endpoint)
          
          if(!id) return dispatch({type: GET_BY_ID, payload:{}})
             return dispatch({
                type: GET_BY_ID,
                payload: response.data,
             });
       } catch (error) {
          console.log(error);
       }
    }
 }

export function postGame(state){
    return async function(){
        try {
            console.log(state)
            await axios.post("http://localhost:3001/videogames", state)
            alert("Game creado con exito");
        } catch (error) {
            alert("sucedio un error");
            
        }
    }
}

export function paginateGames(order){  //order es el indentificador que indica para donde estoy paginando. derecha o izquierda
    return async function(dispatch){
        try {
            dispatch({
                type: PAGINATE,
                payload: order
            })
        } catch (error) {
            alert(error.response.data.error)
            
        }
    
    }
}


export function filterGenresAction(genre){  //order es el indentificador que indica para donde estoy paginando. derecha o izquierda
    return async function(dispatch){
        console.log(genre)
        try {
            dispatch({
                type: FILTER,
                payload: genre
            })
        } catch (error) {
            alert(error.response.data.error)
            
        }
    
    }
}
export const deleteVideogame = (id) => {
    return async (dispatch) => {
      try {
        const endpoint = `http://localhost:3001/videogames/${id}`;
        const {data} = await axios.delete(endpoint);
        return dispatch({
          type: DELETE_GAME,
          payload: data
        });
      } catch (err) {
       return dispatch({
          type: ERROR_VIDEOGAME,
          payload: await err.response.data
       })
      }
    };
 };

 export const nameSearched = (name) => {
    return {
       type: NAME_SEARCHED,
       payload: name
    }
 }
 export const clean = () => {
    return {
       type: CLEAN,
       payload: ''
    }
 }
 
 export const cleanObject = () => {
    return {
       type: CLEAN_OBJECT,
       payload: {}
    }
 }
 
 export const putVideogame = (update) => {
    return async (dispatch) => {
      try {
        const endpoint = `http://localhost:3001/videogames`;
        const {data} = await axios.put(endpoint, update);
        return dispatch({
          type: EDIT_GAME,
          payload: data
        });
      } catch (err) {
       return dispatch({
          type: ERROR_VIDEOGAME,
          payload: await err.response.data
       })
      }
    };
 };
 
 export const mountComp = () => {
    return {
       type: MOUNT,
       payload: true
    }
 }
 
 export const unmountComp = () => {
    return {
       type: UNMOUNT,
       payload: false
    }
 }

