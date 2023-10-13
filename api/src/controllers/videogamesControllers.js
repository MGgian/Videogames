const { Op } = require('sequelize');
const { Videogame, Genres } = require ('../db');
const axios = require ('axios');
const { KEY, URL } = process.env


//Controller post videogame
//debe crear un videojuego en la base de datos y este debe estar relacionado con sus generos indicados(al meno uno)

// const createVideogame =  async (name,description,platforms,image,released,rating) =>{
//     return await Videogame.create({name,description,platforms,image,released,rating})
// };

const createVideogame = async(name, description, platforms, image, released, rating, genres)=>{
  const newGame = await Videogame.create({name, description, platforms, image, released, rating})
  newGame.addGenres(genres)
  return newGame;
};

//Controler get videogame by id

const getVideogameById = async (id, source) => {
    const response = source === "api"
    ?await axios.get(`${URL}/games/${id}?key=${KEY}`)
    :await Videogame.findByPk(id);
    if( source === "api") {
      console.log(response.data)
        const {id, name, description, released, background_image, rating, genres} = response.data;
        const platforms = [response.data.platforms, response.data.parent_platforms]
          .flatMap(platform => platform.map(p => p.platform.name))
           .filter((name, index, arr)=> arr.indexOf(name)=== index);
        genresName = genres.map(data=> data.name);
        return {id, name, description, released, platforms, background_image, rating, genres};
    }else{
        return response;
    }

};

//controller get all games

const cleanArray = (arr) =>{
    return arr.map(elem => {
        const platforms = [elem.platforms, elem.parent_platforms]
          .flatMap(platform => platform.map(p => p.platform.name))
          .filter((name, index, arr)=> arr.indexOf(name)=== index);
        const genres = elem.genres.map(g => g.name);
        return {
            id: elem.id,
          name: elem.name,
          description: elem.description,
          platforms: platforms,
          image: elem.background_image,
          released: elem.released,
          rating: elem.rating,
          genre: genres,
          created: false
        };
    })
};

const getAllGames = async () => {
    const dbVideogames = await Videogame.findAll({
      inluide: {
        model: Genres, 
        attributes:['name'],
            through:{
                attributes:[],
            }
      }
    });
    console.log(dbVideogames);
    const apiVideogamesRaw = (await axios.get(`${URL}/games?key=${KEY}`)).data.results;
    const apiVideogames = cleanArray(apiVideogamesRaw);
    return [...dbVideogames,...apiVideogames]
};

//controllers get games by name

const getVideogameByName = async (name) => {
    const dbVideogames = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      },
      limit: 100
    });
    const apiVideogamesRaw = (await axios.get(`${URL}/games?search=${name}&key=${KEY}&pageSize=15`)).data.results;
    const apiVideogames = cleanArray(apiVideogamesRaw);
    const filteredApi = apiVideogames.filter((game) => game.name.toLowerCase().includes(name.toLowerCase()));
    const result = [...dbVideogames, ...filteredApi];
    if (result.length === 0) {
      return { message: `No se encontró ningún videojuego que coincida con: '${name}'.` };
    }
    return result.slice(0, 15);
};

const resp1 = (await axios(`https://api.rawg.io/api/games?page_size=40&page=3&key=${API_KEY}`)).data.results
const resp2 = (await axios(`https://api.rawg.io/api/games?page_size=40&page=6&key=${API_KEY}`)).data.results
const resp3 = (await axios(`https://api.rawg.io/api/games?page_size=20&page=9&key=${API_KEY}`)).data.results

if(!resp1.length || !resp2.length || !resp3.length) throw new Error('La información que busca ya no se encuentra aquí')
const videogamesApi = [...resp1, ...resp2, ...resp3].map((videogame)=> {
    return {
        id: videogame.id,
        name: videogame.name,
        background_image: videogame.background_image,
        rating: videogame.rating,
        genres: videogame.genres.map((gen)=>{ 
        return {name: gen.name}})
    }
})

module.exports = {
    createVideogame,
    getVideogameById, 
    getAllGames, 
    getVideogameByName
};