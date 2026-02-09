import express from "express";
import allGenreController from "../controllers/allGenreController.js";
const allGenres = express.Router();

allGenres.get("/genres", allGenreController);

export default allGenres;
