const { Router } = require("express");
const genresRouter = Router();

//IMPORT HANDLERS
const getGenresHandler = require("../handlers/genresHandlers")


//GETTIN ROUTES
genresRouter.get("/", getGenresHandler);
    

module.exports = genresRouter;