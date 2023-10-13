// Dentro de este reducer vamos a agregar el estado inicial. Vamos a tener el estado declarado en codigo.
// import { GET_GAMES, GET_BY_NAME } from "../actions/action";

// import { Switch } from "react-router-dom";

let initialState = {allGames:[],
     allGenres:[],
     userCopy: [],
     posts: [],
     allGamesBackUp: [],
     currentPage: 0,

    }

// function rootReducer(state = initialState, action){
//     switch(action.type){
//         case GET_GAMES:
//             return{
//                 ...state,
//                 allGames: action.payload
//             }
//         case GET_BY_NAME:
//             return {
//                 ...state,
//                 allGames: action.payload,
//             }
//         default:
//             return {...state}
//     }
// }

// export  default rootReducer;


function rootReducer(state = initialState,action){
    const ITEMS_PER_PAGE = 15;
    switch (action.type) {
        case "GET_GAMES":
            return{
                ...state,
                allGames: [...action.payload].splice(0, ITEMS_PER_PAGE),
                allGamesBackUp: action.payload
            }
        case "GET_GENRES":
            return{
                ...state,
                allGenres: [...action.payload],
                
            }
        case "PAGINATE":
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const firstIndex = action.payload === "next" ? ITEMS_PER_PAGE:prev_page * ITEMS_PER_PAGE;

            if(action.payload === "next" && firstIndex >= state.allGamesBackUp.length) return state;
            else if(action.payload === "prev" && prev_page < 0) return state; //casos de corte, para qeu siga pasando de pagina en pagina 

            return{
                ...state,
                allGames: [...state.allGamesBackUp].splice(firstIndex, ITEMS_PER_PAGE),
                currentPage: action.payload === "next"? next_page : prev_page
            }
            
    
        default: return state
            break;
    
    }

};



export default rootReducer;