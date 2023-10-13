const axios = require('axios');
const {KEY,URL} = process.env;
const {Genres} = require('../db');


const createGenre = async ()=> 
await axios.get(`${URL}/genres?key=${KEY}`)
.then(async(response)=>{
    const data = response.data.results;
    const genres = data.map((genre) => genre.name);
    const newGenres = await Genres.bulkCreate(genres.map((name) => ({ name })));
    return newGenres
});

const getGenresController = async () => {
    const genres = await Genres.findAll()   //get a base de datos
    return genres;
}


module.exports = {createGenre,
                  getGenresController};

