// import { composeWithDevTools } from "redux-devtools-extension"; //para ver como se trasnforma el estado
// import { createStore, applyMiddleware } from "redux";
// import thunkMiddleware from "redux-thunk"; //es un middleware que nos ayuda a trabajar con asincronia. Redux no sabe 
// //trabajar con asincronia sin thunk.
// import rootReducer from "../reducer";


// export const store = createStore(
//     rootReducer, 
//     composeWithDevTools(applyMiddleware(thunkMiddleware)))

import { createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducer";
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

// Create recibe 1 Reducer 2 Configuraciones
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;



