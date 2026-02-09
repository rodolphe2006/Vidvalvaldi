import express from "express";
import getByIdController from "../controllers/getByIdController.js";
const genreByid = express.Router();

genreByid.get("/getGenre/:id", getByIdController);

export default genreByid;
