import React from 'react'
import Cards from '../../components/cards/cards.component'
import NavBar from '../../components/navbar/navbar.component'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterGenresAction, getGames, paginateGames } from '../../redux/actions/action'
import styles from "./home.module.css"
import SearchBar from '../../components/searchbar/searchbar.component'




 const Home = () => {

  const dispatch = useDispatch();

  // const [loading, setLoading] = useState(true);


  const allGames = useSelector((state)=> state.allGames)
  const allGenres = useSelector((state)=> state.allGenres)

 useEffect(()=>{
  dispatch(getGames());
 },[])

// useEffect(()=>{
//  const timer = setTimeout(() => {
//   setLoading(false);
// }, 2000);
// return () => clearTimeout(timer);
// }, []);

 const paginate = (event) => {
  dispatch(paginateGames(event.target.name))
}

const filterGenres = (event) => {
  dispatch(filterGenresAction(event.target.value))
}

  return (
    
    <div className={styles.envelop}>
      <SearchBar/>
      <div>
        <h4>Paginado:</h4>
        <select onChange={filterGenres} name="genres">
          {allGenres.map(p => <option key={p} valiue={p}>{p}</option>)}
        </select>
     <button name='prev' onClick={paginate}>Prev</button><button name='next' onClick={paginate}>Next</button>
    </div>
      <Cards allGames={allGames}/>
    <div className={styles.container}>
        <h4>Filtros/Ordenamientos:</h4>
        <select name="games">
          {allGames?.map(p=> <option key={p} value={p}>{p.name}</option>)}
        </select>
      </div>
      
      
    </div>
    
    
  )
}

export default Home;

