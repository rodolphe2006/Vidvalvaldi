import { Genres } from "../view/myDb.js";

export default function allGenreController(req, res) {
  res.json(Genres);
}
