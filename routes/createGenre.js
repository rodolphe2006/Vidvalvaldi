import express from "express";
import createGenreController from "../controllers/createGenreController.js";

const createGenre = express.Router();

createGenre.post("/createGenre", createGenreController);

export default createGenre;
