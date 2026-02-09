import express from "express";
import deleteController from "../controllers/deleteController.js";
const deleteGenre = express.Router();

deleteGenre.delete("/deleteGenre/:id", deleteController);

export default deleteGenre;
