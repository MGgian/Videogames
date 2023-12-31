const axios = require('axios');
const {Videogame} = require('../db');
const { createVideogame, getVideogameById, getVideogameByName, getAllGames } = require("../controllers/videogamesControllers");



const getVideogamesHandler = async (req, res) => {
    const {name} = req.query;
    const results = name?await getVideogameByName(name):await getAllGames();
    
    if(name){
        res.send(await results);
    }else{
        res.send(await results);

    }
};


const getVideogameByIdHandler = async (req, res) => {
    const {id} = req.params;
    const source = isNaN(id)?"db":"api";
    try{
        const videoGame = await getVideogameById(id,source)
        res.status(200).json(videoGame);
        console.log(videoGame);
    }catch (error) {
        res.status(400).json({error:error.message});
    }
};

const postVideogamesHandler = async (req, res) =>{
    const {name, description, platforms, image, released, rating, genres} = req.body;
    try {
        if(!name||!description||!platforms||!image||!released||!rating||!genres) throw Error("Missing data");
        const newVideoGame = await createVideogame(name,description,platforms,image,released,rating,genres);
        res.status(201).json(newVideoGame.dataValues);
    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
    }
}


module.exports = {
    getVideogamesHandler,
    getVideogameByIdHandler,
    postVideogamesHandler, 
};