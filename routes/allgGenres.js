import express from "express";
import allGenreController from "../controllers/allGenreController.js";
const allGenres = express.Router();

allGenres.get("/", allGenreController);

export default allGenres;
