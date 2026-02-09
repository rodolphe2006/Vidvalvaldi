import express from "express";
import dotenv from "dotenv";
import allGenres from "./routes/allgGenres.js";
import createGenre from "./routes/createGenre.js";
import genreByid from "./routes/genreById.js";
import editGenre from "./routes/editGenre.js";
import deleteGenre from "./routes/deleteGenre.js";

dotenv.config();

const app = express();
const preFix = "/Vidvaldi";

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(preFix, allGenres);
app.use(preFix, createGenre);
app.use(preFix, genreByid);
app.use(preFix, editGenre);
app.use(preFix, deleteGenre);
app.listen(port);
