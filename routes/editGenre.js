import express from "express";
import editGenreController from "../controllers/editGenreController.js";
const editGenre = express.Router();

editGenre.put("/edit/:id", editGenreController);

export default editGenre;
