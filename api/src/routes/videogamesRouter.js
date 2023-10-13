const {Router} = require("express")
const videogamesRouter = Router();
//IMPORT HANDLERS
const {
    getVideogamesHandler,
    getVideogameByIdHandler, 
    postVideogamesHandler,
} = require("../handlers/videogameshandlers");

// GET ROUTES
videogamesRouter.get("/", getVideogamesHandler);
videogamesRouter.get("/:id", getVideogameByIdHandler);

//POST ROUTES
videogamesRouter.post("/", postVideogamesHandler);





module.exports = videogamesRouter;