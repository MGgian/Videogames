const {createGenre, getGenresController} = require ('../controllers/genresControllers')


const getGenresHandler = async (req, res)=>{
    
    try {
    let genres = await getGenresController();
    if(genres.length){
        res.status(201).json(genres);

    }else{
        const newGenre = await createGenre();
        res.status(201).json(newGenre); //newGenre se guardan los genre 
    }
   

    } catch (error) {
        console.log(error)
        res.status(400).json({error:error.message})
        
    }
}; 

module.exports = getGenresHandler;