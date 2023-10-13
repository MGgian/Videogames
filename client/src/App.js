//importar las herraminetas de routing
import {  Route , Routes} from "react-router-dom";
import Create from './views/create/create.component';
import Detail from './views/detail/detail.component';
import Home from './views/home/home.component';
import Landing from './views/landing/landing.component'
// import { BrowserRouter } from "react-router-dom";


import './App.css';
import Navbar from "./components/navbar/navbar.component";

function App() {
  return (
    
    <div className="App">
      <Routes>
      
      
       <Route exact path="/" element={<Landing/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/detail" element={<Detail/>}/>
       <Route path="/create" element={<Create/>}/>
       </Routes>
      
     </div>
    
  );
}

export default App;


// import { Route, Routes } from 'react-router-dom';
// import Create from './views/create/create.component';
// import Detail from './views/detail/detail.component';
// import Home from './views/home/home.component';
// import Landing from './views/landing/landing.component';

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/detail" element={<Detail />} />
//         <Route path="/create" element={<Create />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

